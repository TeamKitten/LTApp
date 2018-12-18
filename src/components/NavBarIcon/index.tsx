import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.b`
  font-weight: bold;
  font-size: 0.5rem;
  color: #333;
`;

interface IProps {
  icon: IconProp;
  title: string;
}

export const NavBarIcon = (props: IProps) => (
  <Container>
    <FontAwesomeIcon color="#333" size="lg" icon={props.icon} />
    <Title>{props.title}</Title>
  </Container>
);
