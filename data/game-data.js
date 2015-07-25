$.ajaxSetup({cache: false}); //TODO do usunięcia

var counter = 0;
var animationState = 0;
var animationDuration = 30;

var drugHistory = [];

var parameters = {
    "puls":{
      "name": "Puls",
      "goal": 0,
      "val": 50,
      "diff": 10
    },
    "rownowaga":{
      "name": "Równowaga",
      "goal": 0,
      "val": 50,
      "diff": 10
    },
    "nawodnienie":{
      "name": "Nawodnienie",
      "goal": 100,
      "val": 85,
      "diff": 20
    },
    "koncentracja":{
      "name": "Koncentracja",
      "goal": 100,
      "val": 20,
      "diff": -10
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
            "puls": -20,
            "rownowaga": -20,
            "nawodnienie": 20,
            "koncentracja": 0,
            "energia": 20
        }
    },
    "cukierek": {
        "type":"drug",
        "title": "Cukierek",
        "shortcut": "Cu",
        "color": "#e5d73d",
        "params": {
            "puls": -20,
            "rownowaga": -20,
            "nawodnienie": 20,
            "koncentracja": 0,
            "energia": 20
        }
    },
    "dopalacze": {
        "type":"drug",
        "title": "Dopalacze",
        "shortcut": "Do",
        "color": "#309bf6",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    },
    "kebab": {
        "type":"drug",
        "title": "Kebab",
        "shortcut": "Ke",
        "color": "#f59c00",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    },
    "kokaina": {
        "type":"drug",
        "title": "Kokaina",
        "shortcut": "Ko",
        "color": "#3dd7e5       ",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    },
    "marihuana": {
        "type":"drug",
        "title": "Marihuana",
        "shortcut": "Ma",
        "color": "#0bd636",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    },
    "mdma": {
        "type":"drug",
        "title": "MDMA",
        "shortcut": "Md",
        "color": "#e5d73d",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
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
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    },
    "odpoczynek": {
        "type":"drug",
        "title": "Odpoczynek",
        "shortcut": "Od",
        "color": "#0bd636",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    },
    "piwo": {
        "type":"drug",
        "title": "Piwo",
        "shortcut": "Pi",
        "color": "#f59c00",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    },
    "powietrze": {
        "type":"drug",
        "title": "Powietrze",
        "shortcut": "Po",
        "color": "#3dd7e5",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    },
    "wino": {
        "type":"drug",
        "title": "Wino",
        "shortcut": "Wi",
        "color": "#ff3333",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    },
    "woda": {
        "type":"drug",
        "title": "Woda",
        "shortcut": "Wo",
        "color": "#309bf6",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    },
    "wodka": {
        "type":"drug",
        "title": "Wódka",
        "shortcut": "Vo",
        "color": "#f59c00",
        "params": {
            "puls": 20,
            "rownowaga": 20,
            "nawodnienie": 20,
            "koncentracja": 20,
            "energia": 20
        }
    }
};

var buttons;