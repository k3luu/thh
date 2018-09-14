import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWalking,
  faCar,
  faMapSigns,
  faBinoculars
} from "@fortawesome/free-solid-svg-icons";
import config from "../../../data/SiteConfig";
import "./MainNav.css";

const NavContainer = styled.nav``;

const Logo = styled.img``;

const Navigation = styled.ul``;

const NavDropdown = styled.ul``;

const MenuButton = styled.div``;

class MainNav extends React.Component {
  constructor(p) {
    super(p);

    this.state = {
      atTheTop: true
    };

    this.handleScrollDetection = this.handleScrollDetection.bind(this);
    this.handleCurrTab = this.handleCurrTab.bind(this);
  }

  componentDidMount() {
    document.addEventListener(
      "scroll",
      this.handleScrollDetection.bind(this),
      true
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      "scroll",
      this.handleScrollDetection.bind(this),
      true
    );
  }

  handleScrollDetection() {
    this.setState({ atTheTop: window.scrollY < 100 });
  }

  handleCurrTab(link) {
    if (typeof window !== "undefined" && window.location)
      return window.location.pathname.includes(link) ? "selected" : "";

    return "";
  }

  render() {
    const { onClick } = this.props;
    const { atTheTop } = this.state;

    return (
      <NavContainer
        className="nav-container"
        style={
          atTheTop
            ? { background: "transparent", padding: "0 20px" }
            : {
                background: "#172121",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "0 25px"
              }
        }
      >
        <Link className="blog-logo" to="/">
          <Logo className="logo" src={config.siteLogo} alt={config.siteTitle} />
        </Link>

        <Navigation className="navigation">
          <li className={this.handleCurrTab("/no-matter-the-mountain")}>
            <Link to="/no-matter-the-mountain">Campaign</Link>
          </li>
          <li className={this.handleCurrTab("trail-")}>
            <Link to="/trail-guides">Trail</Link>
            <NavDropdown className="nav-dropdown">
              <li>
                <Link to="/trail-guides">
                  <FontAwesomeIcon icon={faMapSigns} />
                  <span>Guides</span>
                </Link>
              </li>
              <li>
                <Link to="/trail-finder">
                  <FontAwesomeIcon icon={faBinoculars} />
                  <span>Finder</span>
                </Link>
              </li>
            </NavDropdown>
          </li>
          <li className={this.handleCurrTab("-in")}>
            <Link to="/hike-in">Camp</Link>
            <NavDropdown className="nav-dropdown">
              <li>
                <Link to="/hike-in">
                  <FontAwesomeIcon icon={faWalking} />
                  <span>Hike-In</span>
                </Link>
              </li>
              <li>
                <Link to="/drive-in">
                  <FontAwesomeIcon icon={faCar} />
                  <span>Drive-In</span>
                </Link>
              </li>
            </NavDropdown>
          </li>
          <li className={this.handleCurrTab("/fundamentals")}>
            <Link to="/fundamentals">Fundamentals</Link>
          </li>
          <li className={this.handleCurrTab("/events")}>
            <Link to="/events">Events</Link>
          </li>
          <li className={this.handleCurrTab("/about")}>
            <Link to="/about">About</Link>
          </li>
        </Navigation>

        {config.siteNavigation && (
          <MenuButton className="menu-button icon-menu" onClick={onClick} />
        )}
      </NavContainer>
    );
  }
}

export default MainNav;
