import {setTextInput} from './setTextInput';
import {setRadioInput} from './setRadioInput';
import {setSelectInput} from './setSelectInput';
import {
    getCurrentInput,
    getCurrentLabel,
    getCurrentSelect,
    getWorkField
} from '../service/contentService';


const dataInput = (container, data, selector) => {
    const inputs = getCurrentInput(container);
    const label = getCurrentLabel(container);
    const select = getCurrentSelect(container);

    if (!inputs || !label) {
        return false;
    }

    const checkWorkField = () => {
        setTimeout(()=>{
            const currentContainer = getWorkField(selector);
            if (currentContainer){
                dataInput(currentContainer, data);
            }
        },40);
    }

    if (label === 'dob') {
        inputs[0].addEventListener('blur', checkWorkField);
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