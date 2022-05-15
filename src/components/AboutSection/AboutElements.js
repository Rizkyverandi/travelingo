import styled from "@emotion/styled";
import { LakeImg } from "../../assets";

export const About = styled.section`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${LakeImg});
  background-blend-mode: darken;
  background-size: cover;
  padding-block: 200px;
  position: relative;

  @media screen and (max-width: 40.5rem) {
    padding-block: 50px;
  }
`;

export const AboutContainer = styled.div`
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: min(90%, 70.5rem);
  gap: 3em;
`;

export const AboutTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 700;

  @media screen and (max-width: 40.5rem) {
    font-size: 24px;
  }
`;

export const AboutContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 32px;
`;

export const AboutContentColumn = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  padding: 32px 32px;
  width: 100%;
  height: 100%;
  gap: 1em;
  line-height: 1.5em;
  backdrop-filter: blur(20px);
  box-shadow: 5px 5px 5px 0px rgba(0,0,0, 0.5);
`;

export const AboutContentTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #fff;
  font-weight: 700 bold;
  z-index: 99;
  @media screen and (max-width: 40.5rem) {
    font-size: 14px;
  }
`;

export const AboutContentParagraph = styled.p`
  font-size: 14px;
  color: #fff;
  text-align: justify;
  @media screen and (max-width: 40.5rem) {
    font-size: 9px;
  }
`;

export const WavesImg = styled.img`
  display: block;
  width: 100%;
  position: absolute;
  bottom: 0;
  ${({isTop}) => (isTop ? `top: 0;` : `bottom:0;` ) } ;
  z-index: 5;
`;

