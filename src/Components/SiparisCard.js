import React,{useState,useEffect} from "react";
import styled from 'styled-components';
import {Row, Col} from "reactstrap"
import axios from "axios";
import { Form } 
from "reactstrap";
import { useNavigate } from "react-router-dom";
import '../css/SiparisCard.css'

const Main =styled.div` 
  margin-top: 2rem;
  margin-bottom: 2rem;
  border:1px solid #FAF7F2;
  `
  const TextMain =styled.div` 
  padding:1rem 1rem 0.5rem 3rem;
  `

  const Title  = styled.div`
  font-weight: bold;
  font-size:1.4rem;
  padding-bottom:1rem;
  `

  const Subtitle  = styled.div`
  color:#5F5F5F;
  font-size:1rem;
  padding-bottom:1rem;

  `
const SiparisCard = ({data,isFormValid}) =>{
const navigate =useNavigate();
const[boyutHamurFiyat,setBoyutHamurFiyat]=useState();
const[ekMalzemeFiyat,setEkMalzemeFiyat]=useState();
const[toplamFiyat,setToplamFiyat]=useState(0);


useEffect(()=>{
setEkMalzemeFiyat(data.ekMalzemeL.reduce((toplam,rakam)=>{
  return toplam+rakam.price;
},0));
setBoyutHamurFiyat(data.boyut.price+data.hamur.price);
},[data.boyut.price,data.hamur.price,data.ekMalzemeL])

useEffect(()=>{
  setToplamFiyat((boyutHamurFiyat+ekMalzemeFiyat)*data.pizzaAdet);
},[ekMalzemeFiyat,boyutHamurFiyat,data.pizzaAdet])




return(
  <Main>
    <TextMain>
      <Row>
        <Col>
          <Title>Sipariş Toplam</Title>
        </Col>
      </Row>
      <Row>
        <Col s="9">
        <Subtitle>Boyut + Hamur</Subtitle>
        </Col>
        <Col xs="3">
        <Subtitle>{boyutHamurFiyat}₺</Subtitle>
        </Col>
      </Row>
      <Row>
        <Col s="9">
        <Subtitle>Ek Malzeme</Subtitle>
        </Col>
        <Col xs="3">
        <Subtitle>{ekMalzemeFiyat}₺</Subtitle>
        </Col>
      </Row>
      <Row>
        <Col xs="9">
        <Subtitle >Toplam</Subtitle>
        </Col>
        <Col xs="3">
        <Subtitle>{toplamFiyat}₺</Subtitle>
        </Col>
      </Row>
    </TextMain>
      <Form onSubmit={(event) => {
      event.preventDefault();
      axios
        .post(
          "https://reqres.in/api/userss",data
        )
        .then((res) => {
          console.log("Yeni product kayıt res > ", res.data);
          
          navigate("/success");
    
        });
      }}>
        
        <button type="submit" disabled= {!isFormValid}>SİPARİŞ VER</button>
      </Form>
  
  </Main>



)
}

export default SiparisCard;