import React, { Component } from 'react';
import { Link } from 'react-scroll';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import Button from '@material-ui/core/Button';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

import CarouselStepper from './CarouselStepper';
import CarouselThumbnails from './CarouselThumbnails';
import './MyCarousel.css';

const EnhancedSwipeableViews = bindKeyboard(SwipeableViews);

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
    this.decrementCarouselIndex = this.decrementCarouselIndex.bind(this);
    this.incrementCarouselIndex = this.incrementCarouselIndex.bind(this);
    this.centerThumbnail = this.centerThumbnail.bind(this);
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

  centerThumbnail() {
    const { currIndex } = this.state;
    const { data } = this.props;

    const stepperThumbContainer = document.getElementById(
      'stepperThumbContainer'
    );
    const stepperCurrThumb = document.getElementById('stepperCurrThumb');

    const containerWidth = stepperThumbContainer.clientWidth;
    const targetWidth = stepperCurrThumb.clientWidth + 10;

    if (stepperThumbContainer) {
      const leftScreenOffset = (containerWidth - targetWidth) / 2;
      const leftSiblingOffset = targetWidth * this.state.currIndex;
      const scrollValue = leftSiblingOffset - leftScreenOffset;

      stepperThumbContainer.scrollLeft = Math.max(0, scrollValue);
    }
  }

  toggleFullscreen() {
    this.setState({ carouselFullscreen: !this.state.carouselFullscreen });
  }

  handleChangeIndex(currIndex) {
    this.setState({ currIndex });
  }

  decrementCarouselIndex() {
    let newIndex = this.state.currIndex - 1;

    if (newIndex < 0) {
      newIndex = this.props.data.length - 1;
    }

    this.setState({ currIndex: newIndex });
    this.centerThumbnail();
  }

  incrementCarouselIndex() {
    let newIndex = this.state.currIndex + 1;

    if (newIndex > this.props.data.length - 1) {
      newIndex = 0;
    }

    this.setState({ currIndex: newIndex });
    this.centerThumbnail();
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
    const { data, showStatus, showArrows, showThumbnails } = this.props;
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

        {showStatus && (
          <div className="mycarousel__status">{`${currIndex + 1} of ${
            data.length
          }`}</div>
        )}

        {showArrows && (
          <div className="mycarousel__arrow-container">
            <div className="mycarousel__arrow-left">
              <Button
                variant="fab"
                mini
                aria-label="left-arrow"
                onClick={this.decrementCarouselIndex}
              >
                <ChevronLeft />
              </Button>
            </div>
            <div className="mycarousel__arrow-right">
              <Button
                variant="fab"
                mini
                aria-label="right-arrow"
                onClick={this.incrementCarouselIndex}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        )}

        {showThumbnails ? (
          <CarouselThumbnails
            data={data}
            index={currIndex}
            onChangeIndex={this.handleChangeIndex}
          />
        ) : (
          <CarouselStepper
            dots={data.length}
            index={currIndex}
            onChangeIndex={this.handleChangeIndex}
          />
        )}

        {/* {this.renderCarouselModal()} */}
      </div>
    );
  }
}

export default MyCarousel;
