import React, { Component } from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Title = styled.h4`
  font-size: 2.5rem;
  margin: 20px !important;

  ${breakpoint("md")`
    margin: 20px 0 !important;
  `};
`;

const LastUpdated = styled.h6`
  margin: 20px !important;

  ${breakpoint("md")`
    margin: 20px 0 !important;
  `};
`;

class Terms extends Component {
  render() {
    return (
      <div className="main-content">
        <h1>Terms and Conditions</h1>
        <Title>Terms of Use</Title>
        <p>
          By using this website, you agree to all applicable laws and
          regulations, and to the Terms and Conditions provided herein. Two
          Half-Hitches does not warrant or make any representations concerning
          the accuracy or reliability of the use of the materials on its website
          or outside sources linked to this site.
        </p>

        <Title>Disclaimer</Title>
        <p>
          The contents of the Two Half-Hitches website regarding medical advice,
          such as text, graphics, images, and other material contained on this
          website are for informational purposes only. The content provided in
          this website is not intended to substitute professional medical
          advice, diagnosis, or treatment. Always seek the advice of your
          physician or other qualified health provider with any concerns you
          have regarding your medical condition. Two Half-Hitches does not
          endorse or recommend any products, procedures, opinions, or other
          information that may be mentioned on this website. If you are in a
          medical emergency, please call your doctor or 9-11, immediately.
        </p>

        <Title>Assumption of Risk</Title>
        <p>
          In no event shall Two Half-Hitches be liable for any damages from the
          use of information provided on Two Half-Hitches' website. Two
          Half-Hitches does not assume any responsibility or liability for the
          accuracy of information provided on this website. Users participating
          in outdoor recreational activities do so at their own risk. Users
          acknowledge they are responsible for their own conduct, exercising
          individual judgement, and ensuring their own safety and well-being.
          Accuracy of all information provided are subject to change due to
          circumstances, including, but not limited to, construction activities,
          traffic conditions, State and Local Park policies, US Forest Service
          and National Park Service policies, wildfires, natural disasters, and
          all weather and climate related issues.
        </p>

        <Title>Endorsement</Title>
        <p>
          Any reference in this website to any person, organization, activity,
          product, or service related to such person or organization, or any
          linkages from this web site to the web site of another party, do not
          constitute or imply the endorsement, recommendation, or favoring of
          Two Half-Hitches.
        </p>

        <Title>Copyright</Title>
        <p>
          Two Half-Hitches provides information available to the public. You are
          free to copy, distribute, and transmit information and material for
          personal, non-commercial temporary purposes so long as you credit Two
          Half-Hitches. Users may not remove any copyright or proprietary
          notices from any photos provided on this website and all other social
          media platforms. Copying, distributing, and transmitting information
          and material for commercial purposes must be authorized by Two
          Half-Hitches.
        </p>

        <LastUpdated>Last Updated: October 18, 2017</LastUpdated>
      </div>
    );
  }
}

export default Terms;
