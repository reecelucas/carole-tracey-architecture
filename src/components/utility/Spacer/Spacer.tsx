import * as React from 'react';
import { ClassMap } from '../../../types';

const styles = require('./Spacer.module.scss');

type SizeValue = 'default' | 'none' | 'tiny' | 'small' | 'large' | 'huge';
type sizeObject = {
    default?: SizeValue;
    medium?: SizeValue;
    large?: SizeValue;
    [key: string]: SizeValue;
};

interface Props {
    children: any;
    className?: string;
    size?: SizeValue | sizeObject;
}

const classMap: ClassMap = {
    default: 'spacer',
    none: 'spacerNone',
    tiny: 'spacerTiny',
    small: 'spacerSmall',
    large: 'spacerLarge',
    huge: 'spacerHuge'
};

const breakpointMap: { [key: string]: string } = {
    medium: '@md',
    large: '@lrg'
};

const constructClassList = (size: Props['size']): string => {
    if (!size) return styles[classMap.default];

    if (typeof size === 'string') {
        return styles[classMap[size]] || classMap.default;
    }

    return Object.keys(size)
        .map((key: string) => {
            const sizeValue = classMap[size[key]] || classMap.default;
            const bp = breakpointMap[key] || '';
            return styles[`${sizeValue}${bp}`];
        })
        .join(' ');
};

const Spacer = ({ children, className, size }: Props) => (
    <div className={`${constructClassList(size)} ${className}`}>{children}</div>
);

export default Spacer;
