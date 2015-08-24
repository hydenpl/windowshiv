$.ajaxSetup({cache: false}); //TODO do usunięcia

var counter = 0;
var animationDuration = 30;
var animationState = animationDuration;

var loopAnimationState = 0;
var loopAnimationDuration = 30;

var drugHistory = [];

var gameFinished = false;

var interval;

var parameters = {
    "puls":{
      "name": "Puls",
      "goal": 0,
      "val": 50,
      "diff": 0
    },
    "rownowaga":{
      "name": "Równowaga",
      "goal": 0,
      "val": 50,
      "diff": 0
    },
    "nawodnienie":{
      "name": "Nawodnienie",
      "goal": 100,
      "val": 50,
      "diff": 0
    },
    "koncentracja":{
      "name": "Koncentracja",
      "goal": 100,
      "val": 50,
      "diff": 0
    },
    "energia":{
      "name": "Energia",
      "goal": 0,
      "val": 50,
      "diff": 0
    }
};

var finishedMsgs = {
    "puls":{
      0: "Muzyka może gra, ale Twoje serce straciło rytm.",
      100: "Serce nie sługa - ma swoje granice!"
    },
    "rownowaga":{
      0: "Padłeś/aś, nie powstaniesz!",
      100: "Zastygasz w miejscu!"
    },
    "nawodnienie":{
      0: "Odwodnienie. Z pustego i Salomon nie naleje!",
      100: "Pęcherz pęka w szwach, a krew się rozrzedza!"
    },
    "koncentracja":{
      0: "Koncentracja siadła.. Twój mózg mówi \"pa pa\"!",
      100: "Dość, znaczy dość - wszystkiego nie ogarniesz! Idzie zwariować!"
    },
    "energia":{
      0: "Baterie siadły!",
      100: "Wystrzelony/a w kosmos po Ziemi nie pochodzisz."
    }
}

var drugs = {
    "amfetamina": {
        "type":"drug",
        "duration": 3,
        "ratio":1,
        "title": "Amfetamina",
        "shortcut": "Am",
        "color": "#ff3333",
        "params": {
            "puls": +15,
            "rownowaga": 0,
            "nawodnienie": -20,
            "koncentracja": 20,
            "energia": 30
        }
    },
    "cukierek": {
        "type":"drug",
        "duration": 1,
        "ratio":2,
        "title": "Cukierek",
        "shortcut": "Cu",
        "color": "#e5d73d",
        "params": {
            "puls": 0,
            "rownowaga": "up:5",
            "nawodnienie": "up:10",
            "koncentracja": "up:5",
            "energia": "up:5"
        }
    },
    "dopalacze": {
        "type":"drug",
        "duration": 3,
        "ratio":1,
        "title": "Dopalacze",
        "shortcut": "Do",
        "color": "#309bf6",
        "params": {
            "puls": 'vary:40',
            "rownowaga": 'vary:40',
            "nawodnienie": 'vary:20',
            "koncentracja": 'vary:30',
            "energia": 'vary:30'
        }
    },
    "kebab": {
        "type":"drug",
        "duration": 2,
        "ratio":1,
        "title": "Kebab",
        "shortcut": "Ke",
        "color": "#f59c00",
        "params": {
            "puls": 0,
            "rownowaga": "up:10",
            "nawodnienie": "up:5",
            "koncentracja": 0,
            "energia": "up:10"
        }
    },
    "kokaina": {
        "type":"drug",
        "duration": 1,
        "ratio":1,
        "title": "Kokaina",
        "shortcut": "Ko",
        "color": "#3dd7e5       ",
        "params": {
            "puls": -20,
            "rownowaga": 10,
            "nawodnienie": -20,
            "koncentracja": 40,
            "energia": 40
        }
    },
    "marihuana": {
        "type":"drug",
        "duration": 1,
        "ratio":1,
        "title": "Marihuana",
        "shortcut": "Ma",
        "color": "#0bd636",
        "params": {
            "puls": 10,
            "rownowaga": -10,
            "nawodnienie": 10,
            "koncentracja": -30,
            "energia": -40
        }
    },
    "mdma": {
        "type":"drug",
        "duration": 2,
        "ratio":1,
        "title": "MDMA",
        "shortcut": "Md",
        "color": "#e5d73d",
        "params": {
            "puls": 30,
            "rownowaga": 10,
            "nawodnienie": -20,
            "koncentracja": -10,
            "energia": 20
        }
    },
    "mefedron": {
        "type":"drug",
        "duration": 3,
        "ratio":1,
        "title": "Mefedron",
        "shortcut": "Me",
        "color": "#c761b5",
        "params": {
            "puls": 20,
            "rownowaga": 10,
            "nawodnienie": -25,
            "koncentracja": 25,
            "energia": 35
        }
    },
    "odpoczynek": {
        "type":"drug",
        "duration": 2,
        "ratio":2,
        "title": "Odpoczynek",
        "shortcut": "Od",
        "color": "#0bd636",
        "params": {
            "puls": "reset:5",
            "rownowaga": "reset:10",
            "nawodnienie": 0,
            "koncentracja": "reset:10",
            "energia": "reset:10"
        }
    },
    "piwo": {
        "type":"drug",
        "duration": 3,
        "ratio":1,
        "title": "Piwo",
        "shortcut": "Pi",
        "color": "#f59c00",
        "params": {
            "puls": 7,
            "rownowaga": -7,
            "nawodnienie": -7,
            "koncentracja": -10,
            "energia": -7
        }
    },
    "powietrze": {
        "type":"drug",
        "duration": 1,
        "ratio":2,
        "title": "Powietrze",
        "shortcut": "Po",
        "color": "#3dd7e5",
        "params": {
            "puls": 0,
            "rownowaga": "up:15",
            "nawodnienie": 0,
            "koncentracja": "up:5",
            "energia": "up:5"
        }
    },
    "wino": {
        "type":"drug",
        "duration": 3,
        "ratio":1,
        "title": "Wino",
        "shortcut": "Wi",
        "color": "#ff3333",
        "params": {
            "puls": 10,
            "rownowaga": -10,
            "nawodnienie": -10,
            "koncentracja": -15,
            "energia": -10
        }
    },
    "woda": {
        "type":"drug",
        "duration": 1,
        "ratio":2,
        "title": "Woda",
        "shortcut": "Wo",
        "color": "#309bf6",
        "params": {
            "puls": "down:5",
            "rownowaga": "up:5",
            "nawodnienie": "up:20",
            "koncentracja": 0,
            "energia": "up:5"
        }
    },
    "wodka": {
        "type":"drug",
        "duration": 4,
        "ratio":1,
        "title": "Wódka",
        "shortcut": "Vo",
        "color": "#f59c00",
        "params": {
            "puls": 20,
            "rownowaga": -20,
            "nawodnienie": -20,
            "koncentracja": -20,
            "energia": -20
        }
    }
};

var messages = {
    "piwo":{
        "amfetamina":"Gratulujemy! ;P Po amfetaminie działania alkoholu nie odczujesz, a za dodatkowe odwodnienie Twój organizm raczej Ci nie podziękuje. \nAlkohol i amfetamina odwadniają organizm. Jeśli działają w połączeniu - szybkość odwodnienia się zwiększa.",
        "wodka":"Gratulujemy! ;P Zamiast zasady pnij się procentowo do góry, zegniesz się w pół… do wymiotów. Picie najpierw mocniejszych, a potem słabszych alkoholi może spowodować wymioty i bóle głowy.",
        "wino":"Gratulujemy! ;P Zamiast zasady pnij się procentowo do góry, zegniesz się w pół… do wymiotów. Picie najpierw mocniejszych, a potem słabszych alkoholi może spowodować wymioty i bóle głowy."
    },
    "wino":{
        "amfetamina":"Gratulujemy! ;P Po amfetaminie działania alkoholu nie odczujesz, a za dodatkowe odwodnienie Twój organizm raczej Ci nie podziękuje. \nAlkohol i amfetamina odwadniają organizm. Jeśli działają w połączeniu - szybkość odwodnienia się zwiększa.",
        "wodka":"Gratulujemy! ;P Zamiast zasady pnij się procentowo do góry, zegniesz się w pół… do wymiotów.Picie najpierw mocniejszych, a potem słabszych alkoholi może spowodować wymioty i bóle głowy."
    },
    "wodka":{
        "amfetamina":"Gratulujemy! ;P Po amfetaminie działania alkoholu nie odczujesz, a za dodatkowe odwodnienie Twój organizm raczej Ci nie podziękuje. \nAlkohol i amfetamina odwadniają organizm. Jeśli działają w połączeniu - szybkość odwodnienia się zwiększa.",
    },
    "dopalacze":{
        "amfetamina": "Gratulujemy! ;P Twój organizm zwariował. \n Ta mieszanka jest o tyle niebezpieczna, że nigdy nie wiesz do końca co z czym mieszasz. Może to doprowadzić do skrajnych i trudnych do przewidzenia reakcji organizmu.",
        "kokaina": "Gratulujemy! ;P Twój organizm zwariował. \n Ta mieszanka jest o tyle niebezpieczna, że nigdy nie wiesz do końca co z czym mieszasz. Może to doprowadzić do skrajnych i trudnych do przewidzenia reakcji organizmu.",
        "mefedron": "Gratulujemy! ;P Twój organizm zwariował. \n Ta mieszanka jest o tyle niebezpieczna, że nigdy nie wiesz do końca co z czym mieszasz. Może to doprowadzić do skrajnych i trudnych do przewidzenia reakcji organizmu.",
    },
    "marihuana":{
        "piwo": "Gratulujemy! ;P Takim połączeniem udowodniłeś, że liczy się „zgon”. Najpierw alkohol, potem marihuana…Ta kolejność łączenia może spowodować utratę świadomości szybszą niż się spodziewasz.",
        "wodka": "Gratulujemy! ;P Takim połączeniem udowodniłeś, że liczy się „zgon”. Najpierw alkohol, potem marihuana…Ta kolejność łączenia może spowodować utratę świadomości szybszą niż się spodziewasz.",
        "wino": "Gratulujemy! ;P Takim połączeniem udowodniłeś, że liczy się „zgon”. Najpierw alkohol, potem marihuana…Ta kolejność łączenia może spowodować utratę świadomości szybszą niż się spodziewasz.",
    },
    "kokaina":{
        "amfetamina": "Masz tyle energii i napięcia, że nie wiesz co z tym zrobić. Ból w klatce piersiowej? Spokojnie, może Twoje serce za chwile stanie! Łączenie amfetaminy z kokainą może spowodować duże przeciążenie dla Twego serca oraz odwodnienie. Mogą się uaktywnić stany lękowe.",
        "mefedron": "Masz tyle energii i napięcia, że nie wiesz co z tym zrobić. Ból w klatce piersiowej? Spokojnie, może Twoje serce za chwile stanie! Łączenie mefedronu z kokainą może spowodować duże przeciążenie dla Twego serca oraz odwodnienie. Mogą się uaktywnić stany lękowe.",
    },
    "cukierek":{
        "amfetamina": "Gratulujemy! ;) Ślinianki pracują, żuchwa się rusza! Kwaśny cukierek uruchomi ślinianki i zmniejszy ryzyko odwodnienia. Może też rozluźnić spiętą żuchwę"
    },
    "woda":{
        "amfetamina": "Gratulujemy! ;) Przeciwdziałasz odwodnieniu. Tylko nie przesadzaj – nie więcej niż 0,5 litra wody na godzinę. Co za dużo, to nie zdrowo i możesz sobie zaszkodzić zamiast pomóc.",
        "mdma": "Gratulujemy! ;) Przeciwdziałasz odwodnieniu. Tylko nie przesadzaj – nie więcej niż 0,5 litra wody na godzinę. Co za dużo, to nie zdrowo i możesz sobie zaszkodzić zamiast pomóc.",
        "wodka": "Gratulujemy! ;) Przeciwdziałasz odwodnieniu. Tylko nie przesadzaj – nie więcej niż 0,5 litra wody na godzinę. Co za dużo, to nie zdrowo i możesz sobie zaszkodzić zamiast pomóc.",
    },
    "kebab":{
        "amfetamina": "Gratulujemy! Twój organizm, mimo że tego możesz nie czuć, podziękuje Ci za nie zagłodzenie go! Jedzenie dostarczy Twojemu organizmowi energii i doda Ci sił.",
        "kokaina": "Gratulujemy! Twój organizm, mimo że tego możesz nie czuć, podziękuje Ci za nie zagłodzenie go! Jedzenie dostarczy Twojemu organizmowi energii i doda Ci sił.",
        "mefedron": "Gratulujemy! Twój organizm, mimo że tego możesz nie czuć, podziękuje Ci za nie zagłodzenie go! Jedzenie dostarczy Twojemu organizmowi energii i doda Ci sił.",
        "piwo": "Gratulujemy! Twój organizm, mimo że tego możesz nie czuć, podziękuje Ci za nie zagłodzenie go! Jedzenie dostarczy Twojemu organizmowi energii i doda Ci sił.",
    },
    "odpoczynek":{
        "mefedron":"Gratulujemy! Dałeś/aś organizmowi szansę na regenerację. Sen pozwoli Twojemu organizmowi na regenerację i powrót do równowagi.",
        "wodka":"Gratulujemy! Dałeś/aś organizmowi szansę na regenerację. Sen pozwoli Twojemu organizmowi na regenerację i powrót do równowagi.",
        "piwo":"Gratulujemy! Dałeś/aś organizmowi szansę na regenerację. Sen pozwoli Twojemu organizmowi na regenerację i powrót do równowagi.",
        "wino":"Gratulujemy! Dałeś/aś organizmowi szansę na regenerację. Sen pozwoli Twojemu organizmowi na regenerację i powrót do równowagi.",
        "kokaina":"Gratulujemy! Dałeś/aś organizmowi szansę na regenerację. Sen pozwoli Twojemu organizmowi na regenerację i powrót do równowagi.",
    }
}

var buttons;