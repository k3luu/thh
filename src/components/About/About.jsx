import React, { Component } from 'react';
import _ from 'lodash';
import { Image } from 'gestalt';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import team from './team';

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  ${breakpoint('md')`
    flex-direction: row;
  `};
`;

const PhotoContainer = styled.div`
  min-width: unset;
  height: 45vh;

  ${breakpoint('md')`
    min-width: 500px;
    width: 100%;
    height: 500px;
  `};
`;

const InfoContainer = styled.div`
  margin: 5px 0;

  ${breakpoint('sm')`
    margin: 5px 10px;
  `};

  ${breakpoint('md')`
    margin: 5px 20px;
  `};
`;

const Name = styled.h3`
  margin: 10px !important;

  ${breakpoint('md')`
    margin: 10px 0 !important;
  `};
`;

const Title = styled.h5`
  font-style: italic;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: unset;
  margin: 0 10px !important;

  ${breakpoint('md')`
    margin: 10px 0 !important;
  `};
`;

const Bio = styled.div`
  margin-bottom: 70px;
  p {
    margin: 10px;
  }

  ${breakpoint('md')`
    p {
      margin: 10px 0;
    }
  `};
`;

class About extends Component {
  constructor(p) {
    super(p);

    this.renderTeamMembers = this.renderTeamMembers.bind(this);
  }

  handleTitles(list) {
    let titles = '';

    _.map(list, t => {
      if (titles.length > 0) titles += '/';

      titles += t;
    });

    return titles;
  }

  renderTeamMembers() {
    return _.map(team, p => (
      <MemberContainer key={p.id}>
        <PhotoContainer>
          <Image
            alt={p.name}
            color="darkGray"
            naturalHeight={1}
            naturalWidth={1}
            fit="cover"
            src={p.photo}
          />
        </PhotoContainer>
        <InfoContainer>
          <Name>{p.name}</Name>
          <Title>{this.handleTitles(p.titles)}</Title>
          <Bio>{_.map(p.bio, line => <p key={line}>{line}</p>)}</Bio>
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
        <h1>Our Team</h1>
        <p>
          Get to know the team behind Two Half-Hitches. After all, we're all
          really just outdoor power rangers.
          {/*we're just*/}
          {/*outdoor enthusiasts who share the same passion as you!*/}
        </p>

        {this.renderTeamMembers()}
      </div>
    );
  }
}

export default About;
