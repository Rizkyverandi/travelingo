import React from "react";
import {
  Footer,
  FooterContainer,
  FooterLogo,
  FooterParagraph,
  FooterCopyRight,
  SocialMediaWrapper,
  SocialMediaLink,
} from "./FooterElements";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { WavesImg } from "../AboutSection/AboutElements";
import { Waves2Img } from "../../assets";

const FooterSection = () => {
  return (
    <Footer id="support">
      <FooterContainer>
        <FooterLogo>Travelingo</FooterLogo>
        <FooterParagraph>Exclusive travel experience.</FooterParagraph>
        <FooterCopyRight>
          Travelingo &copy; {new Date().getFullYear()} All rights reserved.
        </FooterCopyRight>
        <FooterCopyRight>
          Design Concept / Illustration by <a href="https://www.figma.com/community/file/1095012515064178946" style={{color: "#d0a5c0"}} target="_blank">Giovanni</a>
        </FooterCopyRight>
        <FooterCopyRight>Created by Rizky Verandi</FooterCopyRight>
        <SocialMediaWrapper>
          <SocialMediaLink
            href="https://www.github.com/rizkyverandi"
            aria-label="github"
            target="_blank"
          >
            <FaGithub />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.instagram.com/skydewsmusic"
            aria-label="instagram"
            target="_blank"
          >
            <FaInstagram />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.facebook.com/rizkyverandi"
            aria-label="facebook"
            target="_blank"
          >
            <FaFacebook />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.linkedin.com/in/rizkyverandi"
            aria-label="linkedin"
            target="_blank"
          >
            <FaLinkedin />
          </SocialMediaLink>
        </SocialMediaWrapper>
      </FooterContainer>
      <WavesImg src={Waves2Img} isTop={true}/>
    </Footer>
  );
};

export default FooterSection;
