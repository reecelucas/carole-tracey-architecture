import * as React from 'react';

const styles = require('./ProfileImage.module.scss');

interface Props {
    children: React.ReactNode;
    wide?: boolean;
}

const ProfileImage = ({ children, wide }: any) => (
    <div className={`${styles.profile} ${wide ? styles.wide : ''}`}>{children}</div>
);

export default ProfileImage;
