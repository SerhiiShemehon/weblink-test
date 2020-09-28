import {labelService} from './labelService';

// get containers with fields
const getContainers = (selector) => {
    return selector.querySelectorAll('.MuiFormControl-root');
}

// get label inside container
const getCurrentLabel = (container) => {
    const newLabel = container.querySelector('.MuiFormLabel-root').innerText.toLowerCase();
    if (!newLabel) {
        return false;
    }

    return labelService(newLabel);
}

// get input inside container
const getCurrentInput = (container) => {
    const newInputs = container.querySelectorAll('input');

    if (!newInputs) {
        return false;
    }

    return newInputs;
}

// get select inside container
const getCurrentSelect = (container) => {
    const newSelect = container.querySelector('.MuiSelect-select');

    if (!newSelect) {
        return false;
    }

    return newSelect;
}

// get button with text add
const getBtnAdd = (selector) => {
    const btnArray = selector.querySelectorAll('button.MuiButton-root');
    let currentBtn = null;
    btnArray.forEach((btn) => {
        if(btn.innerText.toLowerCase() === 'add'){
            currentBtn = btn;
        }
    });
    return currentBtn;
}

// get button with text cancel
const getBtnCancel = (selector) => {
    const btnArray = selector.querySelectorAll('button.MuiButton-root');
    let currentBtn = null;
    btnArray.forEach((btn) => {
        if(btn.innerText.toLowerCase() === 'cancel'){
            currentBtn = btn;
        }
    });
    return currentBtn;
}

// check open modal
const containerModal = () => {
    return document.querySelector('.MuiDialog-root');
}

// get work field
const getWorkField = (selector) => {
    const containers = getContainers(selector);
    let currentContainer = null;
    containers.forEach((container) => {
        const label = getCurrentLabel(container);
        if(label === 'experience'){
            currentContainer = container;
        }
    });
    return currentContainer;
}

export {
    getContainers,
    getCurrentLabel,
    getCurrentInput,
    getCurrentSelect,
    getBtnAdd,
    getBtnCancel,
    containerModal,
    getWorkField
};