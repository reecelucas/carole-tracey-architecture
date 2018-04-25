import * as React from 'react';
import Wrapper from '../../layout/Wrapper/Wrapper';
import Text from '../../utility/Text/Text';

const styles = require('./ProjectCard.module.scss');

interface Props {
    flipped?: boolean;
    heading: string | JSX.Element;
    text: string;
    image: React.ReactNode;
}

const ProjectCard = ({ flipped, heading, text, image }: Props) => (
    <div className={`${styles.container} ${flipped ? styles.flipped : ''}`}>
        <div className={styles.textContainer}>
            <Wrapper>
                {typeof heading === 'string' ? <h3>{heading}</h3> : [heading]}
                <Text>{text}</Text>
            </Wrapper>
        </div>
        <div className={styles.imageContainer}>{image}</div>
    </div>
);

export default ProjectCard;