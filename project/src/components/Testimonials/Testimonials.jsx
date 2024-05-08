import React, { useRef } from 'react'
import './Testimonials.css'

import next_icon from '../../assets/img/next-icon.png'
import back_icon from '../../assets/img/back-icon.png'

import user_1 from '../../assets/img/user-1.png'
import user_2 from '../../assets/img/user-2.png'
import user_3 from '../../assets/img/user-3.png'
import user_4 from '../../assets/img/user-4.png'

const Testimonials = () => {
   const slider = useRef();
   let tx = 0;

   const slideForward = () => {
      if(tx > -50){
         tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
   } 

   // const slideBackward = () => {
   //    if(tx < -50){
   //       tx += 25;
   //    }
   //    slider.current.style.transform = `translateX(${tx}%)`;
   // } 

   const slideBackward = () => {
      if(tx < -50){
         tx += 25; 
      }
      slider.current.style.transform = `translateX(${tx}%)`;
   }

   return (
      <div className='testimonials'>
         <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
         <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />

      <div className="slider">
           <ul ref={slider}>

             <li>
                <div className="slide">
                     <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                             <h3>Philly Jackson</h3>
                             <span>Edusity, USA</span>
                        </div>
                     </div>
                       <p>
                        Edusity is an innovative online learning platform designed to meet 
                        the diverse needs of students. With its user-friendly interface and extensive 
                        course offerings, Edusity provides flexible learning opportunities for 
                        students worldwide. Interactive features and live sessions foster engagement, 
                        enabling students to achieve their academic goals efficiently.  
                       </p>
                </div>
             </li>

             <li>
                <div className="slide">
                     <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                             <h3>Josep Sheperd</h3>
                             <span>Edusity, Cuba</span>
                        </div>
                     </div>
                       <p>
                       Edusity is an online learning platform that offers students a flexible and engaging 
                       educational experience. With its user-friendly interface, diverse course options, and 
                       interactive features, Edusity empowers students to learn at their own pace and achieve their 
                       academic goals effectively.  
                       </p>
                </div>
             </li>

             <li>
                <div className="slide">
                     <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                             <h3>Anthony Emma</h3>
                             <span>Edusity, Canada</span>
                        </div>
                     </div>
                       <p>
                       Edusity is a dynamic online learning platform that offers students a seamless educational experience. 
                       With its intuitive interface and diverse course selection, Edusity provides flexibility and convenience 
                       for learners of all backgrounds. Interactive features and live sessions enhance engagement, making the 
                       learning process both effective and enjoyable.  
                       </p>
                </div>
             </li>

             <li>
                <div className="slide">
                     <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                             <h3>Mariam Beckham</h3>
                             <span>Edusity, Australia</span>
                        </div>
                     </div>
                       <p>
                       Edusity offers students an accessible and engaging online learning experience. With its user-friendly interface 
                       and diverse course options, it provides flexibility and convenience. Through interactive features and live sessions, 
                       Edusity fosters an environment where learning feels dynamic and collaborative.  
                       </p>
                </div>
             </li>
           </ul>
      </div>
    </div>
  )
}

export default Testimonials
