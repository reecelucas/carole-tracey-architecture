import * as React from 'react';

const styles = require('./Form.module.scss');

const FormLoader = () => (
    <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
    </div>
);

export default FormLoader;
