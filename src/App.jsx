import React from 'react';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/home/HeroSection';
import ManufacturingSection from './components/home/ManufacturingSection';
import SuccessSection from './components/home/SuccessSection';
import ServicesSection from './components/home/ServicesSection';
import CapabilitiesSection from './components/capabilities/CapabilitiesSection';
import TransformationSection from './components/capabilities/TransformationSection';
import ConsultingSection from './components/capabilities/ConsultingSection';
import ProjectSuccessSection from './components/project/ProjectSuccessSection';
import StrategySection from './components/project/StrategySection';
import OtherCapabilitiesSection from './components/business/OtherCapabilitiesSection';
import IndustryExperienceSection from './components/business/IndustryExperienceSection';
import CaseStudiesSection from './components/company/CaseStudiesSection';
import PartnershipsSection from './components/company/PartnershipsSection';
import WhyUsSection from './components/company/WhyUsSection';
import DiversitySection from './components/company/DiversitySection';
import FounderSection from './components/company/FounderSection';
import DifferenceSection from './components/company/DifferenceSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white min-h-screen">
      <Navigation />
      <main className="pt-[72px]"> {/* Added padding-top to account for fixed nav */}
        <HeroSection />
        <ManufacturingSection />
        <SuccessSection />
        <ServicesSection />
        <DifferenceSection />
        <TransformationSection />
        <CapabilitiesSection />
        <ConsultingSection />
        <StrategySection />
        <ProjectSuccessSection />
        <OtherCapabilitiesSection />
        <CaseStudiesSection />
        <PartnershipsSection />
        <WhyUsSection />
        <IndustryExperienceSection />
        <FounderSection />
        <DiversitySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;