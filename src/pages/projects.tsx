import * as React from 'react';
import Helmet from 'react-helmet';

// Utility components
import Spacer from '../components/utility/Spacer/Spacer';
import Text from '../components/utility/Text/Text';
import ResponsiveImage from '../components/utility/ResponsiveImage';

// Layout components
import Wrapper from '../components/layout/Wrapper/Wrapper';

// Presentational components
import SectionIntro from '../components/presentational/SectionIntro';
import ProjectCard from '../components/presentational/ProjectCard/ProjectCard';

class ContactPage extends React.Component<any, void> {
    render() {
        return (
            <main>
                <Helmet>
                    <title>Carole Tracey Architecture | Projects</title>
                    <meta name="description" content="Optional index page description" />
                </Helmet>

                <section className="u-pad-top-50 u-pad-top-120@lrg">
                    <Wrapper textCenter>
                        <Spacer>
                            <SectionIntro>Projects</SectionIntro>
                        </Spacer>

                        <Spacer size="huge">
                            <Text center>
                                I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit Text” or double click me to add your own
                                content and make changes to the font. Feel free to drag and drop me
                                anywhere you like on your page. I’m a great place for you to tell a
                                story and let your users know a little more about you.
                            </Text>
                        </Spacer>
                    </Wrapper>
                </section>

                <section className="[ u-pad-top-50 u-pad-top-120@lrg ] [ u-pad-btm-60 u-pad-btm-120@lrg ] u-bg-gamma">
                    <Wrapper wide>
                        <Spacer size="huge">
                            <ProjectCard
                                heading="Lorem Ipsum Dolor"
                                text="I'm a paragraph. Click here to add your own text and edit me. It’s
                                    easy. Just click “Edit Text” or double click me to add your own
                                    content and make changes to the font. Feel free to drag and drop me
                                    anywhere you like on your page. I’m a great place for you to tell a
                                    story and let your users know a little more about you.
                                "
                                image={
                                    <ResponsiveImage
                                        alt="Lorem Ipsum"
                                        src="http://via.placeholder.com/400x500"
                                    />
                                }
                            />
                        </Spacer>

                        <Spacer size="huge">
                            <ProjectCard
                                flipped
                                heading="Lorem Ipsum Dolor"
                                text="I'm a paragraph. Click here to add your own text and edit me. It’s
                                    easy. Just click “Edit Text” or double click me to add your own
                                    content and make changes to the font. Feel free to drag and drop me
                                    anywhere you like on your page. I’m a great place for you to tell a
                                    story and let your users know a little more about you.
                                "
                                image={
                                    <ResponsiveImage
                                        alt="Lorem Ipsum"
                                        src="http://via.placeholder.com/400x500"
                                    />
                                }
                            />
                        </Spacer>

                        <ProjectCard
                            heading="Lorem Ipsum Dolor"
                            text="I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit Text” or double click me to add your own
                                content and make changes to the font. Feel free to drag and drop me
                                anywhere you like on your page. I’m a great place for you to tell a
                                story and let your users know a little more about you.
                            "
                            image={
                                <ResponsiveImage
                                    alt="Lorem Ipsum"
                                    src="http://via.placeholder.com/400x500"
                                />
                            }
                        />
                    </Wrapper>
                </section>
            </main>
        );
    }
}

export default ContactPage;
