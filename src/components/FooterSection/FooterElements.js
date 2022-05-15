import styled from "@emotion/styled";
import { Link as LinkScroll } from "react-scroll";

export const Footer = styled.section`
  width: 100%;
  padding-top: 150px;
  padding-bottom: 50px;
  position: relative;

  @media screen and (max-width: 40.5rem) {
    padding-top: 50px;
    padding-bottom: 20px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: min(90%, 70.5rem);
  margin-inline: auto;
  gap: 1em;

  @media screen and (max-width: 40.5rem) {
    gap: 0.5em;
  }
`;

export const FooterLogo = styled(LinkScroll)`
  text-decoration: none;
  font-size: 40px;
  font-weight: 700 bold;
  color: #d0a5c0;
  cursor: pointer;

  @media screen and (max-width: 40.5em) {
    font-size: 28px;
  }
`;

export const FooterParagraph = styled.p`
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  height: 100%;
  cursor: default;

  @media screen and (max-width: 40.5em) {
    font-size: 8px;
  }
`;

export const FooterCopyRight = styled.small`
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  display: block;

  @media screen and (max-width: 40.5em) {
    font-size: 7px;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  width: min(50%, 100%);
  justify-content: space-evenly;
  align-content: center;  
`;

export const SocialMediaLink = styled.a`
  display: flex;
  /* margin: auto; */
  font-size: 24px;
  color: #d0a5c0;
  cursor: pointer;

  @media screen and (max-width: 40.5rem) {
    font-size: 18px;
  }
`;
