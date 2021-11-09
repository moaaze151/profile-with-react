import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BoxChildDiv,
  ImgChild,
  OverlayChild,
  SpanOverlay,
  TitleSpan,
  PortfolioTitle,
  PortfolioList,
  Portfolio,
  ListItem,
} from "./style";

const PortFolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setPortfolio(res.data.portfolio);
    });
  }, []);
  console.log(portfolio);
  const boxChild = portfolio.map((el) => {
    return (
      <BoxChildDiv key={el.id}>
        <ImgChild src={el.image} alt="error" />
        <OverlayChild>
          <SpanOverlay>Show Image</SpanOverlay>
        </OverlayChild>
      </BoxChildDiv>
    );
  });

  return (
    <Portfolio>
      <PortfolioTitle>
        <TitleSpan>My</TitleSpan> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <ListItem active>All</ListItem>
        <ListItem>HTML</ListItem>
        <ListItem>Photoshop</ListItem>
        <ListItem>Wordpress</ListItem>
        <ListItem>Mobile</ListItem>
      </PortfolioList>

      <div class="box">{boxChild}</div>
    </Portfolio>
  );
};
export default PortFolio;
