import * as React from 'react';

const styles = require('./Text.module.scss');

interface Props {
    children: string;
    center?: boolean;
}

const Text = ({ children, center }: Props) => (
    <p className={`${styles.text} ${center ? styles.center : ''}`}>{children}</p>
);

export default Text;
