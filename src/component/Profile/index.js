import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ProfileSkill,
  SkillProfile,
  ProfileList,
  Skills,
  SkillsTitle,
  SkillsTitleSpan,
  ProfileItem,
  ProfileTitleSpan,
  SpanWeb,
  SkillsDesc,
  Bar,
  BarTitle,
  BarPerc,
  BarParent,
  BarParentSpan,
} from "./style";
const Profile = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => setList(res.data.profileList));
  }, []);
  const profileListItem = list.map((el) => {
    return (
      <ProfileItem key={el.id}>
        <ProfileTitleSpan>{el.span}</ProfileTitleSpan>
        <SpanWeb>{el.desc}</SpanWeb>
      </ProfileItem>
    );
  });

  const [bar, setBar] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => setBar(res.data.barInfo));
  }, []);
  const barItem = bar.map((el) => {
    return (
      <Bar key={el.id}>
        <BarTitle>{el.title}</BarTitle>
        <BarPerc>{el.perc}</BarPerc>
        <BarParent>
          <BarParentSpan perc={el.id}></BarParentSpan>
        </BarParent>
      </Bar>
    );
  });
  return (
    <ProfileSkill>
      <div class="container">
        <SkillProfile>
          <SkillsTitle>
            <ProfileTitleSpan>My </ProfileTitleSpan>Profile
          </SkillsTitle>
          <ProfileList>{profileListItem}</ProfileList>
        </SkillProfile>

        <Skills>
          <SkillsTitle>
            Some <SkillsTitleSpan>skills</SkillsTitleSpan>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {barItem}
        </Skills>
      </div>
    </ProfileSkill>
  );
};

export default Profile;
