import React, { useState } from "react";
import styles from "./MainNavigation.module.css";
import MainHeader from "./MainHeader";
import Sidedrawer from "./SideDrawer";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Navlinks from "./Navlinks";
function MainNavigation() {
  const [drawerisOpen, setdrawerisOpen] = useState(false);
  const openDrawerHandler = () => {
    setdrawerisOpen(true);
  };
  const closeDrawerHandler = () => {
    setdrawerisOpen(false);
  };
  return (
    <div>
      <Sidedrawer show={drawerisOpen}>
        <button
          onClick={closeDrawerHandler}
          className={styles.main_navigation__close_btn}
        >
          <IoMdClose />
        </button>
        <nav className={styles.main_navigation__drawer_nav}>
          <Navlinks />
        </nav>
      </Sidedrawer>
      <MainHeader>
        <button
          className={styles.main_navigation__menu_btn}
          onClick={openDrawerHandler}
        >
          <CiMenuFries />
        </button>
        <nav className={styles.main_navigation__header_nav}>
          <Navlinks />
        </nav>
      </MainHeader>
    </div>
  );
}

export default MainNavigation;
