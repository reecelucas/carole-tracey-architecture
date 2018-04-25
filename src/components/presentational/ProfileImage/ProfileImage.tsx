import * as React from 'react';

const styles = require('./ProfileImage.module.scss');

interface Props {
    children: JSX.Element;
    wide?: boolean;
}

const ProfileImage = ({ children, wide }: Props) => (
    <div className={`${styles.profile} ${wide ? styles.wide : ''}`}>{children}</div>
);

export default ProfileImage;
