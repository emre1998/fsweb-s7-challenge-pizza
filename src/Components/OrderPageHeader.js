import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../css/OrderPageHeader.css'


const HeaderRootStyle  = styled.div`
background:#CE2829;
height:22vh;
`
const Main =styled.div`
width: 60vw;  
margin: auto;
display: flex;
flex-direction: column;
`
const H1 = styled.div`
text-align: center;
padding-top: 1.5rem;
padding-bottom:1rem;
font-family: 'Anton',cursive;
font-size: 3rem;
color: white;
`
const NavBar = styled.div`
display: flex;
justify-content:center; 
`

const OrderPageHeader = () => {

 
return (
<HeaderRootStyle>
  <Main>
    <H1>Teknolojik Yemekler</H1>
    <NavBar>
      <NavLink to='/'><button className="a">Anasayfa</button></NavLink>
      <NavLink><button className="a">Seçenekler</button></NavLink>
      <NavLink><button className="a">Sipariş Oluştur</button></NavLink>
    </NavBar>
  </Main>
</HeaderRootStyle>
)
}

export default OrderPageHeader;