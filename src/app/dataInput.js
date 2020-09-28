import {setTextInput} from './setTextInput';
import {setRadioInput} from './setRadioInput';
import {setSelectInput} from './setSelectInput';
import {
    getCurrentInput,
    getCurrentLabel,
    getCurrentSelect
} from '../service/contentService';


const dataInput = (container, data) => {
    const inputs = getCurrentInput(container);
    const label = getCurrentLabel(container);
    const select = getCurrentSelect(container);

    if (!inputs || !label) {
        return false;
    }

    if (inputs.length > 1) {
        return setRadioInput(container, label, data);
    } else if (inputs.length === 1 && !!select) {
        return setSelectInput(container, label, data);
    } else if (inputs.length === 1) {
        return setTextInput(inputs[0], label, data);
    }
}

export {
    dataInput
};