// Home.js
import React from 'react';
import './Home.css';
import FlutterIcon from '../assets/flutter.svg';
import RobotIcon from '../assets/robot.svg'; 
import profileImage from '../assets/profile.jpeg';

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
             <h1>Kim yeon woo</h1>
             <p>안녕하세요, 생각의 깊이가 코드의 품질을 결정합니다. 깊이 있는 사고를 가진 개발자 김연우입니다.</p>
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