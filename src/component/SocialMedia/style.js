import styled from "styled-components";
export const SocialSec = styled.div`
  height: auto;
  overflow: hidden;
`;
export const Social = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background:${props => props.id === 1 ? "#3b5998" : props.id === 2 ? "#498cbf":"#cc2127"}
`;
export const Icon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
`;
export const SocialInfo = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`;
export const InfoSpan = styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: ${props => props.body ? "normal":''};
`;

