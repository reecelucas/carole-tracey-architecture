import * as React from 'react';

const styles = require('./Wrapper.module.scss');

interface Props {
    children: any;
    wide?: boolean;
    fullWidth?: boolean;
    textCenter?: boolean;
}

const Wrapper = ({ children, wide, fullWidth, textCenter }: Props) => {
    const widthModifer = wide ? `${styles.wide}` : '';
    const widthModiferFull = fullWidth ? `${styles.fullWidth}` : '';
    const alignmentModifier = textCenter ? `${styles.textCenter}` : '';
    const classList = `${styles.wrapper} ${widthModifer} ${widthModiferFull} ${alignmentModifier}`;

    return <div className={`${classList}`}>{children}</div>;
};

export default Wrapper;
