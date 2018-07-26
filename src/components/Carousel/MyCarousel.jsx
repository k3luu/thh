import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MyCarousel.css';

const styles = {
  slide: {
    color: '#fff',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    background: 'transparent'
  }
};

let selectedPhotoId = 0;

class MyCarousel extends Component {
  constructor(p) {
    super(p);

    this.state = {
      carouselFullscreen: false
    };

    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.updatePhotoIndex = this.updatePhotoIndex.bind(this);
  }

  componentWillMount() {
    selectedPhotoId = 0;
  }

  toggleFullscreen() {
    this.setState({ carouselFullscreen: !this.state.carouselFullscreen });
  }

  updatePhotoIndex(i, obj) {
    selectedPhotoId = i;
  }

  renderCarouselModal() {
    const { data } = this.props;
    const { carouselFullscreen } = this.state;

    if (carouselFullscreen) {
      return (
        <div className="mycarousel__overlay">
          <div className="mycarousel__modal">
            <Carousel
              key="modal"
              emulateTouch
              useKeyboardArrows
              dynamicHeight
              showIndicators={false}
              selectedItem={selectedPhotoId}
              onClickThumb={(i, obj) => this.updatePhotoIndex(i, obj)}
              onChange={(i, obj) => this.updatePhotoIndex(i, obj)}
            >
              {data.map(photo => (
                <div key={photo} style={Object.assign({}, styles.slide)}>
                  <img className="carousel-img" src={photo} alt={photo} />
                </div>
              ))}
            </Carousel>
          </div>
          <i
            className="fa fa-compress expand"
            id="carousel-fullscreen"
            onClick={this.toggleFullscreen}
            role="button"
          />
        </div>
      );
    }
  }

  render() {
    const { data } = this.props;

    return (
      <div className="mycarousel">
        <Carousel
          key="blog-post"
          emulateTouch
          useKeyboardArrows
          dynamicHeight
          showIndicators={false}
          selectedItem={selectedPhotoId}
          onClickThumb={(i, obj) => this.updatePhotoIndex(i, obj)}
          onChange={(i, obj) => this.updatePhotoIndex(i, obj)}
        >
          {data.map(photo => (
            <div key={photo} style={Object.assign({}, styles.slide)}>
              <img className="carousel-img" src={photo} alt={photo} />
            </div>
          ))}
        </Carousel>
        <i
          className="fa fa-expand expand"
          id="carousel-fullscreen"
          onClick={this.toggleFullscreen}
          role="button"
        />

        {this.renderCarouselModal()}
      </div>
    );
  }
}

export default MyCarousel;
