module.exports = {
  blogPostDir: 'trail-posts', // The name of directory that contains your posts.
  fundamentalsDir: 'fundamentals',
  blogAuthorDir: 'sample-authors', // The name of directory that contains your 'authors' folder.
  blogAuthorId: 'casper', // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: 'Two Half-Hitches', // Site title.
  siteTitleAlt: 'Two Half Hitches', // Alternative site title for SEO.
  siteLogo: '/logos/logo-48.png', // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteLogoName: '/logos/logo.png', // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: 'http://www.twohalfhitches.com/', // Domain of your website without pathPrefix.
  pathPrefix: '/thh', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: 'No Matter the Mountain', // Website description used for RSS feeds/meta description tag.
  siteCover:
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/covers/HOMEPAGE.jpg', // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssAuthor: 'Casper User', // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: 'UA-120716989-1', // GA tracking ID.
  disqusShortname: 'twohalfhitches', // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    'https://www.youtube.com/channel/UCDMdw-H9j9H5tlQy3jUv5rQ',
    'https://www.facebook.com/twohalfhitches/?ref=bookmarks',
    'https://www.instagram.com/twohalfhitches/',
    'https://twitter.com/twohalfhitches'
  ],
  postDefaultCategoryID: 'Trails', // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: 'Youtube',
      url: 'https://www.youtube.com/channel/UCDMdw-H9j9H5tlQy3jUv5rQ',
      iconClassName: 'fa fa-youtube' // Disabled, see Navigation.jsx
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/twohalfhitches/?ref=bookmarks',
      iconClassName: 'fa fa-facebook' // Disabled, see Navigation.jsx
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/twohalfhitches/',
      iconClassName: 'fa fa-instagram' // Disabled, see Navigation.jsx
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/twohalfhitches',
      iconClassName: 'fa fa-twitter' // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: 'Two Half-Hitches' // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  aboutCover:
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/covers/ABOUT.jpg',
  contactCover:
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/covers/CONTACT.jpg',
  campaignCover:
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/covers/CAMPAIGN.jpg',
  fundamentalsCover:
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/covers/FUNDAMENTALS+B.jpg',
  guideCover:
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/covers/GUIDES.jpg',
  finderCover:
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/covers/FINDER.jpg',
  eventCover:
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/covers/EVENTS.jpg',
  hikeInCover:
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/covers/CAMP-HIKE.jpg',
  driveInCover:
    'https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/covers/CAMP-DRIVE.jpg',
  themeColor: '#172121', // Color: $outer-space. Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
  breakpoints: {
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
  // promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
