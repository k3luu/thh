const path = require('path');
const _ = require('lodash');
const fs = require('fs');
const webpackLodashPlugin = require('lodash-webpack-plugin');
const siteConfig = require('./data/SiteConfig');
const { createPaginationPages, createLinkedPages, prefixPathFormatter } = require('gatsby-pagination');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    } else if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const indexPage = path.resolve('src/templates/index.jsx');
    const postPage = path.resolve('src/templates/post.jsx');
    const tagPage = path.resolve('src/templates/tag.jsx');
    const categoryPage = path.resolve('src/templates/category.jsx');
    const authorPage = path.resolve('src/templates/author.jsx');
    const guidesPage = path.resolve('src/templates/guides.js');
    const fundamentalsPage = path.resolve('src/templates/fundamentals.js');

    if (!fs.existsSync(path.resolve(`content/${siteConfig.blogAuthorDir}/authors/`))) {
      reject("The 'authors' folder is missing within the 'blogAuthorDir' folder.");
    }

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }) {
              totalCount
              edges {
                node {
                  frontmatter {
                    title
                    tags
                    cover
                    date
                    category
                    author
                  }
                  fields {
                    slug
                  }
                  excerpt
                  timeToRead
                }
              }
            }
            trailPosts: allMarkdownRemark(
              limit: 1000
              filter: { fileAbsolutePath: { regex: "/(\\/content\\/trail-posts)/.*\\\\.md$/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              totalCount
              edges {
                node {
                  frontmatter {
                    title
                    tags
                    cover
                    date
                    category
                    author
                  }
                  fields {
                    slug
                  }
                  excerpt
                  timeToRead
                }
              }
            }
            fundamentalPosts: allMarkdownRemark(
              limit: 1000
              filter: { fileAbsolutePath: { regex: "/(\\/content\\/fundamentals)/.*\\\\.md$/" } }
              sort: { fields: [frontmatter___date_added], order: DESC }
            ) {
              totalCount
              edges {
                node {
                  frontmatter {
                    title
                    tags
                    cover
                    date
                    category
                    author
                    date_added
                  }
                  fields {
                    slug
                  }
                  excerpt
                  timeToRead
                }
              }
            }
          }
        `
      ).then(result => {
        console.log('RESULTS', result);

        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        // Creates Index page
        createPaginationPages({
          createPage,
          edges: result.data.allMarkdownRemark.edges,
          component: indexPage,
          limit: 4
        });

        // Creates Guides page
        createPaginationPages({
          createPage,
          edges: result.data.trailPosts.edges,
          component: guidesPage,
          limit: siteConfig.sitePaginationLimit,
          pathFormatter: prefixPathFormatter('/guides')
          // pathFormatter: path => `/guides/${path}`
        });

        // Creates Hiking Fundamentals page
        createPaginationPages({
          createPage,
          edges: result.data.fundamentalPosts.edges,
          component: fundamentalsPage,
          limit: siteConfig.sitePaginationLimit,
          pathFormatter: prefixPathFormatter('/fundamentals')
        });

        // Creates Posts - to edit the READ NEXT pages?
        createLinkedPages({
          createPage,
          edges: result.data.trailPosts.edges,
          component: postPage,
          edgeParser: edge => ({
            path: edge.node.fields.slug,
            context: {
              slug: edge.node.fields.slug,
              tag: edge.node.frontmatter.tags[0],
              tags: edge.node.frontmatter.tags
            }
          }),
          circular: true
        });

        createLinkedPages({
          createPage,
          edges: result.data.fundamentalPosts.edges,
          component: postPage,
          edgeParser: edge => ({
            path: edge.node.fields.slug,
            context: {
              slug: edge.node.fields.slug,
              tag: edge.node.frontmatter.tags[0],
              tags: edge.node.frontmatter.tags
            }
          }),
          circular: true
        });

        const tagSet = new Set();
        const tagMap = new Map();
        const categorySet = new Set();
        const authorSet = new Set();
        authorSet.add(siteConfig.blogAuthorId);

        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);

              const array = tagMap.has(tag) ? tagMap.get(tag) : [];
              array.push(edge);
              tagMap.set(tag, array);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }

          if (edge.node.frontmatter.author) {
            authorSet.add(edge.node.frontmatter.author);
          }
        });

        const tagFormatter = tag => route => `/tags/${_.kebabCase(tag)}/${route !== 1 ? route : ''}`;
        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          // Creates tag pages
          createPaginationPages({
            createPage,
            edges: tagMap.get(tag),
            component: tagPage,
            pathFormatter: tagFormatter(tag),
            limit: siteConfig.sitePaginationLimit,
            context: {
              tag
            }
          });
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category
            }
          });
        });

        const authorList = Array.from(authorSet);
        authorList.forEach(author => {
          createPage({
            path: `/author/${_.kebabCase(author)}/`,
            component: authorPage,
            context: {
              author
            }
          });
        });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null);
  }
};
