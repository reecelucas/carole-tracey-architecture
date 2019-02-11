import React from 'react';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';

import Header from '../sections/Header/Header';
import Profile from '../sections/Profile/Profile';
import Services from '../sections/Services/Services';
import Testimonials from '../sections/Testimonials/Testimonials';
import Process from '../sections/Process/Process';
import Footer from '../sections/Footer/Footer';

const IndexPage = () => {
  const sectionAbout = React.createRef();
  const sectionServices = React.createRef();
  const sectionTestimonials = React.createRef();
  const sectionProcess = React.createRef();
  const sectionContact = React.createRef();

  return (
    <Layout>
      <Header
        navItems={[
          {
            id: 'cta-nav-about',
            label: 'About',
            href: '#about',
            spyOn: sectionAbout
          },
          {
            id: 'cta-nav-services',
            label: 'Services',
            href: '#services',
            spyOn: sectionServices
          },
          {
            id: 'cta-nav-testimonials',
            label: 'Testimonials',
            href: '#testimonials',
            spyOn: sectionTestimonials
          },
          {
            id: 'cta-nav-process',
            label: 'Process',
            href: '#process',
            spyOn: sectionProcess
          },
          {
            id: 'cta-nav-contact',
            label: 'Contact',
            href: '#contact',
            spyOn: sectionContact
          }
        ]}
      />

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
