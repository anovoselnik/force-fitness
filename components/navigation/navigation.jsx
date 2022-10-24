import Link from "next/link";
import classes from "./navigation.module.css";
import classnames from "classnames";
import { useState } from "react";

function createNavItem(name, href, id) {
  return {
    name,
    href,
    id,
  };
}

const navItems = [
  // createNavItem("O nama", "teretane-bjelovar"),
  // createNavItem("Novosti", "novosti"),
  // createNavItem("Stanari", "stanari"),
  // createNavItem("Događaji", "dogadaji"),
  // createNavItem("Cijene", "cijene"),
  // createNavItem("Kontakt", "kontakt"),
  createNavItem("O nama", "", "about-us"),
  createNavItem("Naš tim", "", "team"),
  createNavItem("Cijene", "", "price-list"),
  createNavItem("Reference", "", "references"),
];

const SocialNetworks = () => (
  <>
    <a href="https://www.instagram.com/force.bjelovar/" target="blank">
      <div className={classes.socialImage}>
        <img src="./img/instagram.png" className="img-responsive" />
      </div>
    </a>
    <a href="https://www.facebook.com/forcefitnesscenar/" target="blank">
      <div className={classes.socialImage}>
        <img src="./img/facebook.png" className="img-responsive" />
      </div>
    </a>
  </>
);

export const Navigation = ({ activeElement }) => {
  const [activeSidebar, setActiveSidebar] = useState(false);

  const onNavClick = (id) => {
    if (id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    document.getElementById(id)?.scrollIntoView();
    if (activeSidebar) setActiveSidebar(false);
  };

  return (
    <>
      <nav className={classnames(classes.nav, classes.navStyle)}>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div
                className={classes.imgWrapper}
                onClick={() => onNavClick("top")}
              >
                <img src="./img/logo.png" className="img-responsive" />
              </div>
            </div>
            <div className="col text-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className={classnames(classes.navLink, {
                    [classes.active]: activeElement === item.name,
                  })}
                  onClick={() => onNavClick(item.id)}
                >
                  {item.name}
                </button>
                // <Link key={item.name} href={`/${item.href}`} passHref>
                //   <a
                //     className={classnames(classes.navLink, {
                //       [classes.active]: activeElement === item.name,
                //     })}
                //   >
                //     {item.name}
                //   </a>
                // </Link>
              ))}
            </div>
            <div className="col-2 text-right">
              <SocialNetworks />
            </div>
          </div>
        </div>
      </nav>
      <nav className={classnames(classes.navMobile, classes.navStyle)}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className={classes.hamburger}
                onClick={() => setActiveSidebar(true)}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="col">
              <div
                className={classes.mobileImgWrapper}
                onClick={() => onNavClick("top")}
              >
                <img src="./img/logo.png" className="img-responsive" />
              </div>
            </div>
            <div className="col">
              <SocialNetworks />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={classnames(classes.sideNav, {
          [classes.active]: !!activeSidebar,
        })}
      >
        <div className={classes.sidebar}>
          <button
            className={classes.closeButton}
            onClick={() => setActiveSidebar(false)}
          ></button>
          <div
            className={classes.sidebarImgWrapper}
            onClick={() => onNavClick("top")}
          >
            <img src="./img/logo.png" className="img-responsive" />
          </div>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  className={classes.navLink}
                  onClick={() => onNavClick(item.id)}
                >
                  {item.name}
                </button>
                {/* <Link href={`/${item.href}`} passHref>
                  <a className={classes.navLink}>{item.name}</a>
                </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
