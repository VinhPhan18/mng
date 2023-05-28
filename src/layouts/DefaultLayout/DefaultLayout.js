import classNames from "classnames/bind";

import style from "./DefaultLayout.module.scss";
import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer/Footer";

function DefaultLayout({ children }) {
  const cx = classNames.bind(style);
  return (
    <div  className={cx("layouthome")}>
      <Header />
      <Footer />
      <div className={cx("wrapper")}>
        <div className={cx("content")}>{children}</div>
      </div>
      
    </div>
  );
}

export default DefaultLayout;