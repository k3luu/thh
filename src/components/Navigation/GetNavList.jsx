// import FontIcon from "react-md/lib/FontIcons";
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
      // LeftIcon: <p>home</p>,
      component: Link,
      to: '/no-matter-the-mountain'
    },
    {
      divider: true
    },
    {
      primaryText: 'Trail Guides',
      // LeftIcon: <p>home</p>,
      component: Link,
      to: '/trail-guides'
    },
    {
      divider: true
    },
    {
      primaryText: 'Trail Finder',
      // LeftIcon: <p>home</p>,
      component: Link,
      to: '/trail-finder'
    },
    {
      divider: true
    },
    {
      primaryText: 'Events',
      // LeftIcon: <p>home</p>,
      component: Link,
      to: '/events'
    },

    {
      divider: true
    },
    {
      primaryText: 'Hiking Fundamentals',
      // LeftIcon: <p>home</p>,
      component: Link,
      to: '/hiking'
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
    // LeftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: '/about/'
  });
  return NavList;
}
export default GetNavList;
