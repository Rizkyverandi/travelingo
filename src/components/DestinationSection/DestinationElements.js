import styled from "@emotion/styled";

export const Destination = styled.section`
  position: relative;
  width: 100%;
  background-color: #485665;
  padding-block: 100px;

  @media screen and (max-width: 40.5rem) {
    padding-block: 30px;
  }
`;

export const DestinationContainer = styled.div`
  display: flex;
  width: min(90%, 70.5rem);
  flex-direction: column;
  margin-inline: auto;
  gap: 3em;

  @media screen and (max-width: 40.5rem) {
    gap: 1em;
  }
`;

export const DestinationTitle = styled.h1`
  font-size: 50px;
  color: #fff;
  font-weight: 700;
  margin-left: 1em;

  @media screen and (max-width: 40.5rem) {
    font-size: 24px;
  }
`;

export const DestinationWrapper = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const DestinationCard = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    230deg,
    rgba(30, 50, 49, 1) 0%,
    rgba(72, 86, 101, 1) 40%,
    rgba(30, 50, 49, 1) 100%
  );
  border-radius: 24px;
  overflow: hidden;
`;

export const DestinationContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 40.5rem) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const DestinationImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  grid-area: col1;
  z-index: 1;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    z-index: 2;
    position: absolute;
    background: linear-gradient(
      290deg,
      rgba(30, 50, 49, 1) 0%,
      rgba(9, 9, 121, 0) 100%
    );

    @media screen and (max-width: 40.5rem) {
      background: linear-gradient(
        0deg,
        rgba(30, 50, 49, 1) 0%,
        rgba(9, 9, 121, 0) 100%
      );
    }
  }
`;

export const DestinationImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 1;
`;

export const DestinationContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: min(90%, 100%);
  gap: 2em;
  margin-inline: auto;
  padding-block: 1em;
  line-height: 2em;
  grid-area: col2;

  @media screen and (max-width: 40.5rem) {
    gap: 1em;
    line-height: 1em;
  }
`;

export const DestinationTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const DestinationLocation = styled.h2`
  font-size: 24px;
  color: #fff;

  @media screen and (max-width: 40.5rem) {
    font-size: 16px;
  }
`;

export const DestinationPlace = styled.h3`
  font-size: 18px;
  color: #fff;

  @media screen and (max-width: 40.5rem) {
    font-size: 12px;
  }
`;

export const DestinationParagraph = styled.p`
  color: #fff;
  font-size: 14px;
  text-align: justify;

  @media screen and (max-width: 40.5rem) {
    font-size: 10px;
  }
`;

export const LineBreak = styled.div`
  height: 2px;
  width: 70%;
  background-color: #fff;
`;

export const DestinationBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5em;
  width: 90%;

  @media screen and (max-width: 40.5em) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const DestinationLink = styled.a`
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  @media screen and (max-width: 40.5rem) {
    font-size: 10px;
  }

  &:hover {
    color: #485665;
  }
`;

export const DestinationButton = styled.a`
  font-family: var(--ff-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e3231;
  font-size: 16px;
  background-color: #d0a5c0;
  width: 200px;
  border-radius: 12px;
  padding: 6px;
  width: min(90%, 100px);
  white-space: nowrap;
  cursor: pointer;
  font-weight: 700;

  @media screen and (max-width: 40.5em) {
    font-size: 9px;
    width: 60%;
  }

  &:hover {
    background: #485665;
    color: #fff;
    transition: all 0.4s ease-in-out;
  }
`;
