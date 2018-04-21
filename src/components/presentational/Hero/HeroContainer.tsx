import * as React from 'react';

const styles = require('./Hero.module.scss');

interface Props {
    children: any;
    className?: string;
}

const HeroContainer = ({ children, className }: Props) => (
    <div className={`${styles.hero} ${className}`}>{children}</div>
);

export default HeroContainer;
