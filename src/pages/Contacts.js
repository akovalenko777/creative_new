import { useEffect } from "react";
import FeedbackRef from "../components/FeedbackRef";
import { PHONE_NUMBER, EMAIL } from "../env";
import phoneNumberClear from "../helpers/phoneNumberClear";
import Map from "../components/Map";

function Contacts(){

  useEffect(()=>{
    window.document.title = 'Contacts | Creative Studio';
  }, []);

  return (
    <>
     <section id="contact">
        <div className="container">
            <div className="contact-card">
                <div className="infos">
                    <h6 className="section-subtitle">Get Here</h6>
                    <h6 className="section-title mb-4">Contact Us</h6>

                    <div className="item">
                        <i className="ti-location-pin"></i>
                        <div className="">
                            <h5>Location</h5>
                            <p> 12345 Fake ST NoWhere AB Country</p>
                        </div>                          
                    </div>
                    <div className="item">
                        <i className="ti-mobile"></i>
                        <div>
                            <h5>Phone Number</h5>
                            <p><a href={`tel:${phoneNumberClear(PHONE_NUMBER)}`}>{PHONE_NUMBER}</a></p>
                        </div>                          
                    </div>
                    <div className="item">
                        <i className="ti-email"></i>
                        <div className="mb-0">
                            <h5>Email Address</h5>
                            <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="ti-world"></i>
                        <div className="mb-0">
                            <h5>example.com</h5>
                            <p>info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <h6 className="section-subtitle">Available 24/7</h6>
                    <h6 className="section-title mb-4">Get In Touch</h6>
                    <FeedbackRef />
                </div>
            </div>
        </div>
    </section>

    <Map />
    </>
    
  )
}

export default Contacts;