import React, { useRef } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { stripUnit } from 'polished';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import ScrollSpy from '../components/utils/ScrollSpy/ScrollSpy';

import Header from '../sections/Header/Header';
import Profile from '../sections/Profile/Profile';
import Services from '../sections/Services/Services';
import Testimonials from '../sections/Testimonials/Testimonials';
import Process from '../sections/Process/Process';
import Footer from '../sections/Footer/Footer';

import { HEADER_HEIGHT } from '../constants/global';
const sectionScrollOffset = stripUnit(HEADER_HEIGHT);

const IndexPage = () => {
  const sectionAbout = useRef();
  const sectionServices = useRef();
  const sectionTestimonials = useRef();
  const sectionProcess = useRef();
  const sectionContact = useRef();

  return (
    <StaticQuery
      query={graphql`
        query IndexQuery {
          site {
            siteMetadata {
              navItems {
                id
                label
                href
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <ScrollSpy
            spyOn={[
              sectionAbout,
              sectionServices,
              sectionTestimonials,
              sectionProcess,
              sectionContact
            ]}
            offset={sectionScrollOffset}
          >
            {({ currentId }) => (
              <Header
                currentId={currentId}
                navItems={data.site.siteMetadata.navItems}
              />
            )}
          </ScrollSpy>

          <main id="content">
            <Banner
              as="section"
              id="about"
              size="lg"
              ref={sectionAbout}
              contrast
            >
              <Profile />
            </Banner>

            <Banner as="section" id="services" ref={sectionServices}>
              <Services />
            </Banner>

            <Banner
              id="testimonials"
              as="div"
              ref={sectionTestimonials}
              contrast
            >
              <Testimonials />
            </Banner>

            <Banner as="section" id="process" ref={sectionProcess}>
              <Process />
            </Banner>
          </main>

          <Footer id="contact" ref={sectionContact} />
        </Layout>
      )}
    />
  );
};

export default IndexPage;
