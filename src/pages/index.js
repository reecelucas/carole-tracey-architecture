import React, { useRef } from 'react';
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
            navItems={[
              {
                id: 'cta-nav-about',
                label: 'About',
                href: '#about'
              },
              {
                id: 'cta-nav-services',
                label: 'Services',
                href: '#services'
              },
              {
                id: 'cta-nav-testimonials',
                label: 'Testimonials',
                href: '#testimonials'
              },
              {
                id: 'cta-nav-process',
                label: 'Process',
                href: '#process'
              },
              {
                id: 'cta-nav-contact',
                label: 'Contact',
                href: '#contact'
              }
            ]}
          />
        )}
      </ScrollSpy>

      <main id="content">
        <Banner as="section" id="about" size="lg" ref={sectionAbout}>
          <Profile />
        </Banner>

        <Banner as="section" id="services" ref={sectionServices} contrast>
          <Services />
        </Banner>

        <Banner id="testimonials" as="section" ref={sectionTestimonials}>
          <Testimonials />
        </Banner>

        <Banner as="section" id="process" ref={sectionProcess} contrast>
          <Process />
        </Banner>
      </main>

      <Footer id="contact" ref={sectionContact} />
    </Layout>
  );
};

export default IndexPage;
