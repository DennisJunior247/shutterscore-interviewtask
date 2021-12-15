import styled from "styled-components";

export const LayoutStyle = styled.div`
  margin: 0 auto;
`;
export const Main = styled.main`
  /* height: calc(100vh - 80px); */
  background: #f5f6fa;
  margin: 0 0 0 auto;
  width: calc(100% - 200px);
  padding: 32px 50px;
  position: relative;
  z-index: 1;
  @media (max-width: 800px) {
    padding: 32px 4%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  > div {
    margin: 0 auto;
    max-width: 1280px;
    @media (max-width: 600px) {
      margin-bottom: 20px;
    }
  }
`;
