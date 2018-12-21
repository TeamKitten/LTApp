import * as QRCode from "qrcode.react";
import * as React from "react";
import styled from "styled-components";
import { base64Encode } from "../../utils/base64";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 48px - 48px);
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
  font-weight: bold;
`;

const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const InputText = styled(Input)`
  border: none;
  color: #333;
  border-radius: 2px;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  padding: 12px;
  width: 90%;
`;

const InputButton = styled(Input)`
  border: none;
  background: var(--brand);
  color: #fff;
  padding: 8px 24px;
  border-radius: 2px;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(0, 143, 254, 0.25);
`;

const ErrorText = styled.b`
  font-weight: bold;
  color: crimson;
  text-align: center;
  margin: 12px 0;
`;

interface IProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  token: string | null;
  error: Error | null;
}

const InputForm = (props: IProps) => (
  <Form onSubmit={props.onSubmit}>
    <Label>connpassの受付番号を入力してください</Label>
    <InputText
      onChange={props.onNumberChange}
      type="number"
      placeholder="受付番号"
      required={true}
    />
    <InputButton type="submit" value="送信" />
    {props.error ? <ErrorText>{props.error.message}</ErrorText> : null}
  </Form>
);

const YourQRWrapper = styled.div`
  text-align: center;
`;

const YourQRHeading = styled.p`
  font-weight: bold;
  margin-bottom: 12px;
`;

const YourQR = (props: IProps) => (
  <YourQRWrapper>
    <YourQRHeading>
      {props.token ? JSON.parse(props.token).name : null}さんの参加証
    </YourQRHeading>
    <QRCode
      size={250}
      value={
        props.token
          ? `https://pmss.teamkitten.tk/${base64Encode(props.token)}`
          : ""
      }
    />
  </YourQRWrapper>
);

export const QRPage = (props: IProps) => (
  <Wrapper>
    {props.token ? <YourQR {...props} /> : <InputForm {...props} />}
  </Wrapper>
);
