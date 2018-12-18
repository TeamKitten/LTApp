import * as React from "react";
import styled from "styled-components";
import { NavBarIcon } from "../NavBarIcon";

const StyledFooter = styled.footer`
  height: 48px;
  background: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavBar = () => (
  <StyledFooter>
    <NavBarIcon title="Home" icon="home" />
  </StyledFooter>
);
