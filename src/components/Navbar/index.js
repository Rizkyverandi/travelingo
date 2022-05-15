import React, { useState, useEffect } from "react";
import {
  Nav,
  NavContainer,
  NavLogoWrap,
  NavLogo,
  NavParagraph,
  NavItems,
  NavItemWrapper,
  NavLinks,
  NavMobileWrap,
  Icon,
} from "./NavbarElements";

const Navbar = () => {
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setIsHide(true);
      } else {
        setIsHide(false);
      }
      console.log(window.pageYOffset)
    });
  }, [isHide]);  

  return (
    <Nav isHide={isHide}>
      <NavContainer>
        <NavLogoWrap>
          <NavLogo>Travelingo</NavLogo>
          <NavParagraph>Exclusive travel experience.</NavParagraph>
        </NavLogoWrap>
        <NavItems>
          <NavItemWrapper>
            <NavLinks to="destination" spy={true} smooth={true} duration={1000}>
              Destination
            </NavLinks>
          </NavItemWrapper>
          <NavItemWrapper>
            <NavLinks to="about" spy={true} smooth={true} duration={1000}>
              About Us
            </NavLinks>
          </NavItemWrapper>
          <NavItemWrapper>
            <NavLinks to="support" spy={true} smooth={true} offset={200} duration={1000}>
              Support
            </NavLinks>
          </NavItemWrapper>
        </NavItems>
        <NavMobileWrap>
          <Icon />
        </NavMobileWrap>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
