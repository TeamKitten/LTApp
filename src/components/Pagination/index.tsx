import styled from "styled-components";

export const PaginationDots = styled.ul`
  position: fixed;
  width: 100%;
  bottom: 72px;
  left: auto;
  right: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface PaginationDotProps {
  active?: boolean;
}

export const PaginationDot = styled.li`
  width: 12px;
  height: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  background: ${(props: PaginationDotProps) =>
    props.active ? "#008ffe" : "#eee"};
  margin-right: 12px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
