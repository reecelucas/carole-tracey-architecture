import * as React from 'react';
import Helmet from 'react-helmet';

// Utility components
import Spacer from '../components/utility/Spacer/Spacer';
import Text from '../components/utility/Text/Text';

// Layout components
import Wrapper from '../components/layout/Wrapper/Wrapper';

// Presentational components
import SectionIntro from '../components/presentational/SectionIntro';
import SectionHeading from '../components/presentational/SectionHeading';
import Form from '../components/Form/Form';

class ContactPage extends React.Component<any, void> {
    render() {
        return (
            <main>
                <Helmet>
                    <title>Carole Tracey Architecture | Contact Me</title>
                    <meta name="description" content="Optional index page description" />
                </Helmet>

                <section className="[ u-pad-top-50 u-pad-top-120@lrg ] u-pad-btm-60 u-bg-theta">
                    <Wrapper textCenter>
                        <Spacer size="tiny">
                            <SectionIntro>Contact Me</SectionIntro>
                        </Spacer>

                        <SectionHeading>Lorem Ipsum Dolor Sit Amet</SectionHeading>

                        <Spacer size="huge">
                            <Text center>
                                I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit Text” or double click me to add your own
                                content and make changes to the font. Feel free to drag and drop me
                                anywhere you like on your page. I’m a great place for you to tell a
                                story and let your users know a little more about you.
                            </Text>
                        </Spacer>

                        <Form />
                    </Wrapper>
                </section>
            </main>
        );
    }
}

export default ContactPage;
