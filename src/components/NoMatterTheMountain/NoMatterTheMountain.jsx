import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import ambassadors from './ambassadors/ambassadors';
import './NoMatterTheMountain.css';

const styles = theme => ({
  buttonRoot: {
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    height: 48,
    width: 48,
    '&:hover': {
      border: 0,
      color: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.08)'
    }
  }
});

const IGLink = props => <a href={`https://www.instagram.com/${props.to}`} target="_blank" rel="noopenner noreferrer" />;

class NoMatterTheMountain extends Component {
  handleAmbassadorTitle(list) {
    return list.join(', ');
  }

  renderAmbassadors() {
    const { classes } = this.props;

    return ambassadors.map((p, i) => (
      <div key={p.id} className="ambassador-container" style={i % 2 === 0 ? { flexDirection: 'row-reverse' } : {}}>
        <div className="ambassador-image" style={{ backgroundImage: `url(${p.photo_src})` }} />

        <div className="ambassador-testimonial" style={{ background: p.color }}>
          <div className="ambassador-info">
            <h6 className="ambassador-name">{p.name}</h6>
            <div className="ambassador-title">{this.handleAmbassadorTitle(p.title)}</div>
          </div>

          <div className="ambassador-bio" background={p.color}>
            &quot;{p.bio}&quot;
          </div>

          {/* Ambassador info: [name, title, IG] & [image]*/}

          <div className="ambassador-social">
            <a href={`https://www.instagram.com/${p.instagram}`} target="_blank" rel="noopenner noreferrer">
              <IconButton classes={{ root: classes.buttonRoot }} aria-label={p.instagram}>
                <i className="fa fa-instagram" />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="main-content campaign">
        <h2>How Do You Conquer Your Mountain?</h2>
        <iframe
          title="thh-campaign"
          src="https://www.youtube.com/embed/05ifiSTb6Fc"
          frameBorder="0"
          allowFullScreen
          style={{ marginTop: 30 }}
        />
        <br />
        <div className="campaign__subtitle" style={{ marginBottom: 50 }}>
          Share your story with us on Instagram! Nominate your friends, and tag{' '}
          <a href="https://www.instagram.com/twohalfhitches" target="_blank" rel="noopener noreferrer">
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
        </div>

        <h2>Meet Our Campaign Ambassadors</h2>
        <div className="campaign__subtitle" style={{ marginBottom: 25 }}>
          Read up on our campaign ambassadors and how they conquer their own mountains!
        </div>

        {this.renderAmbassadors()}
      </div>
    );
  }
}

export default withStyles(styles)(NoMatterTheMountain);
