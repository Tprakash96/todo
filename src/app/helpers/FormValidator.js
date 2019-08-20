import Validator from 'validator';

export class FormValidator {
    constructor(values) {
        this.validations = values;
    }

    validate(values) {
        const validation = this.valid();
        let isValid = true;
        this.validations.forEach(rule => {
            if (rule.hasOwnProperty('field')) {
                if (!this.isValidField(values[rule.field], rule)) {
                    validation[rule.field] = { isInvalid: true, message: rule.message };
                    isValid = (false && isValid);
                }
            }
        })
        validation.isValid = isValid;
        return validation;
    }

    isValidField(value, rule) {
        if (rule.type === 'email') return (!this.isValidEmail(value)) ? false : true;

        else if (rule.type === 'password') {
            const minLength = rule.hasOwnProperty('minLength') ? rule.minLength : 6;
            const maxLength = rule.hasOwnProperty('maxLength') ? rule.maxLength : 16;
            return (!this.isValidPassword(value, minLength, maxLength)) ? false : true;
        }
        else if (rule.type === 'text') return (Validator.isEmpty(value)) ? false : true;

        else if (rule.type === 'phone') return (this.isMobilePhone(value)) ? true : false;
    }

    isValidEmail(email) { return Validator.isEmail(email); }

    isValidPassword(password, min, max) {
        return ((password.length >= min) && (password.length <= max)) ? true : false;
    }

    isMobilePhone(value) {
        var phoneno = /^\d{10}$/;
        return (value.match(phoneno)) ? true : false;
    }

    isPasswordsAreMatched(values) {
        return (values.password === values.confirmPassword) ? true : false;
    }

    valid() {
        const validation = {}
        this.validations.map(rule => (validation[rule.field] = { isInvalid: false, message: '' }));
        return { isValid: true, ...validation };
    }
}