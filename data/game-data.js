var counter = 0;
var animationState = 0;
var animationDuration = 30;

var historyIdCounter = 0;

var drugHistory = [];

var parameters = {
    "sleepness":{
      "name": "Zmęczenie",
      "goal": 0,
      "val": 50,
      "diff": 10
    },
    "heart":{
      "name": "Bicie serca",
      "goal": 100,
      "val": 85,
      "diff": 20
    },
    "hydration":{
      "name": "Nawodnienie",
      "goal": 100,
      "val": 20,
      "diff": -10
    },
    "breath":{
      "name": "Oddech",
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
        "color": "#3dd7e5",
        "params": {
            "sleepness": -20,
            "heart": 20,
            "hydration": 0,
            "breath": 20
        }
    },
    "piguly": {
        "type":"drug",
        "title": "Piguły",
        "shortcut": "Pi",
        "color": "#c761b5",
        "params": {
            "sleepness": -20,
            "heart": 20,
            "hydration": 0,
            "breath": 20
        }
    },
    "mefedron": {
        "type":"drug",
        "title": "Mefedron",
        "shortcut": "Me",
        "color": "#e5d73d",
        "params": {
            "sleepness": -20,
            "heart": 20,
            "hydration": 0,
            "breath": 20
        }
    },
    "marihuana": {
        "type":"drug",
        "title": "Marihuana",
        "shortcut": "Ma",
        "color": "#ff3333",
        "params": {
            "sleepness": -20,
            "heart": 20,
            "hydration": 0,
            "breath": 20
        }
    },
    "kokaina": {
        "type":"drug",
        "title": "Kokaina",
        "shortcut": "Ko",
        "color": "#f59c00",
       "params": {
            "sleepness": -20,
            "heart": 20,
            "hydration": 0,
            "breath": 20
        }
    }
};

var buttons;