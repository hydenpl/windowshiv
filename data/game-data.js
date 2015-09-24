$.ajaxSetup({cache: false}); //TODO do usunięcia

//tutaj byly globalsy dla gry

gd_my_val = 4;
gd_their_val = 3;

zabezpiecz_content = [
    {
        "key": "anal",
        "name": "STOSUNEK ANALNY",
        "desc": "penis-odbyt",
        "correct": {
            "answer":"Prezerwatywa wzmacniana (extra safe) i lubrykant (żel nawilżający) na bazie wody lub silikonu",
            "desc":"Do seksu analnego zaleca się stosowanie prezerwatyw wzmacnianych (extra safe) – są one grubsze, a tym samym bardziej wytrzymałe. <br>Podczas stosunku analnego warto zastosować dodatkowe nawilżenie w postaci lubrykantu (żeli nawilżających). <br>Zmniejszają one ryzyko podrażnienia, uszkodzenia błon śluzowych oraz pęknięcia prezerwatywy, a w rezultacie zmniejszają ryzyko zakażenia HIV."
        },
        "incorrect":[
            {
                "answer": "Prezerwatywa wzmacniana (extra safe) i wazelina",
                "desc": "Użycie prezerwatywy wzmacnianej (extra safe) podczas stosunku analnego jest jak najbardziej poprawne. Jeśli jednak użyjesz jej z wazeliną (tłuszczem), to cały Twój wysiłek pójdzie na marne. Wazelina doprowadzi do uszkodzenia lateksu i prezerwatywa pęknie."
            },
            {
                "answer": "Lubrykant (żel nawilżający) na bazie silikonu",
                "desc": "To nie wystarczy. Sam lubrykant, wszystko jedno jaki będzie, nie zabezpiecza przed zakażeniem HIV. Lubrykant posiada właściwości nawilżające, nie stanowi bariery przed HIV. "
            },
            {
                "answer": "Prezerwatywa o smaku banana",
                "desc": "Prezerwatywy smakowe są cieńsze, więc istnieje większe prawdopodobieństwo, że taka prezerwatywa pęknie. Dodatkowo ich smak czy zapach to chemia, która może uczulać i podrażniać błony śluzowe odbytu."
            },
            {
                "answer": "Prezerwatywa prążkowana i z wypustkami",
                "desc": "Prezerwatywy prążkowane i z wypustkami mogą powodować podrażnienia i uszkodzenia błon śluzowych odbytu. Takie prezerwatywy nie są dedykowane do seksu analnego, istnieje większe prawdopodobieństwo, że taka prezerwatywa pęknie  podczas stosunku, co większa ryzyko zakażenia HIV."
            },
            {
                "answer": "Prezerwatywa wzmacniana",
                "desc": "To nie wystarczy. Użycie prezerwatywy wzmacnianej (extra safe) podczas stosunku analnego jest jak najbardziej poprawne. Ale bez odpowiedniego nawilżenia (lubrykantu) istnieje większe prawdopodobieństwo, że prezerwatywa pęknie. "
            },
            {
                "answer": "Gorąca kąpiel po stosunku",
                "desc": "Gorąca kąpiel po stosunku analnym (ale także waginalnym) zwiększa ryzyko zakażenia HIV. Rozszerzają się wtedy naczynia krwionośne, co ułatwia wniknięcie wirusa HIV. "
            }
        ]
    },
    {
        "key": "wagin",
        "name": "STOSUNEK WAGINALNY",
        "desc": "penis-pochwa",
        "correct": {
            "answer":"Prezerwatywa męska lub damska (Femidom)",
            "desc":"Prawidłowo stosowana, nieprzeterminowana i dobrze przechowywana prezerwatywa w skuteczny sposób chroni przed zakażeniem HIV. Przed zakażeniem HIV chronią także prezerwatywy damskie (Femidom). Zarówno prezerwatywa męska, jak i damska stanowi barierę miedzy preejakulatem i spermą a błoną "
        },
        "incorrect":[
            {
                "answer": "Prezerwatywa o smaku truskawki",
                "desc": "Prezerwatywy smakowe są cieńsze, więc istnieje większe prawdopodobieństwo, że taka prezerwatywa pęknie. Dodatkowo ich smak czy zapach to chemia, która może uczulać i podrażniać błony śluzowe pochwy."
            },
            {
                "answer": "Stosunek przerywany (bez wytrysku)",
                "desc": "Podczas stosunku przerywanego dochodzi do kontaktu błony śluzowej pochwy z preejakulatem i błony śluzowej na penisie z wydzieliną z pochwy, przez co podczas takich stosunków może dojść do zakażenia HIV. "
            },
            {
                "answer": "Tabletki antykoncepcyjne",
                "desc": "Inne metody antykoncepcyjne niż prezerwatywa damska lub męska (np. tabletki, plastry) nie chronią przed zakażeniem HIV."
            },
            {
                "answer": "Prezerwatywa przechowywana w portfelu",
                "desc": "Taka prezerwatywa nie bardzo nadaje się do użycia. Przechowując ją w portfelu narażamy ją na zgniecenia i uszkodzenia. A uszkodzona prezerwatywa nie będzie skutecznie chronić przed zakażeniem HIV. "
            },
            {
                "answer": "Gorąca kąpiel po stosunku ",
                "desc": "Gorąca kąpiel po stosunku waginalnym (ale także analnym) zwiększa ryzyko zakażenia HIV. Rozszerzają się wtedy naczynia krwionośne, co ułatwia wniknięcie wirusa HIV. "
            },
            {
                "answer": "Dwie prezerwatywy użyte jednocześnie",
                "desc": "Używając dwóch prezerwatyw jednocześnie nie zwiększamy swojego bezpieczeństwa, wręcz przeciwnie! Może to spowodować ich uszkodzenie lub zsunięcie się obydwu. "
            },
        ]
    },
    {
        "key": "oral",
        "name": "STOSUNEK ORALNY",
        "desc": "usta-penis",
        "correct": {
            "answer":"Prezerwatywa – smakowa, klasyczna lub wzmacniania ",
            "desc":"W kontaktach oralnych błona śluzowa jamy ustnej wrażliwa jest na zakażenie HIV, należy więc unikać jej kontaktu z nasieniem i preejakulatem. Najlepszą metodą zabezpieczenia się przez zakażeniem HIV w kontaktach oralnych jest używanie prezerwatywy. Prawidłowo stosowana, nieprzeterminowana i dobrze przechowywana prezerwatywa w skuteczny sposób chroni przed zakażeniem HIV. Do stosunku oralnego dedykowane są prezerwatywy smakowe i zapachowe, ale można do niego używać także klasycznych lub wzmacnianych prezerwatyw. "
        },
        "incorrect":[
            {
                "answer": "Płyn do płukania ust z alkoholem",
                "desc": "W kontaktach oralnych błona śluzowa jamy ustnej wrażliwa jest na zakażenie HIV, należy więc unikać jej kontaktu z nasieniem i preejakulatem. Jeśli do tego dojdzie, powinno się wypłukać jamę ustną wodą. Nie należy płukać ust płynem do płukania zawierającym alkohol! Pod wpływem alkoholu w jamie ustnej tworzą się mikrouszkodzenia, przez które wirus jeszcze łatwiej się wchłania. "
            },
            {
                "answer": "Szczoteczka i pasta do zębów",
                "desc": "W kontaktach oralnych błona śluzowa jamy ustnej wrażliwa jest na zakażenie HIV, należy więc unikać jej kontaktu z nasieniem i preejakulatem. Jeśli do tego dojdzie, powinno się wypłukać jamę ustną wodą. Zaleca się, aby nie myć zębów min. 30 min przed i po stosunku oralnym, ponieważ podczas tej czynności uszkadzamy sobie dziąsła i tworzymy mikrouszkodzenia w jamie ustnej, przez które wirus jeszcze łatwiej się wchłania.  "
            },
            {
                "answer": "Stosunek przerywany (bez wytrysku)",
                "desc": "Podczas stosunku przerywanego dochodzi do kontaktu błony śluzowej jamy ustnej z preejakulatem, który także jest płynem zakaźnym."
            },
            {
                "answer": "Prezerwatywa przechowywana w portfelu",
                "desc": "Taka prezerwatywa nie bardzo nadaje się do użycia. Przechowując ją w portfelu narażamy ją na zgniecenia i uszkodzenia. A uszkodzona prezerwatywa nie będzie skutecznie chronić przed zakażeniem HIV. "
            },
            {
                "answer": "Przepłukanie ust alkoholem",
                "desc": "W kontaktach oralnych błona śluzowa jamy ustnej wrażliwa jest na zakażenie HIV, należy więc unikać jej kontaktu z nasieniem i preejakulatem. Jeśli do tego dojdzie, powinno się wypłukać jamę ustną wodą. Nie należy płukać ust alkoholem! Pod wpływem alkoholu w jamie ustnej tworzą się mikrouszkodzenia, przez które wirus jeszcze łatwiej się wchłania. "
            },
            {
                "answer": "Nic nie jest potrzebne – stosunek oralny jest bezpieczny",
                "desc": "Podczas stosunku oralnego (usta- penis) narażona na zakażenie HIV jest strona czynna (pieszcząca), ponieważ dochodzi do kontaktu płynu zakaźnego (spermy, preejakulatu) z błoną śluzową jamy ustnej. Bez względu na to, czy połknie się spermę, czy nie – ryzyko się nie zmienia, ponieważ do zakażenia dochodzi w obrębie jamy ustnej. Ryzyko zakażenia dla strony biernej (pieszczonej) istnieje przy uszkodzeniach i krwawieniach w obrębie jamy ustnej u strony czynnej "
            },
        ]
    },
    {
        "key": "oralf",
        "name": "STOSUNEK ORALNY",
        "desc": "usta-pochwa",
        "correct": {
            "answer": "Chusteczka lateksowa (Koferdam) lub osłonka z prezerwatywy",
            "desc": "Podczas pieszczenia oralnego kobiety można zastosować chusteczkę lateksową, która zabezpiecza przed dostaniem się wydzieliny z pochwy do błony śluzowej jamy ustnej czy nosa. Taką osłonkę można też wykonać z prezerwatywy, ostrożnie odcinając jej czubek, następnie przecinając ją wzdłuż. "
        },
        "incorrect":[
            {
                "answer": "Płyn do płukania ust z alkoholem",
                "desc": "W kontaktach oralnych błona śluzowa jamy ustnej wrażliwa jest na zakażenie HIV, należy więc unikać jej kontaktu z wydzieliną z pochwy . Jeśli dojdzie do kontaktu płynu zakaźnego z jamą ustną , powinno się ją wypłukać wodą. Nie należy płukać ust płynem do płukania zawierającym alkohol! Pod wpływem alkoholu w jamie ustnej tworzą się mikrouszkodzenia, przez które wirus jeszcze łatwiej się wchłania. "
            },
            {
                "answer": "Szczoteczka i pasta do zębów",
                "desc": "W kontaktach oralnych błona śluzowa jamy ustnej wrażliwa jest na zakażenie HIV, należy więc unikać jej kontaktu z wydzieliną z pochwy . Jeśli dojdzie do kontaktu płynu zakaźnego z jamą ustną , powinno się ją wypłukać wodą. Zaleca się, aby nie myć zębów min. 30 min przed i po stosunku oralnym, ponieważ podczas tej czynności uszkadzamy sobie dziąsła i tworzymy mikrouszkodzenia w jamie ustnej, przez które wirus jeszcze łatwiej się wchłania.  "
            },
            {
                "answer": "Przepłukanie ust alkoholem",
                "desc": "W kontaktach oralnych błona śluzowa jamy ustnej wrażliwa jest na zakażenie HIV, należy więc unikać jej kontaktu z wydzieliną z pochwy.  Jeśli dojdzie do kontaktu płynu zakaźnego z jamą ustną , powinno się ją wypłukać wodą. Nie powinno się płukać ust alkoholem! Pod wpływem alkoholu w jamie ustnej tworzą się mikrouszkodzenia, przez które wirus jeszcze łatwiej się wchłania. "
            },
            {
                "answer": "Nic nie jest potrzebne – stosunek oralny jest bezpieczny",
                "desc": "Podczas stosunku oralnego (usta- pochwa) narażona na zakażenie HIV jest strona czynna (pieszcząca), ponieważ dochodzi do kontaktu płynu zakaźnego (wydzieliny z pochwy) z błoną śluzową jamy ustnej. Stosunek oralny może być jeszcze bardziej ryzykowny podczas miesiączki, ponieważ krew jest najbardziej zakaźnym płynem.   Ryzyko zakażenia dla strony biernej (pieszczonej) istnieje przy uszkodzeniach i krwawieniach w obrębie jamy ustnej u strony czynnej (pieszczącej)."
            },
            {
                "answer": "Brak ran i podrażnień na pochwie",
                "desc": "Do zakażenia HIV podczas stosunku oralnego dochodzi poprzez kontakt płynu zakaźnego (wydzieliny z pochwy) z błoną śluzową jamy ustnej. Podrażnienia  i rany na pochwie zwiększają ryzyko zakażenia HIV dla strony biernej (pieszczącej), ale ich brak nie sprawi, że taki stosunek będzie bezpieczny. "
            },
            {
                "answer": "Przepłukanie ust wodą po stosunku oralnym",
                "desc": "To nie wystarczy. Do zakażenia HIV podczas stosunku oralnego dochodzi poprzez kontakt płynu zakaźnego (wydzieliny z pochwy) z błoną śluzową jamy ustnej. Do zakażenia HIV dochodzi w obrębie jamy ustnej, dlatego przepłukanie ust wodą po stosunku nie zabezpieczy nas przed zakażeniem. Może to zmniejszyć ryzyko – wskazane jest, aby jeśli dojdzie do kontaktu płynu zakaźnego z jamą ustną, przepłukać ją wodą. Nie wykluczy to jednak prawdopodobieństwa zakażenia. "
            },
        ]
    },
    {
        "key": "manual",
        "name": "KONTAKTY MANUALNO-GENITALNE",
        "desc": "dłonie-penis, dłonie-odbyt, dłonie-pochwa",
        "correct": {
            "answer":"Rękawiczki lateksowe",
            "desc":"Stanowią one ochronę podczas kontaktów manualno-genitalnych, w czasie których narażone na zakażenie mogą być uszkodzone dłonie, które mają kontakt z płynem zakaźnym (np. wydzieliną z pochwy, wydzieliną z odbytu, spermą, preejakulatem). "
        },
        "incorrect":[
            {
                "answer": "Wyszorowanie szczoteczką rąk po stosunku manualno-genitalnym",
                "desc": "Podczas kontaktów manualno-genitalnych narażone na zakażenie mogą być uszkodzone dłonie, które mają kontakt z płynem zakaźnym (np. wydzieliną z pochwy, wydzieliną z odbytu, spermą, preejakulatem).  Szorowanie rąk może doprowadzić do powstania dodatkowych uszkodzeń na dłoniach, co może zwiększyć ryzyko zakażenia. "
            },
            {
                "answer": "Nic nie jest potrzebne – kontakty manualno-genitalne są bezpieczne",
                "desc": "Nie zawsze. Ryzyko zakażenia istnieje wtedy, gdy partner pieszczący ma uszkodzoną skórę dłoni. Należy również uważać na to, aby nie przenosić płynów zakaźnych na błony śluzowe (np. w sytuacji zatarcia oka, masturbacji)."
            },
            {
                "answer": "Woda i mydło, czyli kąpiel przed kontaktami manualno-genitalnymi",
                "desc": "Ryzyko zakażenia istnieje wtedy, gdy partner pieszczący ma uszkodzoną skórę dłoni. Należy również uważać na to, aby nie przenosić płynów zakaźnych na błony śluzowe (np. w sytuacji zatarcia oka, masturbacji). Kąpiel przed stosunkiem w żaden sposób nie zmniejsza ryzyka zakażenia. "
            },
            {
                "answer": "Olejek erotyczny do masażu",
                "desc": "Ryzyko zakażenia istnieje wtedy, gdy partner pieszczący ma uszkodzoną skórę dłoni. Należy również uważać na to, aby nie przenosić płynów zakaźnych na błony śluzowe (np. w sytuacji zatarcia oka, masturbacji). Użycie olejku erotycznego do masażu w żaden sposób nie zmniejsza ryzyka zakażenia."
            },
            {
                "answer": "Brak ran i podrażnień na narządach płciowych",
                "desc": "Do zakażenia HIV podczas kontaktów manualno-genitalnych może dojść, jeśli  dojdzie do kontaktu płynu zakaźnego (wydzieliny z pochwy, spermy, preejakulatu, wydzieliny z odbytu) z uszkodzoną skóra na dłoniach. Ryzyko istnieje także, jeśli płyn zakaźny zostanie przeniesiony na dłoniach do błon śluzowych (pochwy, penisa, odbytu, jamy ustnej, oka, nosa). Podrażnienia  i rany na pochwie zwiększają ryzyko zakażenia HIV dla strony biernej (pieszczącej), ale ich brak nie sprawi, że taki stosunek będzie bezpieczny."
            },
            {
                "answer": "Umycie rąk po stosunku manualno-genitalnym",
                "desc": "To nie wystarczy. Podczas kontaktów manualno-genitalnych narażone na zakażenie mogą być uszkodzone dłonie, które mają kontakt z płynem zakaźnym (np. wydzieliną z pochwy, wydzieliną z odbytu, spermą, preejakulatem). Umycie rąk wodą z mydłem (najlepiej nieperfumowanym) jest zalecane i może wpłynąć na zmniejszenie ryzyka zakażenia,  ale go nie wykluczy. "
            },
        ]
    }
]

zabezpiecz_key = zabezpiecz_content[Math.floor(Math.random() * zabezpiecz_content.length)].key;

ansArr = undefined;