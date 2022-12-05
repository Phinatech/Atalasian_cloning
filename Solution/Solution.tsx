import React,{useState} from 'react'
import styled from 'styled-components'
import Card from "../Card"
import hero from "../Images/Solutions_1.png";
import hero1 from "../Images/Solutions_2.png";
import hero2 from "../Images/Solutions_3.png";


const Solution = () => {
const [show,setShow] = useState<Boolean>(true)
const [show2,setShow2] = useState<Boolean>(false)
const [show3,setShow3] = useState<Boolean>(false);

const Toogle = ()=>{
setShow(true);
setShow2(false);
setShow3(false);
}
const Toogle2 = ()=>{
setShow2(true);
setShow(false);
setShow3(false);
}
const Toogle3 = ()=>{
setShow3(true);
setShow2(false);
setShow(false);
}

  return (
    <Container>
      <h1>Atlassian solutions are designed for all types of work</h1>

      <Btnholder>
        <Button
          onClick={Toogle}
          bgcol={show ? "hdu" : ""}
          col={show ? "" : "jj"}
        >
          Work Mangement
        </Button>
        <Button
          onClick={Toogle2}
          bgcol={show2 ? "hdu" : ""}
          col={show2 ? "" : "jj"}
        >
          IT Service Management
        </Button>
        <Button
          onClick={Toogle3}
          bgcol={show3 ? "hdu" : ""}
          col={show3 ? "" : "jj"}
        >
          Agile and DevOps
        </Button>
      </Btnholder>

      <View>
        {show ? (
          <Card
            image={hero}
            flex="flex"
            flex1="flex"
            flex2="flex"
            text1=" Make work flow across teams while connecting back to company goals"
            text2="Work differently, together"
            text3="Confluence"
            text4="Trello"
            text5="Jira Work Management"
          />
        ) : null}
        {show2 ? (
          <Card
            image={hero1}
            flex="flex"
            flex1="none"
            flex2="none"
            text1="Enable your dev, IT ops, and business teams to deliver great service experiences"
            text2="Deliver at high velocity"
            text3="Jira Service Management"
            text4=""
            text5=""
          />
        ) : null}
        {show3 ? (
          <Card
            image={hero2}
            flex="flex"
            flex1="flex"
            flex2="flex"
            text1="Run a world-class agile software company—from discovery to delivery and operations"
            text2="Explore Open DevOps"
            text3="Jira Software"
            text4="Jira Allgn"
            text5="Compass"
          />
        ) : null}
      </View>
    </Container>
  );
}

export default Solution

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  padding-top:60px;

  h1 {
    color: #4b586f;
    margin:0;
  }
`;
const Btnholder = styled.div`
margin-top:20px;
`
const Button = styled.button<{ bgcol: string, col:string }>`
  width: 300px;
  height: 70px;
  border-radius: 50px;
  border: none;
  background-color: ${(props) => (props.bgcol ? "#0065ff;" : "#deebff")};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  color: ${(props) => (props.col ? "#0065ff;" : "#deebff")};

  /* :hover {
    transition: scale(0.96);

    background-color: #deebff;
    color: #0065ff;
  } */
`;
const View = styled.div``