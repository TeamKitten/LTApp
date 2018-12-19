// @flow
import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 48px;
  background: #fff;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  font-weight: bold;
  color: #212121;
`;

interface Props {
  title: string;
}

export const Header = (props: Props) => (
  <StyledHeader>
    <Title>{props.title}</Title>
  </StyledHeader>
);
