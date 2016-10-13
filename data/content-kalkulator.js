protect_calc = {
    "protect-none": {
        "label": "Brak zabezpieczenia"
    },
    "protect-prez-zwykla": {
        "label": "Prezerwatywa zwykła"
    },
    "protect-prez-wzmac": {
        "label": "Prezerwatywa wzmacniana"
    },
    "protect-prez-smak": {
        "label": "Prezerwatywa smakowa"
    },
    "protect-chust": {
        "label": "Chusteczka lateksowa"
    },
    "protect-wazel": {
        "label": "Wazelina/oliwka"
    },
    "protect-prez-damska": {
        "label": "Prezerwatywa damska"
    },
    "protect-lubryk": {
        "label": "Lubrykant"
    }
};


czynnosci_calc = {
    "czynn-przytul": {
        "label": "Przytulanie, głaskanie",
        // "available": ["none", "prez-zwykla", "prez-wzmac", "prez-smak", "chust", "wazel", "prez-damska", "lubryk"], //ALL
        "available": ["none"],
        "risk": {
            "none":{
                "n":0
            },
        }
        // "risk": {
        //     "none":{
        //         "n":3
        //     },
        //     "p_zwykla":{
        //         "n":3
        //     },
        //     "p_wzmacniana":{
        //         "n":3
        //     },
        //     "p_smakowa":{
        //         "n":3
        //     },
        //     "p_damska":{
        //         "n":3
        //     },
        //     "p_zwykla_lubrykant":{
        //         "n":3
        //     },
        //     "p_wzmacniana_lubrykant":{
        //         "n":3
        //     },
        //     "p_smakowa_lubrykant":{
        //         "n":3
        //     },
        //     "p_damska_lubrykant":{
        //         "n":3
        //     },
        //     "p_dowolna_wazelina":{
        //         "n":3
        //     },
        //     "lubrykant":{
        //         "n":3
        //     },
        //     "wazelina":{
        //         "n":3
        //     },
        //     "chusteczka":{
        //         "n":3
        //     },
        //     "dwie_gumki":{
        //         "n":3
        //     },
        // }

    },
    "czynn-pocalunek": {
        "label": "Pocałunek",
        "available": ["none"],
        "risk": {
            "none":{
                "n":3
            }
        }
    },
    "czynn-dlon": {
        "label": "Dłoń",
        "available": ["none", "prez-zwykla", "prez-wzmac", "prez-smak", "chust", "wazel", "prez-damska", "lubryk"],
        "risk": {
            "none":{
                "n":0
            },
            "p_zwykla":{
                "n":0
            },
            "p_wzmacniana":{
                "n":0
            },
            "p_smakowa":{
                "n":0
            },
            "p_damska":{
                "n":0
            },
            "p_zwykla_lubrykant":{
                "n":0
            },
            "p_wzmacniana_lubrykant":{
                "n":0
            },
            "p_smakowa_lubrykant":{
                "n":0
            },
            "p_damska_lubrykant":{
                "n":0
            },
            "p_dowolna_wazelina":{
                "n":0
            },
            "lubrykant":{
                "n":0
            },
            "wazelina":{
                "n":0
            },
            "chusteczka":{
                "n":0
            },
            "dwie_gumki":{
                "n":0
            },
        }
    },
    "czynn-oral-bier": {
        "label": "Oralny pieszczony",
        "available": ["none", "prez-zwykla", "prez-wzmac", "prez-smak", "chust"],
        "risk": {
            "none":{
                "n":0
            },
            "p_zwykla":{
                "n":0
            },
            "p_wzmacniana":{
                "n":0
            },
            "p_smakowa":{
                "n":0
            },
            "chusteczka":{
                "n":0
            },
            "dwie_gumki":{
                "n":0
            },
        }
    },
    "czynn-oral-kobieta": {
        "label": "Oralny - pieszcząca kobietę",
        "available": ["none", "chust"],
        "risk": {
            "none":{
                "n":2
            },
            "chusteczka":{
                "n":0
            },
        }
    },
    "czynn-oral-mezczyzna": {
        "label": "Oralny - pieszcząca mężczyznę",
        "available": ["none", "prez-zwykla", "prez-wzmac", "prez-smak"],
        "risk": {
            "none":{
                "n":3
            },
            "p_zwykla":{
                "n":0
            },
            "p_wzmacniana":{
                "n":0
            },
            "p_smakowa":{
                "n":0
            },
            "dwie_gumki":{
                "n":0
            },
        }
    },
    "czynn-wagin-kobieta": {
        "label": "Waginalny kobieta",
        "available": ["none", "prez-zwykla", "prez-wzmac", "prez-smak", "wazel", "prez-damska", "lubryk"],
        "risk": {
            "none":{
                "n":4
            },
            "p_zwykla":{
                "n":0
            },
            "p_wzmacniana":{
                "n":0
            },
            "p_smakowa":{
                "n":3
            },
            "p_damska":{
                "n":0
            },
            "p_zwykla_lubrykant":{
                "n":0
            },
            "p_wzmacniana_lubrykant":{
                "n":0
            },
            "p_smakowa_lubrykant":{
                "n":2
            },
            "p_damska_lubrykant":{
                "n":0
            },
            "p_dowolna_wazelina":{
                "n":4
            },
            "lubrykant":{
                "n":4
            },
            "wazelina":{
                "n":4
            },
            "dwie_gumki":{
                "n":4
            },
        }
    },
    "czynn-wagin-mezczyzna": {
        "label": "Waginalny mężczyzna",
        "available": ["none", "prez-zwykla", "prez-wzmac", "prez-smak", "wazel", "prez-damska", "lubryk"],
        "risk": {
            "none":{
                "n":3
            },
            "p_zwykla":{
                "n":0
            },
            "p_wzmacniana":{
                "n":0
            },
            "p_smakowa":{
                "n":2
            },
            "p_damska":{
                "n":0
            },
            "p_zwykla_lubrykant":{
                "n":0
            },
            "p_wzmacniana_lubrykant":{
                "n":0
            },
            "p_smakowa_lubrykant":{
                "n":2
            },
            "p_damska_lubrykant":{
                "n":0
            },
            "p_dowolna_wazelina":{
                "n":3
            },
            "lubrykant":{
                "n":3
            },
            "wazelina":{
                "n":3
            },
            "dwie_gumki":{
                "n":3
            },
        }
    },
    "czynn-anal-czynn": {
        "label": "Analny czynny",
        "available": ["none", "prez-zwykla", "prez-wzmac", "prez-smak", "wazel", "prez-damska", "lubryk"],
        "risk": {
            "none":{
                "n":3
            },
            "p_zwykla":{
                "n":2
            },
            "p_wzmacniana":{
                "n":0
            },
            "p_smakowa":{
                "n":3
            },
            "p_damska":{
                "n":2
            },
            "p_zwykla_lubrykant":{
                "n":2
            },
            "p_wzmacniana_lubrykant":{
                "n":0
            },
            "p_smakowa_lubrykant":{
                "n":3
            },
            "p_damska_lubrykant":{
                "n":0
            },
            "p_dowolna_wazelina":{
                "n":3
            },
            "lubrykant":{
                "n":3
            },
            "wazelina":{
                "n":3
            },
            "dwie_gumki":{
                "n":3
            },
        }
    },
    "czynn-anal-bier": {
        "label": "Analny bierny",
        "available": ["none", "prez-zwykla", "prez-wzmac", "prez-smak", "wazel", "prez-damska", "lubryk"],
        "risk": {
            "none":{
                "n":4
            },
            "p_zwykla":{
                "n":2
            },
            "p_wzmacniana":{
                "n":0
            },
            "p_smakowa":{
                "n":3
            },
            "p_damska":{
                "n":2
            },
            "p_zwykla_lubrykant":{
                "n":2
            },
            "p_wzmacniana_lubrykant":{
                "n":0
            },
            "p_smakowa_lubrykant":{
                "n":3
            },
            "p_damska_lubrykant":{
                "n":0
            },
            "p_dowolna_wazelina":{
                "n":4
            },
            "lubrykant":{
                "n":4
            },
            "wazelina":{
                "n":4
            },
            "dwie_gumki":{
                "n":4
            },
        }
    },
};
