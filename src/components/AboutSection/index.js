import React from "react";
import { WavesImg } from "./AboutElements";
import {
  About,
  AboutContainer,
  AboutTitle,
  AboutContentWrapper,
  AboutContentColumn,
  AboutContentTitle,
  AboutContentParagraph,
} from "./AboutElements";
import { Waves3Img, Waves2Img } from "../../assets";

const AboutSection = () => {
  return (
    <About id="about">
      <WavesImg src={Waves2Img} isTop={true}/>
      <AboutContainer>
        <AboutTitle>About Us</AboutTitle>
        <AboutContentWrapper>
          {/* column1 */}
          <AboutContentColumn>
            <AboutContentTitle>High class travel agency</AboutContentTitle>
            <AboutContentParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              distinctio quisquam omnis dolor error doloremque vero vitae
              maiores incidunt beatae.
            </AboutContentParagraph>
          </AboutContentColumn>
          {/* column2 */}
          <AboutContentColumn>
            <AboutContentTitle>High class travel agency</AboutContentTitle>
            <AboutContentParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              distinctio quisquam omnis dolor error doloremque vero vitae
              maiores incidunt beatae.
            </AboutContentParagraph>
          </AboutContentColumn>
          {/* column3 */}
          <AboutContentColumn>
            <AboutContentTitle>High class travel agency</AboutContentTitle>
            <AboutContentParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              distinctio quisquam omnis dolor error doloremque vero vitae
              maiores incidunt beatae.
            </AboutContentParagraph>
          </AboutContentColumn>
        </AboutContentWrapper>
      </AboutContainer>
      <WavesImg src={Waves3Img} isTop={false}/>
    </About>
  );
};

export default AboutSection;
