// checking a field for text
const checkEmptyInput = (input) => {
    const regEmpty = /^\s+|\s+$/g;

    if ( input.value.replace(regEmpty, '') ) {
        return false;
    }

    return true;
}

// converting date to another format
const formatDate = (value) => {
    if (!value) {
        return null;
    }

    const birthday = new Date(value);
    const day = birthday.getDate() < 10 ? `0${birthday.getDate()}` : birthday.getDate();
    const month = (birthday.getMonth() + 1) < 10 ? `0${birthday.getMonth() + 1}` : birthday.getMonth() + 1;

    return `${month}/${day}/${1900 + birthday.getYear()}`;
}

// data validation number
const isNumber = (value) => {
    if (!value) {
        return null;
    }

    const newValue = value.split(' ').join('');
    if ( !isNaN(newValue) ) {
        return newValue;
    }

    return null;
}

// data validation email
const isEmail = (value) => {
    if (!value) {
        return null;
    }

    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(regEmail.test(value) !== false) {
        return value;
    }

    return null;
}


export {
    checkEmptyInput,
    formatDate,
    isNumber,
    isEmail
};