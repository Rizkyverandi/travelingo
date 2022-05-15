import styled from "@emotion/styled";
import { Link as LinkScroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  background: ${({ isHide }) => (isHide ? "#1e3231" : "transparent")};
  transition: all 0.3s ease-in-out;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-inline: auto;
  width: min(90%, 70.5rem);
  position: relative;
`;

export const NavLogoWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-inline: 1em;
  gap: 0.5em;
`;

export const NavLogo = styled.h1`
  font-size: 40px;
  font-weight: 700 bold;
  color: #d0a5c0;
  cursor: pointer;

  @media screen and (max-width: 40.5em) {
    font-size: 28px;
  }
`;

export const NavParagraph = styled.p`
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  height: 100%;
  cursor: default;

  @media screen and (max-width: 40.5em) {
    font-size: 8px;
    display: none;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2em;
  padding-inline: 1em;
  list-style: none;
  position: absolute;
  right: 0;

  @media screen and (max-width: 40.5em) {
    display: none;
  }
`;

export const NavItemWrapper = styled.div`
  width: 100%;
`;

export const NavLinks = styled(LinkScroll)`
  white-space: nowrap;
  color: #fff;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #d0a5c0;
  }
`;

export const NavMobileWrap = styled.div`
  display: block;
  padding: 2px;
  right: 0;
  position: absolute;

  @media screen and (min-width: 40.5em) {
    display: none;
  }
`;

export const Icon = styled(FaBars)`
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-top: 5px;
`;

// export const Icon = styled(LinkScroll)`

// `;
