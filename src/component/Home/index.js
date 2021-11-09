import React from "react";
import { HomeSec,HomeInfo,HomeTitle,HomeTitleT,HomeDesc,SpanDesc,Button } from "./style";

const Home = () => {
  return  <HomeSec>
  <div class="container">
      <HomeInfo>
          <HomeTitle>Moaaz Gamal</HomeTitle>
          <HomeTitleT>Web Developer(Front End)</HomeTitleT>
          <HomeDesc>
              Iam a professional <SpanDesc>UX Designer</SpanDesc> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
          </HomeDesc>
          <Button>Let's Begin</Button>
      </HomeInfo>
  </div>
</HomeSec>
};
export default Home;
