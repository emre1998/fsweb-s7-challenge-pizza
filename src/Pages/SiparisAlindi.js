import React from "react";
import styled from 'styled-components';
import '../css/MainPage.css'

const SiparisAlindi= () =>{
  
  const RootStyle  = styled.div`
  background:#CE2829;
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
`
const Row1 = styled.div`
  color:white;  
  text-align: center;
  align-items: center;
  padding-top: 5rem;
  font-family: 'Anton',cursive;
  font-size: 1.5rem;
`
const Row2 = styled.div`
  padding-top: 12rem;
  color:white;    
  text-align: center;
  display: flex;
  align-items: center;
  font-family: 'Plus Jakarta Sans',cursive;
  font-size: 3rem;
`



  return(
   <RootStyle>
      <Row1>Teknolojik Yemekler</Row1>
      <Row2>TEBRİKLER <br/>
              SİPARİŞİNİZ ALINDI!
      </Row2>

   </RootStyle>
  )
}

export default SiparisAlindi;