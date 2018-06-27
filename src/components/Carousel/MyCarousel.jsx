import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const styles = {
  slide: {
    color: '#fff',
    overflow: 'hidden'
  }
};

class MyCarousel extends Component {
  render() {
    const { data } = this.props;
    return (
      <Carousel emulateTouch useKeyboardArrows dynamicHeight>
        {data.map(photo => (
          <div key={photo} style={Object.assign({}, styles.slide)}>
            <img className="carousel-img" src={photo} alt={photo} />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default MyCarousel;
