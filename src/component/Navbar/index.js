import React from "react";
import {
  NavSection,
  NavCOntainer,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
  AnchorLink
} from "./style.js";
// import "./style.css";
// , { Fragment, useState, useEffect }

const Navbar = () => {
  return (
    <NavSection>
      <NavCOntainer>
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <AnchorLink to="/">Home</AnchorLink>
          </ListItem>
          <ListItem>
            <Anchor>Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>About</Anchor>
          </ListItem>
          <ListItem>
            <AnchorLink to="/contact"> Contact</AnchorLink>
          </ListItem>
        </UlList>
      </NavCOntainer>
    </NavSection>
  );
};

export default Navbar;
