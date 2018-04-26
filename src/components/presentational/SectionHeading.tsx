import * as React from 'react';

interface Props {
    children: string;
}

const SectionHeading = ({ children }: Props) => (
    <h1 className="u-fs-beta u-fs-alpha@lrg">{children}</h1>
);

export default SectionHeading;
