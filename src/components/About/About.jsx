import React, { Component } from 'react';
import styled from 'styled-components';
import team from './team';
import './About.css';

const MemberContainer = styled.div``;

const PhotoContainer = styled.div``;

const InfoContainer = styled.div``;

const Name = styled.div``;

const Title = styled.div``;

const Bio = styled.div``;

class About extends Component {
  constructor(p) {
    super(p);

    this.renderTeamMembers = this.renderTeamMembers.bind(this);
  }

  handleTitles(list) {
    let titles = '';

    list.map(t => {
      if (titles.length > 0) titles += '/';

      titles += t;
    });

    return titles;
  }

  renderTeamMembers() {
    return team.map((p, i) => (
      <MemberContainer
        key={p.id}
        className={
          i % 2 === 1 ? 'member-container reverse' : 'member-container'
        }
      >
        <PhotoContainer
          className="member-photo__container"
          style={{ backgroundImage: `url("${p.photo}")` }}
        />
        <InfoContainer className="member-info__container">
          <Name className="member-name">{p.name}</Name>
          <Title className="member-title">{this.handleTitles(p.titles)}</Title>
          <Bio className="member-bio">
            {p.bio.map(line => <p key={line}>{line}</p>)}
          </Bio>
        </InfoContainer>
      </MemberContainer>
    ));
  }

  render() {
    return (
      <div className="main-content">
        <h1>Our Objective</h1>
        <p>
          Two Half-Hitches was founded on the principle of tying everyday people
          back to nature. We hold a strong focus on self-generated content,
          which means we create all of our content by experiencing it first
          hand. From hiking the trails ourselves, to creating the trail guides,
          our small team does it all. No matter what your level of experience
          is, we’re here to help you get back out there, or maybe even get out
          there for the first time. We hope that you discover the same peace
          that nature brings us, and ultimately become re-enchanted with the
          Great Outdoors. Happy trails!
        </p>

        <h1 className="about__heading">Our Team</h1>
        <p>
          Get to know the team behind Two Half-Hitches. After all, we're just
          outdoor enthusiasts who share the same passion as you!
        </p>

        {this.renderTeamMembers()}
      </div>
    );
  }
}

export default About;
