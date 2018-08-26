import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Dialog from '@material-ui/core/Dialog';
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

    selectedPhotoId = 0;

    this.state = {
      carouselFullscreen: false
    };

    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.updatePhotoIndex = this.updatePhotoIndex.bind(this);
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

  updatePhotoIndex(i) {
    selectedPhotoId = i;
  }

  renderCarouselModal() {
    const { data } = this.props;
    const { carouselFullscreen } = this.state;

    // if (carouselFullscreen) {
    //   return (
    //     <Dialog open={carouselFullscreen} onClose={this.toggleFullscreen}>
    //       {/*<div className="mycarousel__modal">*/}
    //       <Carousel
    //         key="modal"
    //         emulateTouch
    //         useKeyboardArrows
    //         dynamicHeight
    //         showIndicators={false}
    //         selectedItem={selectedPhotoId}
    //         onClickThumb={(i, obj) => this.updatePhotoIndex(i, obj)}
    //         onChange={(i, obj) => this.updatePhotoIndex(i, obj)}
    //       >
    //         {data.map(photo => (
    //           <div key={photo} style={Object.assign({}, styles.slide)}>
    //             <img className="carousel-img" src={photo} alt={photo} />
    //           </div>
    //         ))}
    //       </Carousel>
    //       {/*</div>*/}
    //       <Link to="myCarousel" spy smooth duration={250} offset={-100}>
    //         <i
    //           className="fa fa-compress carousel-icon__compress"
    //           id="carousel-fullscreen"
    //           onClick={this.toggleFullscreen}
    //           role="button"
    //         />
    //       </Link>
    //     </Dialog>
    //   );
    // }

    if (carouselFullscreen) {
      return (
        <div className="mycarousel__overlay" onClick={this.toggleFullscreen}>
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

    return (
      <div id="myCarousel" className="mycarousel">
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
