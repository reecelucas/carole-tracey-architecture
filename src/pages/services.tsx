import * as React from 'react';
import Helmet from 'react-helmet';

// Utility components
import Spacer from '../components/utility/Spacer/Spacer';

// Layout components
import Wrapper from '../components/layout/Wrapper/Wrapper';

// Presentational components
import SectionIntro from '../components/presentational/SectionIntro';
import Tile from '../components/presentational/Tile/Tile';

class ServicesPage extends React.Component<any, void> {
    render() {
        return (
            <main>
                <Helmet>
                    <title>Carole Tracey Architecture | Services</title>
                    <meta name="description" content="Optional index page description" />
                </Helmet>

                <section className="u-pad-top-50 u-pad-top-120@lrg">
                    <Wrapper textCenter>
                        <Spacer size="large">
                            <SectionIntro>My Services</SectionIntro>
                        </Spacer>
                    </Wrapper>

                    <Wrapper fullWidth>
                        <Tile
                            className="u-bg-eta [ u-pad-top-30 u-pad-top-60@lrg ] [ u-pad-btm-20 u-pad-btm-60@lrg ]"
                            number="01."
                            heading="Individual Therapy"
                            copy="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                        />
                        <Tile
                            className="u-bg-gamma [ u-pad-top-30 u-pad-top-60@lrg ] [ u-pad-btm-20 u-pad-btm-60@lrg ]"
                            number="02."
                            heading="Group Therapy"
                            copy="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                        />
                        <Tile
                            className="u-bg-theta [ u-pad-top-30 u-pad-top-60@lrg ] [ u-pad-btm-20 u-pad-btm-60@lrg ]"
                            number="03."
                            heading="Couples Therapy"
                            copy="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                        />
                        <Tile
                            className="u-bg-eta [ u-pad-top-30 u-pad-top-60@lrg ] [ u-pad-btm-20 u-pad-btm-60@lrg ]"
                            number="04."
                            heading="Individual Therapy"
                            copy="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                        />
                        <Tile
                            className="u-bg-gamma [ u-pad-top-30 u-pad-top-60@lrg ] [ u-pad-btm-20 u-pad-btm-60@lrg ]"
                            number="05."
                            heading="Group Therapy"
                            copy="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                        />
                        <Tile
                            className="u-bg-theta [ u-pad-top-30 u-pad-top-60@lrg ] [ u-pad-btm-20 u-pad-btm-60@lrg ]"
                            number="06."
                            heading="Couples Therapy"
                            copy="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                        />
                    </Wrapper>
                </section>
            </main>
        );
    }
}

export default ServicesPage;
