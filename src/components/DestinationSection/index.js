import React from "react";
import {
  Destination,
  DestinationContainer,
  DestinationTitle,
  DestinationWrapper,
  DestinationCard,
  DestinationContentContainer,
  DestinationImgWrapper,
  DestinationImg,
  DestinationContentWrapper,
  DestinationTitleWrapper,
  DestinationLocation,
  DestinationPlace,
  DestinationParagraph,
  LineBreak,
  DestinationBtnWrapper,
  DestinationLink,
  DestinationButton,
  WavesImg,
} from "./DestinationElements";
import { BahamasImg, LakeImg } from "../../assets";

const DestinationSection = () => {
  return (
    <Destination id={"destination"}>
      <DestinationContainer>
        <DestinationTitle>Destinations</DestinationTitle>
        <DestinationWrapper>
          <DestinationCard>
            <DestinationContentContainer>
              <DestinationImgWrapper>
                <DestinationImg src={LakeImg} />
              </DestinationImgWrapper>
              <DestinationContentWrapper>
                <DestinationTitleWrapper>
                  <DestinationLocation>California</DestinationLocation>
                  <DestinationPlace>Lake Tahoe</DestinationPlace>
                </DestinationTitleWrapper>
                <DestinationParagraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, eveniet. Tempora rem magni amet obcaecati blanditiis
                  voluptas, sed autem pariatur nesciunt at eaque? Quaerat
                  corporis quis reiciendis eius alias laudantium.
                </DestinationParagraph>
                <LineBreak />
                <DestinationBtnWrapper>
                  <DestinationLink>Learn More</DestinationLink>
                  <DestinationButton>Book Now</DestinationButton>
                </DestinationBtnWrapper>
              </DestinationContentWrapper>
            </DestinationContentContainer>
          </DestinationCard>
        </DestinationWrapper>
        <DestinationWrapper>
          <DestinationCard>
            <DestinationContentContainer>
              <DestinationImgWrapper>
                <DestinationImg src={BahamasImg} />
              </DestinationImgWrapper>
              <DestinationContentWrapper>
                <DestinationTitleWrapper>
                  <DestinationLocation>Bahamas</DestinationLocation>
                  <DestinationPlace>Musha Cay Resort</DestinationPlace>
                </DestinationTitleWrapper>
                <DestinationParagraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, eveniet. Tempora rem magni amet obcaecati blanditiis
                  voluptas, sed autem pariatur nesciunt at eaque? Quaerat
                  corporis quis reiciendis eius alias laudantium.
                </DestinationParagraph>
                <LineBreak />
                <DestinationBtnWrapper>
                  <DestinationLink>Learn More</DestinationLink>
                  <DestinationButton>Book Now</DestinationButton>
                </DestinationBtnWrapper>
              </DestinationContentWrapper>
            </DestinationContentContainer>
          </DestinationCard>
        </DestinationWrapper>
      </DestinationContainer>
    </Destination>
  );
};

export default DestinationSection;
