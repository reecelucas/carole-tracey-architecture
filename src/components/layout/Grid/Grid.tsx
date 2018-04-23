import * as React from 'react';
import { ClassMap } from '../../../types';

const styles = require('./Grid.module.scss');

interface Props {
    children: any;
    columnCount?: number;
    breakpoint?: 'medium' | 'large';
}

const classMap: ClassMap = {
    medium: styles['grid--@md'],
    large: styles['grid--@lrg']
};

const GridItem = ({ children }: any) => <div className={styles.gridItem}>{children}</div>;

const Grid = ({ children, columnCount, breakpoint }: Props) => {
    const columnModifier = columnCount > 1 ? styles[`grid--${columnCount}`] : '';
    const breakpointModifier = classMap[breakpoint] || '';
    const className = `${styles.grid} ${columnModifier} ${breakpointModifier}`;

    return (
        <div className={className}>
            {children.map((child: any, i: number) => <GridItem key={i}>{child}</GridItem>)}
        </div>
    );
};

export default Grid;