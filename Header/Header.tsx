import React from 'react'
import styled from "styled-components"
import pics from "../Images/logo.webp";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <Firstwrapper>
        <Logo src={pics} />
        <Navhold>
          <Nav>Products</Nav>
          <Icons>
            <IoIosArrowDown />
          </Icons>
        </Navhold>

        <Navhold>
          <Nav>For Teams</Nav>
          <Icons>
            <IoIosArrowDown />
          </Icons>
        </Navhold>

        <Navhold>
          <Nav>Support</Nav>
          <Icons>
            <IoIosArrowDown />
          </Icons>
        </Navhold>
      </Firstwrapper>

      <Secondwrapper>
        <Button>Try now</Button>
        <Btn>Buy now</Btn>

        <Search><BiSearch/></Search>

        <UserHold>
            <Avatar>
<FaUserCircle/>
            </Avatar>

            <select>
                <option>My Account</option>
                <option>2</option>
            </select>
        </UserHold>
      </Secondwrapper>
    </Container>
  );
}

export default Header;
const Container= styled.div`
width:100%;
/* height:70px; */
background-color:lightblue;
display:flex;
justify-content:space-between;
align-items:center;
`

const Navhold = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 1px 8px;
  transition: all 350ms;
  font-size: 16px;
  color:#42526e ;

  :hover {
    background-color: silver;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const Nav= styled.div`
`
const Firstwrapper= styled.div`
display:flex;
align-items:center;
margin-left:70px;
`
const Secondwrapper = styled.div`
display:flex;
align-items:center;
margin-right:100px;

select{
    border:none;
    color:#0052cc;
    background-color:transparent;
    font-size:14px;
}

`;
const Logo= styled.img`
width:200px;
height:60px;
margin-right:20px;
object-fit:contain;

`

const Icons = styled.div`
  margin-top: 10px;
  margin-left: 3px;
  font-size: 16px;
  color: #091e42;
`;
const Button = styled.div`
  width: 80px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0047b3;
  margin-right: 15px;
  color: white;
  border-radius: 3px;
`;
const Btn = styled.div`
  width: 80px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 15px;
  transition: all 350ms;
  cursor: pointer;
  color:#0052cc;
   :hover {
    background-color: magenta;
  }
`;
const Search = styled.div`
margin-right:15px;
font-size:25px;
color:gray;
margin-top:5px;
` 
const UserHold = styled.div`
display:flex;
margin-right:15px;
`
const Avatar = styled.div`
/* margin-right:15px; */
border-left:1px solid silver;
padding:10px;
color:silver;

font-size:20px;
`