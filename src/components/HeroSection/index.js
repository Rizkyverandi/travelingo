import React from "react";
import {
  Hero,
  HeroContainer,
  HeroTitleWrap,
  HeroTitle,
  HeroParagraphWrap,
  HeroParagraph,
  HeroButton,
  BackgroundWrapper,
  BackgroundImg,
} from "./HeroElements";
import { CaveImg } from "../../assets";


const HeroSection = () => {
  return (
    <Hero>
      <BackgroundWrapper>
        <BackgroundImg src={CaveImg} alt="a man standing in a cave" />
      </BackgroundWrapper>
      <HeroContainer>
        <HeroTitleWrap>
          <HeroTitle>Go on an Adventure.</HeroTitle>
        </HeroTitleWrap>
        <HeroParagraphWrap>
          <HeroParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem
            blanditiis consequuntur in. Fugit nesciunt eligendi vero maiores
            dignissimos rerum error sint quod accusantium ullam, quidem debitis
            repudiandae ab doloremque?
          </HeroParagraph>
        </HeroParagraphWrap>
        <HeroButton href="#">Explore Destination</HeroButton>
      </HeroContainer>
    </Hero>
  );
};

export default HeroSection;
