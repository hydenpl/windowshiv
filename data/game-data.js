$.ajaxSetup({cache: false}); //TODO do usunięcia

var counter = 0;
var animationDuration = 30;
var animationState = animationDuration;

var loopAnimationState = 0;
var loopAnimationDuration = 30;

var drugHistory = [];

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

var drugs = {
    "amfetamina": {
        "type":"drug",
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
        "title": "Cukierek",
        "shortcut": "Cu",
        "color": "#e5d73d",
        "params": {
            "puls": 0,
            "rownowaga": 10,
            "nawodnienie": 20,
            "koncentracja": 10,
            "energia": 10
        }
    },
    "dopalacze": {
        "type":"drug",
        "title": "Dopalacze",
        "shortcut": "Do",
        "color": "#309bf6",
        "params": {
            "puls": -20,
            "rownowaga": 0,
            "nawodnienie": 10,
            "koncentracja": 0,
            "energia": 0
        }
    },
    "kebab": {
        "type":"drug",
        "title": "Kebab",
        "shortcut": "Ke",
        "color": "#f59c00",
        "params": {
            "puls": 0,
            "rownowaga": 20,
            "nawodnienie": 10,
            "koncentracja": 0,
            "energia": 20
        }
    },
    "kokaina": {
        "type":"drug",
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
        "title": "Odpoczynek",
        "shortcut": "Od",
        "color": "#0bd636",
        "params": {
            "puls": 0,
            "rownowaga": 30,
            "nawodnienie": 0,
            "koncentracja": 10,
            "energia": 20
        }
    },
    "piwo": {
        "type":"drug",
        "title": "Piwo",
        "shortcut": "Pi",
        "color": "#f59c00",
        "params": {
            "puls": 10,
            "rownowaga": -10,
            "nawodnienie": -10,
            "koncentracja": -15,
            "energia": -10
        }
    },
    "powietrze": {
        "type":"drug",
        "title": "Powietrze",
        "shortcut": "Po",
        "color": "#3dd7e5",
        "params": {
            "puls": 0,
            "rownowaga": 30,
            "nawodnienie": 0,
            "koncentracja": 10,
            "energia": 10
        }
    },
    "wino": {
        "type":"drug",
        "title": "Wino",
        "shortcut": "Wi",
        "color": "#ff3333",
        "params": {
            "puls": 15,
            "rownowaga": -15,
            "nawodnienie": -15,
            "koncentracja": -20,
            "energia": -15
        }
    },
    "woda": {
        "type":"drug",
        "title": "Woda",
        "shortcut": "Wo",
        "color": "#309bf6",
        "params": {
            "puls": -10,
            "rownowaga": 10,
            "nawodnienie": 40,
            "koncentracja": 0,
            "energia": 10
        }
    },
    "wodka": {
        "type":"drug",
        "title": "Wódka",
        "shortcut": "Vo",
        "color": "#f59c00",
        "params": {
            "puls": 30,
            "rownowaga": -30,
            "nawodnienie": -30,
            "koncentracja": -30,
            "energia": -30
        }
    }
};

var buttons;