import styled from "styled-components";

export const WorkSec = styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff;
`;

export const WorkTitle = styled.h2`
  font-size: 60px;
`;

export const WorkTitleSpan = styled.span`
  font-weight: normal;
`;

export const Part = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: 5%;
  margin-left: ${props => props.prop === 1? '0' : "5%"}
`;

export const FirstPart = styled.div`
  margin-left: 0;
`;

export const LastPart = styled.div``;

export const PartTitle = styled.h4`
  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px;
`;

export const PartInfo = styled.p`
  font-size: 14px;
  color: #888;c
  padding: 20px;
`;
export const PartIcon = styled.i`
  color: #888;
  margin-bottom: 20px;
`;

export const PartLine = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`;
