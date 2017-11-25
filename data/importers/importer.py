import csv
import json


def parse_cell(cell_value: str):
    if cell_value.startswith('x') or cell_value == '':
        return None
    elif cell_value.startswith('Ten kontakt jest bezpieczny.') or cell_value.startswith('Ten kontakt jest bezpieczny –'):
        return 0
    elif cell_value.startswith('Ten kontakt jest bezpieczny,') or cell_value.startswith('Użycie prezerwatywy wzmacnianej (extra safe) podczas stosunku analnego'):
        return 1
    elif cell_value.startswith('Technika ta wiąże się z ryzykiem zakażenia.'):
        return 2
    elif cell_value.startswith('Jest to technika o wysokim ryzyku zakażenia.'):
        return 3
    elif cell_value.startswith('Taki rodzaj stosunku jest bardzo ryzykowny pod kątem zakażenia') or cell_value.startswith('Jest to technika o wysokim ryzyku zakażenia, szczególnie dla kobiety.'):
        return 4
    else:
        print(cell_value)
        raise ValueError

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
}


def get_available(key):
    ret = []
    if key == 'none':
        ret.append('none')
    if 'p_zwykla' in key:
        ret.append('prez-zwykla')
    if 'p_wzmacniana' in key:
        ret.append('prez-wzmac')
    if 'p_smakowa' in key:
        ret.append('prez-smak')
    if 'p_damska' in key:
        ret.append('prez-damska')
    if 'chusteczka' in key:
        ret.append('chust')
    if 'wazelina' in key:
        ret.append('wazel')
    if 'lubrykant' in key:
        ret.append('lubryk')

    return ret

with open('polaczenia_datasource.csv', encoding='utf-8') as csvfile:
    csvreader = csv.DictReader(csvfile)
    ret = {}
    for row in csvreader:
        d = dict(label=row.pop('label'))
        key = row.pop('key')
        activity_list = []
        risk_dict = {}
        for activity, cell_value in row.items():
            cell_value = cell_value.strip()
            score = parse_cell(cell_value)
            if score is not None:
                activity_list.extend(get_available(activity))
                risk_dict[activity] = {
                    'n': score,
                    'info': cell_value,
                }
        d['available'] = list(set(activity_list))
        d['risk'] = risk_dict

        ret[key] = d


with open('output.json', 'w', encoding='utf-8') as output_file:
    dumped = json.dumps(ret, indent=2, ensure_ascii=False)
    output_file.write(dumped)
    # json.dump(ret, output_file, indent=2, ensure_ascii=False)


