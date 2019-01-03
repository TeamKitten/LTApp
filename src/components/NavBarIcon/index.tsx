import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled from "styled-components";

interface IContainerProps {
  active: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const Title = styled.b`
  font-weight: bold;
  font-size: 0.5rem;
  color: #333;
  color: ${(props: IContainerProps) => (props.active ? "#008ffe" : "#333")};
`;

interface IProps {
  icon: IconProp;
  title: string;
  active: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const NavBarIcon = (props: IProps) => (
  <Container onClick={props.onClick}>
    <FontAwesomeIcon
      color={props.active ? "#008ffe" : "#333"}
      size="lg"
      icon={props.icon}
    />
    <Title id="navTitle" active={props.active}>
      {props.title}
    </Title>
  </Container>
);
