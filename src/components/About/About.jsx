import React, { Component } from "react";
import { Box, Image } from "gestalt";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import "./About.css";

const PhotoContainer = styled.div`
  width: 100%;
  height: 300px;

  ${breakpoint("sm")`
    height: 500px;
  `};
`;

const Name = styled.h3`
  margin: 10px !important;

  ${breakpoint("md")`
    margin: 10px 0 !important;
  `};
`;

const Title = styled.h5`
  font-style: italic;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: unset;
  margin: 0 10px !important;

  ${breakpoint("md")`
    margin: 10px 0 !important;
  `};
`;

const Bio = styled.div`
  margin-bottom: 70px;
  p {
    margin: 10px;
  }

  ${breakpoint("md")`
    p {
      margin: 10px 0;
    }
  `};
`;

class About extends Component {
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

        <PhotoContainer>
          <Image
            alt="Franz Stanley Anunciacion"
            color="darkGray"
            naturalHeight={1}
            naturalWidth={1}
            fit="cover"
            src="https://s3-us-west-1.amazonaws.com/twohalfhitches/persons/franz.jpeg"
          />
        </PhotoContainer>
        <Name>Franz Stanley Anunciacion</Name>
        <Title>Founder/Editor-in-Chief</Title>
        <Bio>
          <p>
            Franz began exploring the Great Outdoors at the age of 5 with the
            Boy Scouts of America. After achieving the rank of Eagle Scout in
            2010, he continued to pursue the lifelong values set forth by the
            organization - adventure, conservation, challenge, responsibility,
            and integrity. Without waver, his strong passion for the outdoors
            inevitably led to protecting it.
          </p>
          <p>
            Franz later received a Bachelor's Degree in Environmental Science
            with a minor in Environmental Engineering from the University of
            California, Los Angeles. He is currently an Environmental Compliance
            Specialist at an environmental consulting firm.
          </p>
          <p>
            Through Two Half-Hitches, Franz will share a wealth of knowledge on
            various expeditions, teach the fundamentals of surviving in the
            outdoors, and help viewers find fulfillment in nature.
          </p>
        </Bio>

        <PhotoContainer>
          <Image
            alt="Robert Aaron Hebron"
            color="darkGray"
            naturalHeight={1}
            naturalWidth={1}
            fit="cover"
            src="https://s3-us-west-1.amazonaws.com/twohalfhitches/persons/robert.jpeg"
          />
        </PhotoContainer>
        <Name>Robert Aaron Hebron</Name>
        <Title>Photographer/Multi-Media Manager</Title>
        <Bio>
          <p>
            Los Angeles-based photographer, Robert, is susceptible to elevation
            sickness. Why does he continue to explore the Great Outdoors?
            Because he loves it.
          </p>
          <p>
            Having been with the Boy Scouts of America since 6 years old, he
            learned the fundamentals of exploring and surviving in the
            wilderness. He continues to expand his knowledge about exploration
            and applies them to every adventure he pursues.
          </p>
          <p>
            Robert has put his focus on photographing nature and his adventures
            shared with friends and family. He shoulders the extra weight on
            each expedition to document their stories and relive their
            experiences for all time. By combining two of his passions, Robert
            produces breathtaking images that he shares and inspires viewers to
            explore the world around them.
          </p>
        </Bio>

        <PhotoContainer>
          <Image
            alt="Colt Thomas Deck"
            color="darkGray"
            naturalHeight={1}
            naturalWidth={1}
            fit="cover"
            src="https://s3-us-west-1.amazonaws.com/twohalfhitches/persons/colt.jpeg"
          />
        </PhotoContainer>
        <Name>Colt Thomas Deck</Name>
        <Title>Senior Editor</Title>
        <Bio>
          <p>
            Colt is a writer and scholar currently teaching in the Sonoma County
            area and has been “playing with rocks” his entire life. Although his
            education is seemingly unrelated to the world around him, he often
            pulls creative inspiration from his surroundings. 2010 served as a
            critical juncture in Colt’s life, as he discovered the strong ties
            between man and nature were of the utmost importance to creativity;
            which is why he relocated from Los Angeles to Sonoma County.
          </p>
          <p>
            Drawing much of his inspiration from nature for his creative thesis
            at Sonoma State University, Colt feels that many people miss out on
            what surrounds them on a daily basis. Being a part of Two
            Half-Hitches gives him the opportunity to work with like-minded
            people and educate those who may be curious to get back into the
            wild.
          </p>
          <p>
            Colt serves as the senior editor. His ultimate goal is to re-enchant
            those who have become jaded towards the outdoors by communicating
            our values in a more poetic way to a wider audience. Although he is
            out with a serious knee injury, we hope to have him exploring with
            Two Half-Hitches again soon.
          </p>
        </Bio>
      </div>
    );
  }
}

export default About;
