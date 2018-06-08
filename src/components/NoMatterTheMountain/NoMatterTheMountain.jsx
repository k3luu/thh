import React, { Component } from 'react';
import { Box, Image } from 'gestalt';
import './NoMatterTheMountain.css';
import ambassadors from './ambassadors/ambassadors';

class NoMatterTheMountain extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this._handleChangeInput.bind(this);
    this.handlePause = this._handlePause.bind(this);
    this.handlePlay = this._handlePlay.bind(this);
    this.handleSubmitInput = this._handleSubmitInput.bind(this);
    this.handleToggleMute = this._handleToggleMute.bind(this);
    this.handleVolumeChange = this._handleVolumeChange.bind(this);
    this.state = {
      input: 'http://media.w3.org/2010/05/bunny/movie.mp4',
      playing: false,
      src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
      volume: 1
    };
  }

  _handleChangeInput({ value }) {
    this.setState({ input: value });
  }

  _handleToggleMute() {
    this.setState({ volume: this.state.volume === 0 ? 1 : 0 });
  }

  _handleVolumeChange({ volume }) {
    this.setState({ volume });
  }

  _handleSubmitInput() {
    this.setState({ src: this.state.input });
  }

  _handlePlay() {
    this.setState({ playing: true });
  }

  _handlePause() {
    this.setState({ playing: false });
  }

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
      <div key={p.id} className="ambassador-container">
        <p className="ambassador-bio">{p.bio}</p>

        {/* Ambassador info: [name, title, IG] & [image]*/}
        <Box display="flex" justifyContent="end" alignItems="end" marginTop={4} marginLeft={4}>
          <Box display="flex" direction="column" justifyContent="end" alignItems="end" marginRight={4}>
            <h6 className="ambassador-name">{p.name}</h6>
            <p className="ambassador-title">{this.handleAmbassadorTitle(p.title)}</p>
            <a className="ambassador-social" href={`https://www.instagram.com/${p.instagram}`} target="_blank">
              <i className="fa fa-instagram" /> {p.instagram}
            </a>
          </Box>
          <div className="ambassador-image">
            <Box shape="circle" color="darkGray" height={90} minHeight={90} width={90} minWidth={90} marginRight={2}>
              <Image
                alt={p.name}
                color="rgb(231, 186, 176)"
                naturalHeight={1}
                naturalWidth={1}
                fit="cover"
                src={p.photo_src}
              />
            </Box>
          </div>
        </Box>
      </div>
    ));
  }

  // Edit About component or pages/about.jsx to include your information.
  render() {
    const { input, playing, src, volume } = this.state;
    return (
      <div className="main-content">
        <h1>No Matter The Mountain</h1>
        <p>
          Life throws so many obstacles at us every day, creating a harsh ascent, similar to climbing a mountain. How we
          overcome these "mountains" is what makes us who we are.
        </p>
        <h2>How Do You Conquer Your Mountain?</h2>
        <iframe title="thh-campaign" src="https://www.youtube.com/embed/05ifiSTb6Fc" frameBorder="0" allowFullScreen />
        <p>
          Share your story with us on Instagram! Nominate your friends, and tag{' '}
          <a href="https://www.instagram.com/twohalfhitches" target="_blank">
            @twohalfhitches
          </a>{' '}
          and{' '}
          <a href="https://www.instagram.com/explore/tags/nomatterthemountain/" target="_blank">
            #NoMattertheMountain
          </a>.
        </p>

        <h2>Meet Our Campaign Ambassadors</h2>
        <p>Read up on our campaign ambassadors and how they conquer their own mountains!</p>

        {this.handleAmbassadorsDisplay()}
      </div>
    );
  }
}

export default NoMatterTheMountain;
