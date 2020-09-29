import {
    formatDate,
    isNumber,
    isEmail,
    sliceValue
} from './validInput'

// data validation
const valueService = (key, object, max) => {
    if (object[key] === undefined && !object[key]) {
        return false;
    }

    switch (key) {
        case "dob":
            return formatDate(object[key]);
        case "desc":
            return sliceValue(object[key], max);
        case 'firstPhone':
        case 'secondaryPhone':
        case 'experience':
            return isNumber(object[key]);
        case 'email':
            return isEmail(object[key]);
        default:
            return object[key];
    }
}

export {
    valueService
};