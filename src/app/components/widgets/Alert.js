import { Alert } from 'react-bootstrap';
import React from 'react';

export const AlertBox = ({ children }) => {
    return (<Alert key="verification" variant={'primary'}>{children}</Alert>);
}