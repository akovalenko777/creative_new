import faqs from './../data/faq.json';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import "./../assets/scss/accord.scss";
import { useEffect } from 'react';

function FaqList(){

  useEffect(()=>{
    fetch('http://localhost/wp_test/wp-json/simple-jwt-login/v1/', {
      method: 'post',
      body: JSON.stringify({
        username: 'admin',
        password: '123qweasd'
      })
      // headers: {
      //   Accept: '*/*',
      //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY5MDY1ODk1NSwiZXhwIjoxODQ4MzM4OTU1fQ.pA6N7FCqdF1QXv3989sVOW2mXAAXyLgtO0HJCPDP4a4',
      //   Host: 'localhost',
      //   'Sec-Fetch-Mode':'cors',
      //   'Sec-Fetch-Site' :'same-origin'
      // }
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
      })
  }, [])

  return (
    <div className="container">
      <Accordion transition transitionTimeout={250}>
        {faqs.map(f => <AccordionItem header={f.question}><div dangerouslySetInnerHTML={{ __html: f.answer }}/></AccordionItem>)}
      </Accordion>
    </div>
  );
}

export default FaqList;