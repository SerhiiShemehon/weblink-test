const setSelectInput = (container, label, data) => {
    if (data[label] === "undefined" || !data[label]) {
        return false;
    }

    // Say the truth, here should be function of Select field filling,
    // but it's a real magic.
    // So, please put info manually.


    return true;
}

export {
    setSelectInput
}