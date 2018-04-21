import * as React from 'react';
import Wrapper from '../../layout/Wrapper/Wrapper';
import Anchor from '../../utility/Anchor/Anchor';
import ResponsiveImage from '../../utility/ResponsiveImage';
import Spacer from '../../utility/Spacer/Spacer';

// Logos
const AECBLogo = require('../../../images/logos/aecb-logo.jpg');
const ARBLogo = require('../../../images/logos/arb-logo.svg');

const styles = require('./Footer.module.scss');

const Footer = () => (
    <footer className={styles.footer}>
        <Wrapper>
            <div className={styles.inner}>
                <Spacer
                    size={{
                        default: 'default',
                        medium: 'none'
                    }}
                >
                    <div className={styles.logos}>
                        <Anchor
                            className={styles.logo}
                            href="https://www.aecb.net/"
                            title="Visit The Association for Environment Conscious Building"
                            newTab
                        >
                            <ResponsiveImage
                                className={styles.logo}
                                alt="The Association for Environment Conscious Building"
                                src={AECBLogo}
                            />
                        </Anchor>

                        <Anchor
                            className={`${styles.logo} ${styles.logoLarge}`}
                            href="http://www.arb.org.uk/"
                            title="Visit The Architects Registration Board"
                            newTab
                        >
                            <ResponsiveImage
                                className={styles.logo}
                                alt="Architects Registration Board"
                                src={ARBLogo}
                            />
                        </Anchor>
                    </div>
                </Spacer>

                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Carole Tracey Architecture
                </p>
            </div>
        </Wrapper>
    </footer>
);

export default Footer;
