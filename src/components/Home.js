// Home.js
import React from 'react';
import './Home.css';
import FlutterIcon from '../assets/flutter.svg';
import RobotIcon from '../assets/robot.svg'; 
import profileImage from '../assets/profile-photo.jpeg';

const Home = () => {
 return (
   <section className="home" id="home">
     <div className="container">
       <div className="home-content">
         <div className="profile-section">
           <img src={profileImage} alt="Profile" className="profile-photo" />
         </div>
         <div className="info-section">
           <div className="text-content">
             <h1>HI, I'm Rroot</h1>
             <p>Flutter와 AI에 대해 공부하고 있어요.</p>
           </div>
           <div className="tech-icons">
             <img src={FlutterIcon} alt="Flutter" className="tech-icon" />
             <img src={RobotIcon} alt="Robot" className="tech-icon" />
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};

export default Home;