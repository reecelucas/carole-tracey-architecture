import * as React from 'react';
import Helmet from 'react-helmet';

// Utility components
import ResponsiveImage from '../components/utility/ResponsiveImage';
import Spacer from '../components/utility/Spacer/Spacer';
import Text from '../components/utility/Text/Text';

// Layout components
import Grid from '../components/layout/Grid/Grid';
import PageGutter from '../components/layout/PageGutter/PageGutter';
import Wrapper from '../components/layout/Wrapper/Wrapper';

// Presentational components
import SectionIntro from '../components/presentational/SectionIntro';
import SectionHeading from '../components/presentational/SectionHeading';
import { Hero, HeroPanel } from '../components/presentational/Hero/Hero';
import AsymmetricalBackground from '../components/presentational/AsymmetricalBackground/AsymmetricalBackground';
import ProfileImage from '../components/presentational/ProfileImage/ProfileImage';
import Tile from '../components/presentational/Tile/Tile';

// Icons
import { DownArrow } from '../components/Icons/Icons';

class IndexPage extends React.Component<any, void> {
    render() {
        return (
            <main>
                <Helmet>
                    <title>Carole Tracey Architecture | About</title>
                    <meta name="description" content="Optional index page description" />
                </Helmet>

                <PageGutter>
                    <section className="u-pad-top-80 u-pad-btm-120@lrg">
                        <Wrapper fullWidth>
                            <Hero>
                                <HeroPanel className="[ u-pad-top-50 u-pad-top-0@md ] [ u-pad-btm-40 u-pad-btm-0@md ]">
                                    <Wrapper>
                                        <SectionHeading>
                                            Nurture<br />
                                            Your Emotional<br />
                                            Health
                                        </SectionHeading>

                                        <Spacer size="large">
                                            <Text>I am a description. Click here to edit.</Text>
                                        </Spacer>

                                        <DownArrow
                                            colour="u-colour-iota"
                                            height="36px"
                                            width="32px"
                                            ariaHidden
                                        />
                                    </Wrapper>
                                </HeroPanel>

                                <HeroPanel image>
                                    <ResponsiveImage
                                        alt="Hero placeholder"
                                        src="http://via.placeholder.com/800x400"
                                        sizes={[
                                            { size: '100vw', mediaCondition: '(max-width: 940px)' },
                                            { size: '940px', mediaCondition: '(min-width: 941px)' }
                                        ]}
                                        srcset={[
                                            {
                                                width: '500w',
                                                url: 'http://via.placeholder.com/500x250'
                                            },
                                            {
                                                width: '800w',
                                                url: 'http://via.placeholder.com/800x400'
                                            }
                                        ]}
                                    />
                                </HeroPanel>
                            </Hero>
                        </Wrapper>
                    </section>

                    <section>
                        <AsymmetricalBackground className="[ u-pad-top-40 u-pad-top-100@md ] [ u-pad-btm-80 u-pad-btm-120@md ]">
                            <Wrapper textCenter>
                                <Spacer size="tiny">
                                    <SectionIntro>About</SectionIntro>
                                </Spacer>

                                <SectionHeading>Carole Tracey</SectionHeading>

                                <Spacer size="large">
                                    <Text center>
                                        I'm a paragraph. Click here to add your own text and edit
                                        me. It’s easy. Just click “Edit Text” or double click me to
                                        add your own content and make changes to the font. Feel free
                                        to drag and drop me anywhere you like on your page. I’m a
                                        great place for you to tell a story and let your users know
                                        a little more about you.
                                    </Text>
                                </Spacer>

                                <ProfileImage>
                                    <ResponsiveImage
                                        alt="Carole Tracey"
                                        src="http://via.placeholder.com/400x500"
                                    />
                                </ProfileImage>
                            </Wrapper>
                        </AsymmetricalBackground>
                    </section>

                    <section>
                        <Spacer>
                            <Wrapper fullWidth>
                                <Grid columnCount={3} breakpoint="medium">
                                    <Tile
                                        className="u-bg-eta [ u-pad-top-30 u-pad-top-50@lrg ] [ u-pad-btm-20 u-pad-btm-40@lrg ]"
                                        number="01."
                                        heading="Individual Therapy"
                                        copy="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                                    />
                                    <Tile
                                        className="u-bg-gamma [ u-pad-top-30 u-pad-top-50@lrg ] [ u-pad-btm-20 u-pad-btm-40@lrg ]"
                                        number="02."
                                        heading="Group Therapy"
                                        copy="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                                    />
                                    <Tile
                                        className="u-bg-theta [ u-pad-top-30 u-pad-top-50@lrg ] [ u-pad-btm-20 u-pad-btm-40@lrg ]"
                                        number="03."
                                        heading="Couples Therapy"
                                        copy="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                                    />
                                </Grid>
                            </Wrapper>
                        </Spacer>
                    </section>
                </PageGutter>
            </main>
        );
    }
}

export default IndexPage;
