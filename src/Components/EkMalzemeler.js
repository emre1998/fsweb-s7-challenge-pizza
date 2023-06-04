import React,{useState} from "react";
import { Form, FormGroup, Input, Label} from "reactstrap";
import {Row, Col} from "reactstrap";
import '../css/EkMalzemeler.css'
import styled from 'styled-components';


const Title  = styled.div`
font-weight: bold;
font-size:1.2rem;
padding-top:2rem;
padding-bottom:1rem;
`

const Subtitle  = styled.div`
color:#5F5F5F;
font-size:1rem;
padding-bottom:1rem;
`

const Feedback  = styled.div`
color:#dc3545;
font-size:0.875em;
`

const EkMalzemeler = ({malzemeFunction,validateForm,formErrors}) => {

  const [checklist] =useState([
    {name : 'Pepperoni',
     price: 10
    },
    {name : 'Domates',
     price: 5
    },
    {name : 'Biber',
    price: 5
     },
     {name : 'Sosis',
    price: 8
     },
     {name : 'Mısır',
    price: 5
     },
     {name : 'Sucuk',
    price: 12
     },
     {name : 'Kanada Jambonu',
    price: 15
     },
     {name : 'Ananas',
    price: 8
     },
     {name : 'Tavuk Izgara',
     price: 12
      },
      {name : 'Jalepeno',
     price: 5
      },
      {name : 'Kabak',
     price: 5
      },
      {name : 'Soğan',
     price: 5
      },
      {name : 'Sarimsak',
     price: 5
      },
    ]);

    const [seciliMalzemeler,setSeciliMalzemeler] = useState([]);

    const changeHandler=(e)=>{  
      let updatedList=[...seciliMalzemeler]
      const{value,name} = e.target;
      if((e.target.checked)){  
        //updatedList.filter(item=>item.name===e.target.name).length===0
        updatedList=[...seciliMalzemeler,{name : name, price: parseInt(value)}]
      } else{
        let sira=-1;
        seciliMalzemeler.forEach((item,index)=>{
          if(item.name === name){
            sira=index;
          }
        })
          if(sira>-1){
            updatedList.splice(sira, 1);
          }  
      }       
      setSeciliMalzemeler(updatedList);
      let mainKey = "ekMalzemeL";
      malzemeFunction(mainKey,updatedList);
      validateForm(mainKey,updatedList);
     }


  return(
<>
<Title> Ek Malzemeler</Title>
<Subtitle>En Az 2 ve En Fazla 10 Malzeme Seçebilirsiniz.</Subtitle>

<Form>

  <Row xs="3">

        { 
            checklist.map((p,i) => {
              return(
                <Col key={i}>
                  <FormGroup className="boldGray">
                  <Input
                        id={i}
                        name={p.name}
                        type="checkbox"
                        value={p.price} 
                        checked={seciliMalzemeler.filter(item =>item.name===p.name).length>0}
                        onChange= {changeHandler}
                        invalid={!!formErrors.ekMalzemeL}  
                      /> 
                      <Label htmlFor={p.name}>&nbsp;&nbsp;{`${p.name} ${p.price}₺`}</Label>    
                  </FormGroup>
                </Col>
              )
            })
        }
  </Row>
  {formErrors.ekMalzemeL&& (<Feedback>{formErrors.ekMalzemeL} </Feedback>)} 
</Form>
</>
  )
}

export default EkMalzemeler;