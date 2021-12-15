import styled from "styled-components";

export const DrawerWrapper = styled.div`
  position: absolute;
  width: 220px;
  #header .pro-sidebar {
    height: 100vh;
  }
  #header .closemenu {
    color: #000;
    position: absolute;
    right: 0;
    z-index: 9999;
    line-height: 20px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 22px;
    top: 55px;
    cursor: pointer;
  }
  #header .pro-sidebar {
    width: 100%;
    min-width: 100%;
  }
  #header .pro-sidebar.collapsed {
    width: 80px;
    min-width: 80px;
  }
  #header .pro-sidebar-inner {
    background-color: white;
    box-shadow: 0.5px 0.866px 2px 0px rgba(0, 0, 0, 0.15);
  }
  #header .pro-sidebar-inner .pro-sidebar-layout {
    overflow-y: hidden;
  }
  #header .pro-sidebar-inner .pro-sidebar-layout .logotext p {
    font-size: 20px;
    padding: 0 20px;
    color: #000;
    font-weight: bold;
  }
  #header .pro-sidebar-inner .pro-sidebar-layout ul {
    padding: 0 5px;
  }
  #header .pro-sidebar-inner .pro-sidebar-layout ul .pro-inner-item {
    color: #000;
    margin: 10px 0px;
    font-weight: bold;
  }
  #header
    .pro-sidebar-inner
    .pro-sidebar-layout
    ul
    .pro-inner-item
    .pro-icon-wrapper {
    background-color: #fbf4cd;
    color: #000;
    border-radius: 3px;
  }
  #header
    .pro-sidebar-inner
    .pro-sidebar-layout
    ul
    .pro-inner-item
    .pro-icon-wrapper
    .pro-item-content {
    color: #000;
  }
  #header .pro-sidebar-inner .pro-sidebar-layout .active {
    background-image: linear-gradient(0deg, #fece00 0%, #ffe172 100%);
  }
  #header .logo {
    padding: 20px;
  }

  @media only screen and (max-width: 720px) {
    html {
      overflow: hidden;
    }
  }
`;
