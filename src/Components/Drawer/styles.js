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
  background: #ffff;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  @media (max-width: 800px) {
    bottom: 0;
    right: 0;
    left: 0;
    top: auto;
    width: 100%;
    height: auto;
    z-index: 100000;
    flex-direction: row;
    justify-content: space-around;
  }
  section {
    position: relative;
    top: 120px;
    @media (max-width: 800px) {
      top: 0;
      display: flex;
    }
  }

  li {
    text-decoration: none;
    list-style: none;
    width: 100%;
    margin-bottom: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
    @media (max-width: 800px) {
      padding: 10px;
    }
    cursor: pointer;
    span {
      padding: 0 20px;
      color: #000000;
      font-weight: bold;
      font-size: 15px;
      @media (max-width: 421px) {
        font-size: 10px;
        padding: 0 10px;
      }
    }
    svg {
      width: 20px;
      height: 20px;
      @media (max-width: 421px) {
        width: 15px;
        height: 15px;
      }
    }
  }

  div {
    align-items: center;
    position: relative;
    bottom: 150px;
    padding: 10px;
    @media (max-width: 800px) {
      border-radius: 1px solid black;
      bottom: 0;
      padding: 0;
    }
  }
  .logoutSvg {
    fill: #ff6464;
    width: 20px;
    height: 20px;
  }
`;
