import React, { Component, createElement, isValidElement } from 'react';
import GetNavList from './GetNavList';
import './Navigation.css';
import SubscribeButton from '../Subscribe/SubscribeForm';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const Divider = () => null;

const Subheader = props => {
  const { primaryText } = props;
  return (
    <li className="subheader" role="presentation">
      {primaryText}
    </li>
  );
};

const SubNav = props => {
  const { primaryText, component, ...remainingProps } = props;
  return (
    <li className="nav-opened subnav" role="presentation">
      {createElement(component, remainingProps, primaryText)}
    </li>
  );
};

const ListItem = props => {
  const { primaryText, component, ...remainingProps } = props;
  return (
    <li className="nav-opened" role="presentation">
      {createElement(component, remainingProps, primaryText)}
    </li>
  );
};

const mapToListParts = (item, index) => {
  if (typeof item === 'string' || typeof item === 'number') {
    return createElement(ListItem, { key: item, primaryText: item });
  } else if (isValidElement(item)) {
    return item;
  }

  const { divider, subHeader, subNav, nestedItems, ...remainingProps } = item;
  let component;
  if (divider) {
    component = Divider;
  } else if (subHeader) {
    component = Subheader;
  } else if (subNav) {
    component = SubNav;
  } else {
    component = ListItem;
  }

  const props = { ...remainingProps, key: item.key || index };
  if (nestedItems) {
    props.nestedItems = nestedItems.map(mapToListParts);
  }

  return createElement(component, props);
};

class Navigation extends Component {
  render() {
    const { config, onClose } = this.props;
    const navItems = GetNavList(config);
    return (
      <div>
        <div className="nav">
          <h3 className="nav-title">Menu</h3>
          <a className="nav-close" onClick={onClose}>
            <span className="hidden">Close</span>
          </a>
          <ul>{navItems.map(mapToListParts)}</ul>
          <SocialMediaIcons urls={config.siteSocialUrls} color="currentColor" />
          {/*<SubscribeButton url={config.siteRss} />*/}
        </div>
        <span className="nav-cover" />
      </div>
    );
  }
}

export default Navigation;
