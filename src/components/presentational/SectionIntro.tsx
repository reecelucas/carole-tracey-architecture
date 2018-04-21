import * as React from 'react';

interface Props {
    children: string;
}

const SectionIntro = ({ children }: Props) => (
    <span className="u-font-italic [ u-fs-delta u-fs-gamma@lrg ]">{children}</span>
);

export default SectionIntro;
