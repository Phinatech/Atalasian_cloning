import React from 'react'
import styled from "styled-components"
import logo from "./Images/logo.webp"
import { AiOutlineGlobal } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <Logo src={logo} />
        </First>

        <Second>
          <Text>
            <h3>PRODUCTS</h3>
            <Nav>Jira Software</Nav>
            <Nav>Jira Align</Nav>
            <Nav>Jira Service Management</Nav>
            <Nav>Confluence</Nav>
            <Nav>Trello</Nav>
            <Nav>Bitbucket</Nav>
            <Nav2>View all products</Nav2>
          </Text>
          <Text>
            <h3>RESOURCES</h3>
            <Nav>Technical Support</Nav>
            <Nav>Purchasing & licensing</Nav>
            <Nav>Atlassian Community</Nav>
            <Nav>Knowledge base</Nav>
            <Nav>Marketplace</Nav>
            <Nav>My Account</Nav>
            <Nav2>View all products</Nav2>
          </Text>
          <Text>
            <h3>EXPAND & LEARN</h3>
            <Nav>Partners</Nav>
            <Nav>Training & Certification</Nav>
            <Nav>Documentation</Nav>
            <Nav>Developer Resources</Nav>
            <Nav>Enterprise services</Nav>
            <Nav2>View all products</Nav2>
          </Text>
          <Text>
            <h3>ABOUT ATLASSIAN</h3>
            <Nav>Company</Nav>
            <Nav>Careers</Nav>
            <Nav>Events</Nav>
            <Nav>Blogs</Nav>
            <Nav>Investor Relations</Nav>
            <Nav>Trust & Security</Nav>
            <Nav2>View all products</Nav2>
          </Text>
        </Second>
      </Wrapper>
      <Third>
        <Holder>
          <Div1>
            <FootText>
              <Icons>
                <AiOutlineGlobal />
              </Icons>
              English
              <span>
                <MdArrowDropDown />
              </span>
            </FootText>
            <FootText>Privacy Polcy</FootText>
            <FootText>Terms</FootText>
            <FootText>Modern Slavery Act</FootText>
            <FootText>Impressum</FootText>
          </Div1>
          <Div2>Copyright © 2022 Atlassian</Div2>
          <Div3>
            <Icons1>
              <FaFacebookSquare />
            </Icons1>
            <Icons2>
              <FaTwitter />
            </Icons2>
            <Icons3>
              <FaLinkedin />
            </Icons3>
            <Icons4>
              <TiSocialYoutubeCircular />
            </Icons4>
          </Div3>
        </Holder>
      </Third>
    </Container>
  );
}

export default Footer;

const Icons4 = styled.div`
  color: #42526e;
`;
const Icons3 = styled.div`
  color: #016699;
`;
const Icons2 = styled.div`
  color: #60a9dc;
`;
const Icons1 = styled.div`
  color: #3c5a99;
`;
const Icons =styled.div`
   font-size:25px; 
   margin-right:3px;
`
const FootText = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-right:8px;


span{
    margin-top:10px;
}
`
const Div3 = styled.div`
display:flex;
font-size:35px;
`
const Div2 = styled.div`
margin-right:220px;

font-size:14px;
`
const Div1 = styled.div`
display:flex;
justify-content:space-between;
width:45%;

font-size:14px;

`
const Nav2 = styled.div`
  color: #0742b8;
  margin-left:8px;
  margin-top:25px;
  font-size:15px;

  :hover{
    cursor: pointer;
    text-decoration:underline;
  }
`;
const Nav = styled.div`
  font-size: 14px;
  margin: 8px;
  color: #091f49;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Text = styled.div`
  h3 {
    color: #253858;
    margin-left:8px;
    margin-bottom:20px;
    font-weight:bold;
  }
`;
const Logo = styled.img`
 width:250px;
 height:100px;
 object-fit:contain;  

`

const Holder = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content:space-between;
`;
const Third = styled.div`
width:100%;
height:70px;
border-top:1px solid lightgray;
display:flex;
align-items:center;
justify-content:center;

/* justify-content:space-around; */
`
const Second = styled.div`
width:100%;

display:flex;
justify-content:space-between;


`;
const First = styled.div`
  width: 30%;
  /* margin: 0; */
  /* background-color: blue; */
  
  margin-top:-30px;
`;
const Wrapper = styled.div`
width:90%;
display:flex;
margin-bottom:30px;
margin-top:20px;


`;
const Container = styled.div`
  width: 100%;
  /* height: 500px; */
  background-color:#F4F5F7;
  display: flex;
 
  align-items: center;
  flex-direction: column;
`;


