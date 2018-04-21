import * as React from 'react';

const styles = require('./Form.module.scss');

const FormErrorMessage = ({ message }: { message?: string }) => (
    <p className={styles.errorMessage} role="alert" aria-live="assertive">
        {message || 'Please fill in this field.'}
    </p>
);

export default FormErrorMessage;
