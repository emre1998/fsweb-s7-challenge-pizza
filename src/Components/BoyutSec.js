import React, {useEffect, useState } from "react";
import { Form, FormGroup, Input, Label} from "reactstrap";
import styled from 'styled-components';
import "../css/BoyutHamurText.css"

const Title  = styled.div`
font-weight: bold;
font-size:1.2rem;
padding-top:2rem;
padding-bottom:1.5rem;
`
const Red  = styled.div`
color:red;
display:inline;
`


const Feedback  = styled.div`
color:#dc3545;
font-size:0.875em;
`


const BoyutSec = ({malzemeFunction,validateForm,formErrors}) => {

  const [obje,setObje] = useState({name:"",price:0});

  const changeHandler=(e)=>{
    const{checked} =e.target;
    checked === true ? setObje({name:e.target.id,price:parseInt(e.target.value)}): setObje({name:"",price:0});
  }

  let mainKey = "boyut";
  useEffect(()=>{
    malzemeFunction(mainKey,obje)
    validateForm(mainKey,obje);
  
  },[obje]); 

  return(
  <>
  <Title>Boyut Seç<Red>*</Red></Title>
  
  <Form className="gray"> 
    <FormGroup>
      <Input
            id="kucuk"
            name="boyut"
            type="radio"
            value="40"
            onChange= {changeHandler}
            invalid={!!formErrors.boyut} 
          />
      <Label htmlFor="kucuk" >&nbsp;&nbsp;Küçük 40₺</Label>
    </FormGroup>
    <FormGroup>
      <Input
            id="orta"
            name="boyut"
            type="radio"
            value="50"
            onChange= {changeHandler}
            invalid={!!formErrors.boyut} 
          />
      <Label htmlFor="orta">&nbsp;&nbsp;Orta 50₺</Label>
    </FormGroup>
    <FormGroup>
      <Input
            id="buyuk"
            name="boyut"
            type="radio"
            value="60"
            onChange= {changeHandler}
            invalid={!!formErrors.boyut} 
          />
      <Label htmlFor="buyuk">&nbsp;&nbsp;Büyük 60₺</Label>
    </FormGroup>
    {/* {formErrors.boyut && <Feedback>{formErrors.boyut} </Feedback>} */}
  </Form>
  </>
  )
}

export default BoyutSec;