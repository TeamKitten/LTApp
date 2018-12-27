import * as React from "react";
import * as ReactModal from "react-modal";
import styled from "styled-components";
import { Button } from "../Button";
import "./styles.css";

ReactModal.setAppElement("#root");

interface IProps {
  isOpen: boolean;
  title: string;
  body: string;
  onAfterOpen?: () => void;
  onRequestClose: () => void;
  onRequestReset: () => void;
}

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0"
  }
};

const ModalTitle = styled.header`
  background: var(--brand);
  color: #fff;
  text-align: center;
  padding: 14px 0;
  font-weight: bold;
`;
const ModalBody = styled.div`
  padding: 14px;
`;

const CustomButton = styled(Button)`
  margin: 12px auto;
  width: 140px;
`;

const CustomNegativeButton = styled(CustomButton)`
  background: gray;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export class Modal extends React.Component<IProps> {
  public render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onAfterOpen={this.props.onAfterOpen}
        onRequestClose={this.props.onRequestClose}
        style={modalStyle}
        closeTimeoutMS={250}
      >
        <ModalTitle>{this.props.title}</ModalTitle>
        <ModalBody>{this.props.body}</ModalBody>
        <CustomButton onClick={this.props.onRequestReset}>
          リセット
        </CustomButton>
        <CustomNegativeButton onClick={this.props.onRequestClose}>
          キャンセル
        </CustomNegativeButton>
      </ReactModal>
    );
  }
}
