import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Instafeed from 'react-instafeed';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils';

import CarouselStepper from '../Carousel/CarouselStepper';
import FeaturedContent from './FeaturedContent';
import PostListing from '../PostListing/PostListing';
import SubscribeForm from '../Subscribe/SubscribeForm';
import sections from './sections';
import './Home.css';

const AutoPlaySwipeableViews = bindKeyboard(autoPlay(SwipeableViews));

const Container = styled.div``;

const ContentContainer = styled.div``;

const RecentSection = styled.div``;

const RecentHeader = styled.div``;

const BannerImage = styled.div``;

const BannerInfoContainer = styled.div``;

const BannerTextBox = styled.div``;

const BannerHeading = styled.div``;

const BannerDescription = styled.div``;

const IGContainer = styled.div``;

class Home extends Component {
  constructor(p) {
    super(p);

    this.state = {
      instaFeed: [],
      instaLoading: true,
      currIndex: 0
    };

    this.handleChangeIndex = this.handleChangeIndex.bind(this);
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
            {/*className="home-banner__link desc"*/}
            {/*>*/}
            @twohalfhitches and #NoMattertheMountain
            {/*</a>{' '}*/}
            {/*<a*/}
            {/*href="https://www.instagram.com/explore/tags/nomatterthemountain/"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
            {/*className="home-banner__link desc"*/}
            {/*>*/}
            {/*</a>*/}
          </p>
        );

      default:
        return '';
    }
  }

  handleChangeIndex(currIndex) {
    this.setState({ currIndex });
  }

  renderCategories() {
    const { config } = this.props;
    return sections.map(p => (
      <div key={p.id}>
        <Link to={p.to} className="home-banner__link">
          <BannerImage
            className="home-banner__image"
            style={{ backgroundImage: `url("${config[p.photo_src]}")` }}
          >
            <BannerInfoContainer className="home-banner__info-container">
              <BannerTextBox className="home-banner__textbox">
                <BannerHeading className="home-banner__heading">
                  {p.name}
                </BannerHeading>
                <BannerDescription className="home-banner__description">
                  {this.handleDescription(p)}
                </BannerDescription>
              </BannerTextBox>
            </BannerInfoContainer>
          </BannerImage>
        </Link>
      </div>
    ));
  }

  render() {
    const { currIndex } = this.state;

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
      <Container className="home-container">
        <ContentContainer className="home-content__container">
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

          <RecentSection className="recent-section">
            <RecentHeader className="home-subtitle recent-header">
              Recent Content
            </RecentHeader>
            <PostListing postEdges={this.props.nodes} columns={3} />
          </RecentSection>
        </ContentContainer>

        <div style={{ position: 'relative' }}>
          <AutoPlaySwipeableViews
            index={currIndex}
            onChangeIndex={this.handleChangeIndex}
          >
            {this.renderCategories()}
          </AutoPlaySwipeableViews>
          <CarouselStepper
            dots={sections.length}
            index={currIndex}
            onChangeIndex={this.handleChangeIndex}
          />
        </div>

        {process.env.NODE_ENV === 'production' && (
          <IGContainer className="ig-container">
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
