import * as React from 'react';
import Wrapper from '../../layout/Wrapper/Wrapper';
import SectionHeading from '../../presentational/SectionHeading';
import Text from '../../utility/Text/Text';

const styles = require('./Tile.module.scss');

interface Props {
    className?: string;
    number?: string;
    heading: string | JSX.Element;
    copy: string;
}

const Tile = ({ className, number, heading, copy }: Props) => (
    <div className={`${styles.tile} ${className || ''}`}>
        <Wrapper>
            <div className={styles.inner}>
                <span className={`${styles.number} u-font-italic`}>{number}</span>
                {typeof heading === 'string' ? (
                    <SectionHeading>{heading}</SectionHeading>
                ) : (
                    [heading]
                )}
                <Text center>{copy}</Text>
            </div>
        </Wrapper>
    </div>
);

export default Tile;
