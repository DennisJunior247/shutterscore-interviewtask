import styled from "styled-components";

export const HeaderStyles = styled.menu`
  height: 80px;
  position: relative;
  right: 0;
  left: 0;
  /* padding: 1.5rem 1rem; */
  /* width: 100%; */
  border: 1px solid red;
  z-index: 15000;
  width: calc(100% - 200px);
  /* padding: 0 50px; */
  /* margin: 0 0 0 auto; */
  @media (max-width: 800px) {
    /* width: 100%; */
  }
`;
