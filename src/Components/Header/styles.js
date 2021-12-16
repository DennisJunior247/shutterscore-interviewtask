import styled from "styled-components";

export const HeaderStyles = styled.menu`
  height: 80px;
  /* padding: 0 5%; */
  width: 100%;
  position: fixed;
  background: #ffff;
  z-index: 2;
  right: 0;
  left: 0;
  top: 0;
  border: 1px solid red;
  @media (max-width: 800px) {
    /* width: 100%; */
  }
`;
