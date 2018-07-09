import Link from 'gatsby-link';

function GetNavList(config) {
  const NavList = [
    {
      primaryText: 'Home',
      // LeftIcon: <p>home</p>,
      component: Link,
      to: '/'
    },
    {
      divider: true
    },
    {
      primaryText: 'Campaign',
      component: Link,
      to: '/no-matter-the-mountain'
    },
    {
      divider: true
    },
    {
      primaryText: 'Trail',
      subHeader: true,
      component: Link,
      to: '/guides'
    },
    {
      primaryText: 'Guides',
      component: Link,
      subNav: true,
      to: '/guides'
    },
    {
      divider: true
    },
    {
      primaryText: 'Finder',
      component: Link,
      subNav: true,
      to: '/trail-finder'
    },
    {
      divider: true
    },
    {
      primaryText: 'Fundamentals',
      component: Link,
      to: '/fundamentals'
    },
    {
      divider: true
    },
    {
      primaryText: 'Events',
      component: Link,
      to: '/events'
    },
    {
      divider: true
    }
  ];

  // if (config.userLinks) {
  //   config.userLinks.forEach(link => {
  //     NavList.push({
  //       primaryText: link.label,
  //       // LeftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
  //       component: "a",
  //       href: link.url
  //     });
  //   });
  // }

  NavList.push({ divider: true });

  NavList.push({
    primaryText: 'About',
    component: Link,
    to: '/about'
  });

  NavList.push({
    primaryText: 'Contact',
    component: Link,
    to: '/contact'
  });

  return NavList;
}

export default GetNavList;
