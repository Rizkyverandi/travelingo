import styled from "@emotion/styled";

export const Hero = styled.section`
  width: 100%;
  padding-block: 50px;
  @media screen and (max-width: 40.5em) {
    padding-block: 20px;
  }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 800px;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  clip-path: polygon(80% 0, 100% 0, 100% 100%, 25% 100%);

  @media screen and (max-width: 40.5rem) {
    height: 400px;
  }

  &::before {
    content: "";
    z-index: 2;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
  }
`;

export const BackgroundImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

export const HeroContainer = styled.div`
  display: flex;
  width: min(90%, 70.5rem);
  justify-content: flex-start;
  align-items: start;
  margin-inline: auto;
  gap: 2em;
  padding-inline: 1em;
  flex-direction: column;
  z-index: 10;

  @media screen and (max-width: 40.5em) {
    gap: 1em;
  }
`;

export const HeroTitleWrap = styled.div`
  width: min(80%, 400px);
  z-index: 10;
`;

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 64px;
  font-weight: 700;

  @media screen and (max-width: 40.5em) {
    font-size: 32px;
  }
`;

export const HeroParagraphWrap = styled.div`
  width: min(70%, 400px);
  z-index: 10;
`;

export const HeroParagraph = styled.p`
  color: #fff;
  font-size: 20px;

  @media screen and (max-width: 40.5em) {
    font-size: 10px;
  }
`;

export const HeroButton = styled.a`
  font-family: var(--ff-secondary);
  display: flex;
  color: #1e3231;
  font-size: 16px;
  text-decoration: none;
  background-color: #d0a5c0;
  border-radius: 12px;
  padding: 10px 12px;
  white-space: nowrap;
  cursor: pointer;
  z-index: 10;

  @media screen and (max-width: 40.5em) {
    font-size: 10px;
  }

  &:hover {
    background: #485665;
    color: #fff;
    transition: all 0.4s ease-in-out;
  }
`;
