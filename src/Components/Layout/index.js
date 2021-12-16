import { Styles } from "./styles";

import Header from "../../Components/Header";
import Drawer from "../../Components/Drawer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Drawer />
      <Styles className="App">
        <section className="layout">{children}</section>
      </Styles>
    </div>
  );
};

export default Layout;
