import styled from "styled-components";

export const Styles = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  width: calc(100% - 200px);
  margin: 0 0 0 auto;
  background-color: #f5f6fa;
  > section {
    padding: 50px;
    margin: 70px 0;
    max-width: 1100px;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 136px;
    > section {
      margin: 20px 0;
      padding: 20px 5%;
    }
  }
`;
