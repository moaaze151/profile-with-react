import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavSection = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`
export const NavCOntainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: auto;
`
export const Logo = styled.div`
width: 250px;
`
export const LogoText = styled.h2`
font-size: 30px;
font-weight: bold;
margin: 0;
`

export const UlList = styled.ul`
display: block;
list-style: none;
padding: 0;
margin: 0;
`

export const ListItem = styled.li`
display: inline-block;
`

export const Anchor = styled.a`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
&:hover{
    color:#eb5424
}
`
export const AnchorLink = styled(Link)`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
&:hover{
    color:#eb5424
}
`

// color: #eb5424;

