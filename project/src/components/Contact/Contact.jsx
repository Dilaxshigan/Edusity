import React from 'react'
import './Contact.css'

import msg_icon from '../../assets/img/msg-icon.png'
import mail_icon from '../../assets/img/mail-icon.png'
import phone_icon from '../../assets/img/phone-icon.png'
import location_icon from '../../assets/img/location-icon.png'
import white_arrow from '../../assets/img/white-arrow.png' 

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "caf93909-3b1b-4ada-9537-4ea8228a0f3a");//YOUR_ACCESS_KEY_HERE
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
        Organizations commonly offer contact information such as physical 
        addresses, phone numbers, email addresses, and websites for effective 
        communication. These details foster accessibility and transparency, 
        enabling stakeholders to easily reach out for inquiries, support, 
        or collaboration.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />contact@edusity.com</li>
            <li><img src={phone_icon} alt="" />+94-773456891</li>
            <li><img src={location_icon} alt="" />No-45 Bossy cottage Ave, <br/>Mancity 31000,United Kingdom.</li>
        </ul>
      </div>
      <div className="contact-col">
      <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>

            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>

            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your messages' required></textarea>

            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>
            {result}
        </span>
      </div>
    </div>
  )
}

export default Contact
