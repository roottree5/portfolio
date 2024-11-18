// src/components/TechStack.js
import React from 'react';
import './TechStack.css';
import FlutterIcon from '../assets/flutter.svg';
import DartIcon from '../assets/dart.svg';
import KotlinIcon from '../assets/kotlin.svg';
import SwiftIcon from '../assets/swift.svg';
import PythonIcon from '../assets/python.svg'; 
import ReactIcon from '../assets/react.svg'; 
import FirebaseIcon from '../assets/firebase.svg';
import MongoDBIcon from '../assets/mongodb.svg';
import MySQLIcon from '../assets/mysql.svg';
import SlackIcon from '../assets/slack.svg';
import NotionIcon from '../assets/notion.svg';

const TechStack = () => {
  return (
    <section className="tech-stack" id="techstack">
      <div className="container">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          <img src={FlutterIcon} alt="Flutter" className="icon" />
          <img src={DartIcon} alt="Dart" className="icon" />
          <img src={KotlinIcon} alt="Kotlin" className="icon" />
          <img src={SwiftIcon} alt="Swift" className="icon" />
          <img src={PythonIcon} alt="Python" className="icon" />
          <img src={ReactIcon} alt="React" className="icon" />
          <img src={FirebaseIcon} alt="Firebase" className="icon" />
          <img src={MongoDBIcon} alt="MongoDB" className="icon" />
          <img src={MySQLIcon} alt="MySQL" className="icon" />
          <img src={SlackIcon} alt="Slack" className="icon" />
          <img src={NotionIcon} alt="Notion" className="icon" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;