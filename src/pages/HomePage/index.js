import React from "react";
import {
  Navbar,
  HeroSection,
  SearchSection,
  AboutSection,
  DestinationSection,
  FooterSection
} from "../../components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchSection />
      <AboutSection />
      <DestinationSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
