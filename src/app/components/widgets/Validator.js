import React from 'react';

export const Validator = ({ validation, children }) => {
    const childrens = React.Children.map(children, child => {
        if (!child) return;
        if (child.type && child.type.name === 'ValidatorText') return React.cloneElement(child, { validation });
        return child;
    });
    return <div className={validation.isInvalid ? 'has-error' : ''}>{childrens}</div>
}

export const ValidatorMand = () => <small className="error-mand">*</small>;

export const ValidatorText = ({ validation, children }) =>
    <small className="form-text text-error">{children ? children : (validation ? validation.message : "")}</small>;

Validator.Mand = ValidatorMand;
Validator.Text = ValidatorText;

export default Validator;