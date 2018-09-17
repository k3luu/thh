import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Instafeed from 'react-instafeed';
import { Image } from 'gestalt';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import FeaturedContent from './FeaturedContent';
import PostListing from '../PostListing/PostListing';
import SubscribeForm from '../Subscribe/SubscribeForm';
import sections from './sections';
import './Home.css';

const Container = styled.div`
  h4 {
    letter-spacing: 2px;
  }
`;

const ContentContainer = styled.div`
  margin: 2rem auto;
  padding: 0;
  max-width: 1500px;
  height: 100%;

  ${breakpoint('md')`
    margin: 4rem auto;
    padding: 0 10px;
  `};
`;

const RecentSection = styled.div`
  border-bottom: #d8d8d8 1px solid;

  ${breakpoint('md')`
    border-bottom: 0;
  `};

  .post-title,
  .post-excerpt {
    ${breakpoint('md')`
      padding: 0;
    `};
  }

  .post {
    border-bottom: 0;
    margin-bottom: 0;

    ${breakpoint('md')`
        // border-bottom: #d8d8d8 1px solid;
    `};

    &:after {
      content: unset;

      ${breakpoint('md')`
        // content: "";
      `};
    }
  }
`;

const RecentHeader = styled.div`
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.6px;
  line-height: 1.15em;
  text-rendering: geometricPrecision;
  text-transform: uppercase;

  ${breakpoint('md')`
    padding: 0;
  `};
`;

const BannerImage = styled.div`
  height: 100vh;
`;

const BannerInfoContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: start;
  align-items: center;

  ${breakpoint('md')`
  `};
`;

const BannerTextBox = styled.div`
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  padding: 30px;
  margin: 0;
  width: auto;
  max-width: 100%;
  height: auto;
  text-align: left;

  ${breakpoint('sm')`
    padding: 60px;
    max-width: 75%;
  `};

  ${breakpoint('md')`
    padding: 80px;
  `};
`;

const BannerHeading = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1.15em;
  margin: 0 0 0.4em;

  ${breakpoint('sm')`
    font-size: 4rem;
  `};

  ${breakpoint('md')`
    font-size: 5rem;
  `};
`;

const BannerDescription = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  p {
    letter-spacing: 1px;
    line-height: 1.5em;
    text-align: left;
    margin: 0;
  }

  ${breakpoint('sm')`
  `};

  ${breakpoint('md')`
    font-size: 1.5rem;
  `};
`;

const IGContainer = styled.div`
  margin: 4rem auto;

  ${breakpoint('md')`
  `};
`;

class Home extends Component {
  constructor(p) {
    super(p);

    this.state = {
      instaFeed: [],
      instaLoading: true,
      autoplay: true
    };
  }

  getPhotos() {
    return fetch(
      'https://api.instagram.com/v1/users/self/media/recent/?access_token='
    )
      .then(response => response.json())
      .then(json => {
        console.log('IG:', json.data);
      });
  }

  handleDescription(item) {
    if (item.description) return <p>{item.description}</p>;

    switch (item.name) {
      case 'Campaign':
        return (
          <p>
            Share your story with us on Instagram! Nominate your friends, and
            tag {/*<a*/}
            {/*href="https://www.instagram.com/twohalfhitches"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
            {/*className="banner-link desc"*/}
            {/*>*/}
            @twohalfhitches and #NoMattertheMountain
            {/*</a>{' '}*/}
            {/*<a*/}
            {/*href="https://www.instagram.com/explore/tags/nomatterthemountain/"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
            {/*className="banner-link desc"*/}
            {/*>*/}
            {/*</a>*/}
          </p>
        );

      default:
        return '';
    }
  }

  renderCategories() {
    const { config } = this.props;
    return sections.map(p => (
      <div key={p.id}>
        <Link to={p.to} className="banner-link">
          <BannerImage>
            <Image
              alt={p.name}
              naturalHeight={1}
              naturalWidth={1}
              fit="cover"
              src={config[p.photo_src]}
            >
              <BannerInfoContainer>
                <BannerTextBox>
                  <BannerHeading>{p.name}</BannerHeading>
                  <BannerDescription>
                    {this.handleDescription(p)}
                  </BannerDescription>
                </BannerTextBox>
              </BannerInfoContainer>
            </Image>
          </BannerImage>
        </Link>
      </div>
    ));
  }

  render() {
    const template =
      '<a href="{{link}}" target="_blank" class="instafeed__item">' +
      '<div class="instafeed__item__background" style="background-image: url({{image}})">' +
      '</div>' +
      '<div class="instafeed__item__overlay">' +
      '<div class="instafeed__item__overlay--inner">' +
      '<p class="instafeed__item__caption">{{model.short_caption}}</p>' +
      '<p class="instafeed__item__location">{{location}}</p>' +
      '</div>' +
      '</div>' +
      '</a>';

    return (
      <Container>
        <ContentContainer>
          {/*{process.env.NODE_ENV === 'development' && (*/}
          {/*<div className="instafeed" id="instafeed">*/}
          {/*<Instafeed*/}
          {/*limit="10"*/}
          {/*ref="instafeed"*/}
          {/*resolution="standard_resolution"*/}
          {/*sortBy="most-recent"*/}
          {/*target="instafeed"*/}
          {/*template={template}*/}
          {/*userId="self"*/}
          {/*clientId="e733ec859fb74aa2b2961cefd57ea767"*/}
          {/*accessToken="3078281633.e733ec8.ce842c4c91074ffb82ddb2a7fb0adf8a"*/}
          {/*/>*/}
          {/*</div>*/}
          {/*)}*/}

          <FeaturedContent />

          <RecentSection>
            <RecentHeader className="home-subtitle">
              Recent Content
            </RecentHeader>
            <PostListing postEdges={this.props.nodes} columns={3} />
          </RecentSection>
        </ContentContainer>

        <Carousel
          key="homepage"
          emulateTouch
          useKeyboardArrows
          showArrows
          showThumbs={false}
          showStatus={false}
          autoPlay={this.state.autoplay}
          interval={4000}
          infiniteLoop
        >
          {this.renderCategories()}
        </Carousel>

        {process.env.NODE_ENV === 'production' && (
          <IGContainer>
            <div className="elfsight-app-b078d77e-2973-42a5-980d-a24ace8fee65" />
          </IGContainer>
        )}

        <div className="home-subscription">
          <SubscribeForm />
        </div>
      </Container>
    );
  }
}

export default Home;
