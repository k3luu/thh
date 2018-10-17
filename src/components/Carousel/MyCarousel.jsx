import React, { Component } from 'react';
import { Link } from 'react-scroll';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils';

import CarouselStepper from './CarouselStepper';
import './MyCarousel.css';

const EnhancedSwipeableViews = bindKeyboard(autoPlay(SwipeableViews));

const styles = {
  slide: {
    color: '#fff',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    background: 'transparent'
  }
};

class MyCarousel extends Component {
  constructor(p) {
    super(p);

    this.state = {
      carouselFullscreen: false,
      currIndex: 0
    };

    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.carouselFullscreen) {
      document.body.style.overflow = 'hidden';
      document.body.scroll = 'no';
    } else {
      document.body.style.overflow = 'initial';
      document.body.scroll = 'yes';
    }
  }

  toggleFullscreen() {
    this.setState({ carouselFullscreen: !this.state.carouselFullscreen });
  }

  handleChangeIndex(currIndex) {
    this.setState({ currIndex });
  }

  renderCarouselModal() {
    const { data } = this.props;
    const { carouselFullscreen } = this.state;

    if (carouselFullscreen) {
      return (
        <div className="mycarousel__overlay">
          <div className="mycarousel__modal">
            <EnhancedSwipeableViews>
              {data.map(photo => (
                <div key={photo} style={Object.assign({}, styles.slide)}>
                  <img className="carousel-img" src={photo} alt={photo} />
                </div>
              ))}
            </EnhancedSwipeableViews>
          </div>
          <Link to="myCarousel" spy smooth duration={0} offset={-100}>
            <i
              className="fa fa-compress carousel-icon__compress"
              id="carousel-fullscreen"
              onClick={this.toggleFullscreen}
              role="button"
            />
          </Link>
        </div>
      );
    }

    return null;
  }

  render() {
    const { data } = this.props;
    const { currIndex } = this.state;

    return (
      <div id="myCarousel" className="mycarousel">
        {/* <i
          className="fa fa-expand expand"
          id="carousel-fullscreen"
          onClick={this.toggleFullscreen}
          role="button"
        /> */}

        <EnhancedSwipeableViews
          resistance
          index={currIndex}
          onChangeIndex={this.handleChangeIndex}
        >
          {data.map(photo => (
            <div
              key={photo}
              className="carousel-img"
              style={{
                backgroundImage: `url(${photo})`
              }}
            />
          ))}
        </EnhancedSwipeableViews>

        <CarouselStepper
          dots={data.length}
          index={currIndex}
          onChangeIndex={this.handleChangeIndex}
        />

        {/* {this.renderCarouselModal()} */}
      </div>
    );
  }
}

export default MyCarousel;
