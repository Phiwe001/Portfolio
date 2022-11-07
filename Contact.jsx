import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

//import { useContext, useRef, useState } from "react";
//import emailjs from '@emailjs/browser';

//import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef  = useRef()
    const[done, setDone] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_7or4sym', 'template_ouf20y9', formRef.current, 'N98g8Ftz-KVEseJjQ')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      })
    }
 
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Please Contact me </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +27 634389901 or 
			  +27 726007164
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              phiwemst@gmail.com 
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              14983 Ncede Street Lusaka Phase4
			  Nyanga East
			  7755
			
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>You want to leave me a message?</b> Get in touch. Please contact me for new 
            opportunites.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name = 'user_name' />
            <input type="text" placeholder="Subject" name = 'user_subject' />
            <input type="text" placeholder="Email" name = 'user_email' />
            <textarea rows="5" placeholder="Message" name="message"/>
            <button>Submit</button>
            {done && "Thank You!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;