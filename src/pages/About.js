import { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import ServicesList from "../components/ServicesList";
import { useLocation } from "react-router-dom";

function About(){
  // const location = useLocation();
  
  // const someVar = useRef('123456789876543');

  // const fooRef = useRef();
  

  useEffect(()=>{
    window.document.title = 'About | Creative Studio';

    // if(location.hash!==''){
    //   fooRef.current.scrollIntoView({behavior: 'smooth'});
    // }
  }, []);

  return (
    <>
     {/* <HeroSection>
      <h6 className="subtitle">Small Team With Big Ideas</h6>
      <h1 className="title">About Us</h1>
    </HeroSection> */}
    <h1>About Us</h1>
    {/* <ServicesList /> */}
    <div style={{height:'1000px'}}></div>
    <div style={{height:'1000px'}}></div>
    <div style={{height:'1000px'}}>
      <h2 id="foo">Hello FOO!!!</h2>
    </div>
    </>
    
  )
}

export default About;