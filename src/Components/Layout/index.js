import Header from "./Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layout;
