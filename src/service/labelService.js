class LabelService {
    constructor(str) {
        this.str = str;
    }

    // change the label for convenience
    changeLabel() {
        const labelArray = this.str.split(' ');
        const newLabelArray = labelArray.map((item, index) => {
            if ( index === 0 ) {
                return item.charAt(0).toLowerCase() + item.slice(1);
            }
            return item.charAt(0).toUpperCase() + item.slice(1);
        });
        this.str = newLabelArray.join('');

        return this;
    }

    // check the label for compliance
    checkLabel() {
        switch (this.str) {
            case "primaryPhone":
                this.str =  'firstPhone';
                break;
            case "businessDescription":
                this.str =  'desc';
                break;
            case "jobPosition":
                this.str =  'job';
                break;
            case "birthday":
                this.str =  'dob';
                break;
            case "workExperience(years)":
                this.str =  'experience';
                break;
        }

        return this;
    }

    // return string
    stringLabel() {
        return this.str;
    }
}

const labelService = (str) => {
    const newLabel = new LabelService(str);
    return  newLabel.changeLabel().checkLabel().stringLabel();
}

export {
    labelService
};