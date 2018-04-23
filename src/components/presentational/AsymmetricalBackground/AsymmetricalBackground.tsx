import * as React from 'react';

const styles = require('./AsymmetricalBackground.module.scss');

interface Props {
    children: any;
    className?: string;
}

const AsymmetricalBackground = ({ children, className }: Props) => (
    <div className={`${styles.asym} ${className || ''}`}>{children}</div>
);

export default AsymmetricalBackground;
