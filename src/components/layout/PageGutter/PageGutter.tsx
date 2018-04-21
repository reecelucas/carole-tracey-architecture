import * as React from 'react';

const styles = require('./PageGutter.module.scss');

const PageGutter = ({ children }: any) => <div className={styles.gutter}>{children}</div>;

export default PageGutter;
