import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PanoramaFishEye } from '@material-ui/icons';
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

const renderIcons = props => {
  const dots = [];

  for (let i = 0; i < props.dots; i++) {
    dots.push(
      <PanoramaFishEye
        key={i}
        className={props.classes.icon}
        style={
          props.index === i
            ? { backgroundColor: '#f56700' }
            : { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
        }
        onClick={() => props.onChangeIndex(i)}
      />
    );
  }
  return dots;
};

const CarouselStepper = props => (
  <div className="stepper__container">
    <div className="stepper__icon-container">{renderIcons(props)}</div>
  </div>
);

export default withStyles(styles)(CarouselStepper);
