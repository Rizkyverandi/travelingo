import React from "react";
import {
  Search,
  SearchContainer,
  SearchTitle,
  SearchInputWrapper,
  SearchIcon,
  SearchInput,
  SearchButton,
} from "./SearchElements";
import { WavesImg } from "../AboutSection/AboutElements";
import { Waves1Img } from "../../assets";

const SearchSection = () => {
  return (
    <Search>
      <SearchContainer>
        <SearchTitle>Check your booking information</SearchTitle>
        <SearchInputWrapper>
          <SearchIcon />
          <SearchInput type={"text"} placeholder={"Booking number..."} />
        </SearchInputWrapper>
        <SearchButton>Check now</SearchButton>
      </SearchContainer>
      <WavesImg src={Waves1Img} isTop={false}/>
    </Search>
  );
};

export default SearchSection;
