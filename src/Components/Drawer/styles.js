import styled from "styled-components";

export const DrawerWrapper = styled.div`
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  z-index: 10;
  overflow: hidden;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  section {
    /* border: 1px solid red; */
    width: 100%;
    position: relative;
    top: 120px;
  }

  li {
    text-decoration: none;
    list-style: none;
    /* border: 1px solid green; */
    width: 100%;
    margin-bottom: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
    span {
      padding: 0 20px;
      color: #000000;
      font-weight: bold;
      font-size: 15px;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }

  div {
    /* border: 1px solid black; */
    align-items: center;
    width: 100%;
    position: relative;
    bottom: 150px;
    padding: 10px;
  }
`;
