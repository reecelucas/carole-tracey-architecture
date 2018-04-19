import * as React from 'react';

const styles = require('./Wrapper.module.scss');

interface Props {
    children: any;
    fullWidth?: boolean
}

const Wrapper = ({ children, fullWidth }: Props) => (
    <div className={`${styles.wrapper} ${fullWidth ? `${styles.wrapperFw}` : ''}`}>
        {children}
    </div>
);

export default Wrapper;
