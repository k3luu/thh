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
      primaryText: 'Blog',
      // LeftIcon: <p>home</p>,
      component: Link,
      to: '/blog'
    },
    {
      divider: true
    },
    {
      primaryText: 'Trail Finder',
      // LeftIcon: <p>home</p>,
      component: Link,
      to: '/trails'
    },
    {
      divider: true
    },
    {
      primaryText: 'Fundamentals',
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
