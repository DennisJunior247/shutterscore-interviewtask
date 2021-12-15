import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px 0;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border: 0.5px solid #bcbcbc;
  border-radius: 3px;
  position: relative;

  font-weight: normal;

  > label {
    position: absolute;
    bottom: 55px;
    left: -1.5px;
    color: #626262;
  }
`;

export const InputStyle = styled.input`
  text-align: start;
  border: none;
  outline: none;
  width: 97%;
  height: 100%;
  color: #626262;
  font-size: 14px;
  padding: 0 5px;
  &::placeholder {
    color: #626262;
  }
`;
