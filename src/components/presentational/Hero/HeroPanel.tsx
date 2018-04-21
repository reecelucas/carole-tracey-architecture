import * as React from 'react';

const styles = require('./Hero.module.scss');

interface Props {
    children: any;
    className?: string;
    image?: boolean;
}

const HeroPanel = ({ children, className, image }: Props) => (
    <div className={`${styles.panel} ${className}`}>
        <div className={image ? styles.imageWrapper : styles.textWrapper}>{children}</div>
    </div>
);

export default HeroPanel;
