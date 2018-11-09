import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import './MyCarousel.css';

const styles = () => ({
  icon: {
    margin: 5,
    padding: 3,
    fontSize: 10,
    borderRadius: '100%',
    color: '#fff',
    cursor: 'pointer'
  }
});

const renderThumbs = props => {
  const thumbs = [];

  for (let i = 0; i < props.data.length; i++) {
    thumbs.push(
      <div
        key={i}
        id={i === props.index ? 'stepperCurrThumb' : ''}
        className={
          i === props.index ? 'stepper__thumb active' : 'stepper__thumb'
        }
        style={{ backgroundImage: `url("${props.data[i]}")` }}
        onClick={() => props.onChangeIndex(i)}
      />
    );
  }
  return thumbs;
};

const scrollContainerLeft = () => {
  const stepperThumbContainer = document.getElementById(
    'stepperThumbContainer'
  );

  stepperThumbContainer.scrollLeft -= 200;
};

const scrollContainerRight = () => {
  const stepperThumbContainer = document.getElementById(
    'stepperThumbContainer'
  );

  stepperThumbContainer.scrollLeft += 200;
};

const CarouselThumbnails = props => (
  <div className="stepper__thumbnails">
    <div id="stepperThumbContainer" className="stepper__thumb-container">
      {renderThumbs(props)}
    </div>
    <div className="stepper__thumb-arrow-container">
      <div className="stepper__thumb-arrow-left">
        <IconButton
          variant="fab"
          mini
          aria-label="left-arrow"
          onClick={scrollContainerLeft}
          style={{
            height: 20,
            width: 20,
            padding: 5
          }}
        >
          <ChevronLeft />
        </IconButton>
      </div>
      <div className="stepper__thumb-arrow-right">
        <IconButton
          variant="fab"
          mini
          aria-label="right-arrow"
          onClick={scrollContainerRight}
          style={{
            height: 20,
            width: 20,
            padding: 5
          }}
        >
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(CarouselThumbnails);
