import React from "react";
import {
  AboutSec,
  AboutInfo,
  InfoTitle,
  InfoTitleSpan,
  InfoDir,
  InfoDesc,
  DescAnchor,
} from "./style";
const About = () => {
  return (
    <AboutSec>
      <div class="container">
        <AboutInfo>
          <InfoTitle>
            <InfoTitleSpan>This is</InfoTitleSpan> Me
          </InfoTitle>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <DescAnchor href="#">explicabo</DescAnchor> maxime quibusdam quaerat
            nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi
            cupiditate ad veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </AboutInfo>
      </div>
    </AboutSec>
  );
};

export default About;
