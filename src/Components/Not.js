import React from "react";
import { Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import styled from 'styled-components';
import * as yup from 'yup';
import '../css/SiparisNotu.css'

const Title  = styled.div`
font-weight: bold;
font-size:1.2rem;
padding-top:2rem;
`

const Not = ({dataFunction}) => {

  const changeHandler=(e)=>{
    const{value,name} = e.target;
    dataFunction(name,value);
}



  return(
    <>
      <Form className="name-input">
      <FormGroup>
          <Label htmlFor="Isim Bilgisi"><Title>Not Bilgisi</Title></Label>
          <br/>
          <Input
              id="sipariş-notu"
              name="not"
              type="text"
              placeholder="Lütfen İsminizi Yazınız."
              onChange={changeHandler}
              //invalid={!!formErrors.isim}
              /> 
            {/* {formErrors.isim && <FormFeedback>{formErrors.isim} </FormFeedback>} */}
         
        </FormGroup>
      </Form>
    </>
  )
}

export default Not;