import styled from "styled-components";
export const ProfileSkill = styled.div`
  padding: 50px 0;
  overflow: hidden;
`;
export const SkillProfile = styled.div`
  width: 50%;
  float: left;
`;
export const ProfileList = styled.ul`
  list-style: none;
`;
export const ProfileItem = styled.li`
  margin-bottom: 8px;
`;
export const ProfileItemSpan = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;
export const SpanWeb = styled.span`
  font-weight: normal;
  color: #eb5424;
`;
export const Skills = styled.div`
  width: 50%;
  float: left;
`;
export const SkillsDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;
export const Bar = styled.div`
  overflow: hidden;
  padding: 3px 0;
  margin-bottom: 5px;
`;
export const BarTitle = styled.span`
  float: left;
`;
export const BarPerc = styled.span`
  float: right;
  margin-right: 50px;
`;
export const BarParent = styled.div`
  height: 5px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`;
export const BarParentSpan = styled.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
height: 5px;
width:${(props) => (props.perc === 1 ? "95%" : props.perc === 2 ? "92%" : "80%")}
`;
export const profileTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;
export const SkillsTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;
export const ProfileTitleSpan = styled.span`
  font-weight: normal;
`;
export const SkillsTitleSpan = styled.span`
  font-weight: normal;
`;
