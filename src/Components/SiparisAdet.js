import React,{useState,useEffect} from "react";
import styled from 'styled-components';

import '../css/SiparisAdet.css';

const Main =styled.div` 
  margin-top: 2rem;
  display:flex;
  justify-content:center;
  `

const NumberText  = styled.div`
display:inline-block;
font-size:1.2rem;
padding-left:1rem;
padding-right:1rem;
padding-top:0.45rem;
padding-bottom:0.45rem;
border:1px solid #F1F1F1;
`

const SiparisAdet = ({malzemeFunction}) =>{
  const[counter,setCounter]=useState(1);
  const artirici = () =>{
    setCounter(counter+1);
  }
  const azaltici = () =>{
    setCounter(counter-1);
  }

  let mainKey = "pizzaAdet";
  useEffect(()=>{
    malzemeFunction(mainKey,counter);
  },[counter])


return(

<Main>
<button className="adetButton" onClick={azaltici}disabled={counter===1 ? true:false}>-</button>
<NumberText>{counter}</NumberText>
<button className="adetButton" onClick={artirici}>+</button>
</Main>

)
}

export default SiparisAdet;