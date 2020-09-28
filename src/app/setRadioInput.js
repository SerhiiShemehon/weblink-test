const setRadioInput = (container, label, data) => {
    if (data[label] === "undefined" || !data[label]) {
        return false;
    }

    const labels = container.querySelectorAll('label');
    labels.forEach((elem) => {
        const labelText = elem.innerText.toLowerCase();
        const labelInput = elem.querySelector('input');
        if( labelText === data[label] ){
            labelInput.click();
        }
    })

    return true;
}

export {
    setRadioInput
}