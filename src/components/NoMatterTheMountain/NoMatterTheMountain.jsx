import React, { Component } from 'react';
import './NoMatterTheMountain.css';
import ambassadors from './ambassadors';

class NoMatterTheMountain extends Component {
  handleAmbassadorTitle(list) {
    let titles = '';

    list.map(item => {
      if (titles.length > 1) titles += ' | ';
      titles += item;
    });

    return titles;
  }

  handleAmbassadorsDisplay() {
    return ambassadors.map(p => (
      <div key={p.id}>
        <h2>{p.name}</h2>
        <h5>{this.handleAmbassadorTitle(p.title)}</h5>
        <p>{p.bio}</p>
        <p>
          <i className="fa fa-instagram" /> {p.instagram}
        </p>
      </div>
    ));
  }

  // Edit About component or pages/about.jsx to include your information.
  render() {
    return (
      <div className="about">
        <h1>No Matter The Mountain</h1>
        <p>
          Life throws so many obstacles at us every day, creating a harsh ascent, similar to climbing a mountain. How we
          overcome these "mountains" is what makes us who we are.
        </p>
        <h2>How Do You Conquer Your Mountain?</h2>
        <iframe
          width="650"
          height="450"
          src="https://www.youtube.com/embed/05ifiSTb6Fc"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <p>
          Share your story with us on Instagram! Nominate your friends, and tag @twohalfhitches and #NoMattertheMountain
        </p>

        <h2>Meet Our Campaign Ambassadors</h2>
        <p>Read up on our campaign ambassadors and how they conquer their own mountains!</p>

        {this.handleAmbassadorsDisplay()}
      </div>
    );
  }
}

export default NoMatterTheMountain;
