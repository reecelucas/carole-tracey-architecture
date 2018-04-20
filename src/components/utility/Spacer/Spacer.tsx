import * as React from 'react';
import { ClassMap } from '../../../types';

const styles = require('./Spacer.module.scss');

type Size = 'tiny' | 'small' | 'large' | 'huge';
type SizeObject = {
    value?: Size;
    breakpoint: 'medium' | 'large';
};

interface Props {
    children?: any;
    size?: Size | SizeObject[];
}

const classMap: ClassMap = {
    base: 'spacer',
    tiny: 'spacerTiny',
    small: 'spacerSmall',
    large: 'spacerLarge',
    huge: 'spacerHuge'
};

const breakpointMap = {
    medium: '@md',
    large: '@lrg'
};

const constructClassList = (size: Props['size']): string => {
    if (!size) return styles.spacer;

    if (typeof size === 'string') {
        return styles[classMap[size] || classMap.base];
    }

    return size
        .map(
            ({ value, breakpoint }) =>
                styles[`${classMap[value] || classMap.base}${breakpointMap[breakpoint]}`]
        )
        .join(' ');
};

const Spacer = ({ children, size }: Props) => (
    <div className={constructClassList(size)}>{children}</div>
);

export default Spacer;
