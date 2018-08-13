import React, { Component } from 'react';
import { Box, Image } from 'gestalt';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ambassadors from './ambassadors/ambassadors';
import './NoMatterTheMountain.css';

class NoMatterTheMountain extends Component {
  handleAmbassadorTitle(list) {
    let titles = '';

    list.map(item => {
      if (titles.length > 1) titles += ' | ';
      titles += item;
    });

    return titles;
  }

  renderAmbassadors() {
    return ambassadors.map(p => (
      <div key={p.id} className="ambassador-container">
        {/*<Box color="darkGray" height="500px" width={500} minWidth={500}>*/}
        {/*<Image*/}
        {/*alt={p.name}*/}
        {/*color="darkGray"*/}
        {/*naturalHeight={1}*/}
        {/*naturalWidth={1}*/}
        {/*fit="cover"*/}
        {/*src={p.photo_src}*/}
        {/*/>*/}
        {/*</Box>*/}
        <div className="ambassador-image">
          <img src={p.photo_src} alt={p.name} />
        </div>

        <div className="ambassador-testimonial">
          <div className="ambassador-bio">&quot;{p.bio}&quot;</div>

          {/* Ambassador info: [name, title, IG] & [image]*/}
          <div className="ambassador-info">
            <div>
              <h6 className="ambassador-name">{p.name}</h6>
              <p className="ambassador-title">
                {this.handleAmbassadorTitle(p.title)}
              </p>
              <a
                className="ambassador-social"
                href={`https://www.instagram.com/${p.instagram}`}
                target="_blank"
              >
                <i className="fa fa-instagram" /> {p.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="campaign">
        <div className="main-content">
          <h1>No Matter The Mountain</h1>
          <p>
            Life throws so many obstacles at us every day, creating a harsh
            ascent, similar to climbing a mountain. How we overcome these
            "mountains" is what makes us who we are.
          </p>
          <h2>How Do You Conquer Your Mountain?</h2>
          <iframe
            title="thh-campaign"
            src="https://www.youtube.com/embed/05ifiSTb6Fc"
            height="500"
            frameBorder="0"
            allowFullScreen
          />
          <p>
            Share your story with us on Instagram! Nominate your friends, and
            tag{' '}
            <a
              href="https://www.instagram.com/twohalfhitches"
              target="_blank"
              rel="noopener noreferrer"
            >
              @twohalfhitches
            </a>{' '}
            and{' '}
            <a
              href="https://www.instagram.com/explore/tags/nomatterthemountain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #NoMattertheMountain
            </a>.
          </p>

          <h2>Meet Our Campaign Ambassadors</h2>
          <p>
            Read up on our campaign ambassadors and how they conquer their own
            mountains!
          </p>
        </div>

        <Carousel
          key="blog-post"
          emulateTouch
          useKeyboardArrows
          showArrows
          centerMode
          centerSlidePercentage={
            typeof window !== 'undefined' &&
            window.navigator &&
            /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)
              ? 100
              : 80
          }
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          className="presentation-mode"
        >
          {this.renderAmbassadors()}
        </Carousel>
      </div>
    );
  }
}

export default NoMatterTheMountain;
