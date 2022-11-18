import React from 'react';
import '../../assets/css/cari.css';
import '../../assets/css/styles.css';
import { Banner, Faq, Footer, Testimonial, WhyUs, OurServices, Header1 } from '../../components';

function LandingPage() {
  return (
    <div>
      <div>
        <Header1 />
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
