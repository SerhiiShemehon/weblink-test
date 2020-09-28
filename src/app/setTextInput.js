import {valueService} from '../service/valueService';
import {checkEmptyInput} from '../service/validInput';

const setTextInput = (input, label, data) => {
    if (data[label] === "undefined" || !data[label] || !checkEmptyInput(input)) {
        return false;
    }

    const currentValue = valueService(label, data);

    const valueSetter = Object.getOwnPropertyDescriptor(input, 'value').set;
    const prototype = Object.getPrototypeOf(input);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

    input.focus();
    if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(input, currentValue);
    } else {
        valueSetter.call(input, currentValue);
    }
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.blur();

    return true;
}

export {
    setTextInput
}