import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import config from "../../../data/SiteConfig";
import MenuButton from "../../components/MenuButton/MenuButton";
import "./MainNav.css";

const NavContainer = styled.nav`
  border: none;
  background: #172121;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 60px;
  width: 100%;
  z-index: 3;
  transition: 0.3s ease-out;

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
    box-sizing: border-box;
  }

  li:hover {
    cursor: pointer;
  }

  li:hover > ul {
    transform: scale(1);
    transition: 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform-origin: right top;
    visibility: visible;
  }

  a {
    font-weight: 400;
  }
`;

const Logo = styled.img`
  box-sizing: border-box;
  display: block;
  height: 40px;
  width: 40px;
`;

const Navigation = styled.ul`
  display: none;
  height: 100%;

  ${breakpoint("sm")`
      display: flex;
  `};

  > li {
    box-sizing: border-box;
    display: block;
    font-size: 16px;
    line-height: 40px;
    margin: 0;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;

    &:hover > a,
    &.selected > a {
      border-bottom: 3px solid #fff;
      transition: all 0.2s;
    }

    > a {
      color: #fff;
      padding: 5px 0;
      margin: 0 15px;
      vertical-align: text-top;
      letter-spacing: 0.4px;
      font-size: 14px;
    }
  }
`;

const NavDropdown = styled.ul`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 0;
  min-width: 160px;
  margin-top: 0.9rem;
  padding: 0;
  transform: scale(1, 0);
  transition: all 0.2s ease;
  visibility: hidden;
  z-index: 4;

  &:hover {
    transform: scale(1);
    transition: 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform-origin: right top;
    visibility: visible;
  }

  > li {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    clear: both;
    width: 100%;

    > a {
      color: #000;
      display: block;
      padding: 12px 16px;
      text-decoration: none;
      text-transform: capitalize;
      font-weight: unset;

      &:hover {
        background: #eee;
      }
    }
  }
`;

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

  handleScrollDetection() {
    this.setState({ atTheTop: window.scrollY === 0 });
  }

  handleCurrTab(link) {
    if (typeof window !== "undefined" && window.location)
      return window.location.pathname.includes(link) ? "selected" : "";

    return "";
  }

  render() {
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
                padding: "0 30px"
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
          <li className={this.handleCurrTab("trail")}>
            <Link to="/trail-guides">Trail</Link>
            <NavDropdown className="nav-dropdown">
              <li>
                <Link to="/trail-guides">Guides</Link>
              </li>
              <li>
                <Link to="/trail-finder">Finder</Link>
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
          <li className={this.handleCurrTab("/contact")}>
            <Link to="/contact">Contact</Link>
          </li>
        </Navigation>

        <MenuButton
          navigation={config.siteNavigation}
          onClick={this.props.onClick}
        />
      </NavContainer>
    );
  }
}

export default MainNav;
