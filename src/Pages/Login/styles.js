import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  @media (max-width: 1387px) {
    grid-template-columns: 1fr;
  }
`;

export const Container2 = styled.main`
  padding: 2em;
`;

export const Form = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #0000000a;
  border-radius: 14px;
  opacity: 1;
  width: 500px;
  padding: 20px;
`;

export const FormContainer = styled.section`
  width: 400px;
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    span {
      color: #000000;
      font-weight: bold;
      font-size: 23px;
    }
    p {
      letter-spacing: 0.5px;
      color: #525252;
      font-weight: normal;
      font-size: 16px;
    }
  }

  form {
    div {
      margin-bottom: 50px;
    }
  }
`;
export const CheckBox = styled.div`
  position: relative;
  input {
    left: 5px;
    position: absolute;
  }

  label {
    font-size: 10px;
    position: absolute;
    left: 30px;
    color: #626262;
  }
`;
export const BgImgContainer = styled.div`
  background: transparent linear-gradient(180deg, #ffffff 0%, #80bfff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  .text-container {
    margin: 50px 0 100px 0;
    span {
      color: #000e48;
      font-weight: bold;
      font-size: 30px;
    }
    p {
      color: #000e48;
      font-size: 20px;
    }
  }

`;
