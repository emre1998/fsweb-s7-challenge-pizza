import React, {useState,useEffect} from "react";
import { Form,FormGroup, Input}from "reactstrap";
import styled from 'styled-components';



const Title  = styled.div`
font-weight: bold;
font-size:1.2rem;
padding-top:2rem;
padding-bottom:1rem;
`
const Red  = styled.div`
color:red;
display:inline;
`
const Feedback  = styled.div`
color:#dc3545;
font-size:0.875em;
`

const HamurSec = ({malzemeFunction,validateForm,formErrors}) => {

  const [obje,setObje] = useState({name:"",price:0});

  const changeHandler=(e)=>{
    setObje({name:e.target.options[e.target.selectedIndex].title,price:parseInt(e.target.value)})
    
  }

  let mainKey = "hamur";
  useEffect(()=>{
    malzemeFunction(mainKey,obje);
    validateForm("hamur",obje);
  },[obje]); 
   
  
  

  return(
    <Form>
      <FormGroup>
      <Title>Hamur Seç<Red>*</Red></Title>
      {/* {formErrors.boyut && <Feedback>{formErrors.boyut} </Feedback>} */}
      <Input
        name="type"
        type="select"
        onChange= {changeHandler}
        invalid={!!formErrors.hamur}  
      >
        <option title="Hamur Kalınlğı" value="0">Hamur Kalınlğı</option>
        <option title="Kalın Hamur" value="20">Kalın Hamur 20₺</option>
        <option title="Ince Hamur" value="30">Ince Hamur 30₺</option>  
      </Input>  
    </FormGroup>
    
  </Form>

  )
}

export default HamurSec;