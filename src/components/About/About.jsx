import React, { Component } from 'react';
import _ from 'lodash';
import { Image } from 'gestalt';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import team from './team';

const MemberContainer = styled.div`
  display: flex;
  margin: 30px 0;
`;

const PhotoContainer = styled.div`
  flex-grow: 1;
  min-width: 500px;
  height: 500px;
`;

const InfoContainer = styled.div`
  flex-grow: 1;
  margin: 5px 20px;
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
      <MemberContainer>
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
          <Bio>{_.map(p.bio, line => <p>{line}</p>)}</Bio>
        </InfoContainer>
      </MemberContainer>
    ));
  }

  render() {
    return (
      <div className="main-content">
        <h1>Our Objective</h1>
        <p>
          Two Half-Hitches is designed to help guide you through the outdoors
          and share information on various hiking trails.
        </p>
        <h1>Our Team</h1>
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
