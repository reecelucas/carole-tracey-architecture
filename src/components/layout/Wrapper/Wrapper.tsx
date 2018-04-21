import * as React from 'react';

const styles = require('./Wrapper.module.scss');

interface Props {
    children: any;
    fullWidth?: boolean;
    textCenter?: boolean;
}

const Wrapper = ({ children, fullWidth, textCenter }: Props) => {
    const widthModifer = fullWidth ? `${styles.fullWidth}` : '';
    const alignmentModifier = textCenter ? `${styles.textCenter}` : '';

    return (
        <div className={`${styles.wrapper} ${widthModifer} ${alignmentModifier}`}>{children}</div>
    );
};

export default Wrapper;
