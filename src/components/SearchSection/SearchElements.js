import styled from "@emotion/styled";
import { FaSearch } from "react-icons/fa";

export const Search = styled.section`
  width: 100%;
  padding-block: 50px;
  z-index: 10;
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 40.5em) {
    padding-block: 5px;    
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-inline: auto;  
  width: min(90%, 70.5rem);  
  background-color: white;
  flex-direction: column;  
  padding: 1em;  
  gap: 2em;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  @media screen and (max-width: 40.5em) {
    gap: 0.5em;
  }
  z-index: 10;
`;

export const SearchTitle = styled.h1`
  color: #000;
  width: min(90%, 600px);
  text-align: center;
  font-size: 36px;

  @media screen and (max-width: 40.5em) {
    font-size: 14px;
    padding-top: 20px;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(90%, 100%);
  position: relative;
`;

export const SearchIcon = styled(FaSearch)`
  display: block;
  font-size: 18px;
  color: #aaa;
  position: absolute;
  right: 0.5rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 2px solid #aaa;
  outline: none;
  padding: 8px;
  border-radius: 12px;

  &:focus {
    border: 2px solid #d0a5c0;
    box-shadow: 0 0 8px 0 #d0a5c0;
  }
`;

export const SearchButton = styled.a`
  font-family: var(--ff-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e3231;
  font-size: 16px;
  background-color: #d0a5c0;
  width: 200px;
  border-radius: 12px;
  padding: 10px 12px;
  width: min(90%, 100px);
  white-space: nowrap;
  cursor: pointer;

  @media screen and (max-width: 40.5em) {
    font-size: 10px;
  }

  &:hover {
    background: #485665;
    color: #fff;
    transition: all 0.4s ease-in-out;
  }
`;
