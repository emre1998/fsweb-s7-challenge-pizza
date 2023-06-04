import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import {Row, Col} from "reactstrap"
import * as yup from 'yup';
import OrderPageHeader from "../Components/OrderPageHeader";
import Isim from "../Components/Isim";
import Text from "../Components/Text";
import BoyutSec from "../Components/BoyutSec";
import HamurSec from "../Components/HamurSec";
import EkMalzemeler from "../Components/EkMalzemeler";
import Not from "../Components/Not";
import SiparisAdet from "../Components/SiparisAdet";
import SiparisCard from "../Components/SiparisCard";



const Main =styled.div` 
margin: auto;
display: flex;
flex-direction: column;
`
const Content =styled.div` 
margin: auto;
width: 60vw; 
display: flex;
flex-direction: column;
`
const Title  = styled.div`
font-weight: bold;
font-size:1.8rem;
padding-top:1.5rem;
padding-bottom:2rem;
`
const PriceTitle  = styled.div`
font-weight: bold;
font-size:1.5rem;
padding-bottom:1.5rem;
`
const PriceText  = styled.div`
font-size:0.8rem;
color:#5F5F5F;
display:flex;
`

const SiparisFormu = () => {
  const[data,setData]=useState({
    isim:"",
    boyut:{name:"",price:0},
    hamur:"",
    ekMalzemeL:[{name:"",price:0}],
    not:"",
    pizzaAdet:1,
  });

  let userSchema = yup.object().shape({
    isim: yup.string().required('İsim gerekli').min(3,'Minimum 3 karakter girmelisiniz.'),
    ekMalzemeL: yup.array().min(2,"En az iki malzeme seçiniz").max(10,"En fazla 10 malzeme seçiniz"),
    hamur:yup.object().shape({
      name:yup.string().required(),
      price:yup.number().required().min(1,"Lütfen Hamur Tipi Seçininiz."),
    }),
    boyut:yup.object().shape({
      name:yup.string().required(),
      price:yup.number().required().min(1,"Lütfen Boyut Tipi Seçininiz."),
    }),
  });

  const [formErrors,setFormErrors] = useState({
    isim:"",
    ekMalzemeL:[],
    hamur:{name:"",price:0},
    boyut:{name:"",price:0},
  });
  const [isFormValid,setIsFormValid] = useState(false);

  useEffect(()=>{
    userSchema
      .isValid(data).then((valid) => {
        if(valid)console.log("form datasi valid")
        else console.warn("form datasi valid degil")
        setIsFormValid(valid);

        })       
  },[data])

//Parenttan childlara fonksiyon gonderimi... Name ve value childlardaki eventhandlerlardan gonderiliyor. 
function validateForm (name,value){
  yup.reach(userSchema, name).validate(value)
  .then((result)=>{
    setFormErrors({...formErrors,[name]:""});
  }).catch((err)=>{
    setFormErrors({...formErrors,[name]:err.errors[0]});
  })
}
useEffect(()=>{
console.log("formErrors> ",formErrors)
},[formErrors])
  
  const dataFunction = (key,value) =>{
    let list = {...data};
    list[key]=value;
    setData(list);
  }
  
  const malzemeFunction = (mainKey,ekmalzemelerkeyvalue) =>{
    let list = {...data};
    list[mainKey]=ekmalzemelerkeyvalue; 
    setData(list);
  }

  useEffect(()=>{console.log("data>",data)},
  [data])

  const Props = {
    dataFunction,
    malzemeFunction,
    data,
    validateForm,
    formErrors,
    isFormValid
  }

return(
<Main id="pizza-form">
<OrderPageHeader/>
  <Content>
  <Row>
    <Col>
      <Title>Position Absolute Acı Pizza</Title>
    </Col>
  </Row>  
  <Row>
    <Col xs="8">
      <PriceTitle xs="">Min. 60₺</PriceTitle>
    </Col>
    <Col xs="2">
      <PriceText>4.9</PriceText>
    </Col>
    <Col xs="2">
      <PriceText>(200)</PriceText>
    </Col>
  </Row> 
  <Row>
    <Col>
      <Text/>
    </Col>
  </Row>
  <Row>
    <Col>
      <Isim {...Props}/>
    </Col>
  </Row> 
  <Row>
    <Col>
      <BoyutSec {...Props}/>
    </Col>
    <Col>
      <HamurSec {...Props}/>
    </Col>
  </Row>
  <Row>
        <Col>
          <EkMalzemeler {...Props}/>
        </Col>
      </Row> 
  <br/>
  <Row>
    <Col>
      <Not {...Props}/>
    </Col>
  </Row> 
  <hr/>
  <Row>
    <Col xs="4">
      <SiparisAdet {...Props} />
    </Col>
    <Col xs="8">
      <SiparisCard {...Props}/>
    </Col>
  </Row> 

  </Content>

</Main>
)
}

export default SiparisFormu;