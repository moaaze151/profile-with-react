import React, { useState, useEffect } from "react";
import axios from "axios";
import { SocialSec, Social, Icon, InfoSpan, SocialInfo } from "./style";

const SocialMedia = () => {
  const [socialContent, setSocialContent] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => setSocialContent(res.data.social));
  }, []);
  const socislDiv = socialContent.map((el) => {
    return (
      <Social key={el.id} id={el.id}>
        <Icon className={el.icon}></Icon>
        <SocialInfo>
          <InfoSpan>{el.title}</InfoSpan>
          <InfoSpan body>{el.body}</InfoSpan>
        </SocialInfo>
      </Social>
    );
  });
  return <SocialSec>{socislDiv}</SocialSec>;
};
export default SocialMedia;
