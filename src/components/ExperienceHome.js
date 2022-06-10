import React from "react";
import ExperienceNavbar from './ExperienceNavbar.js';
import ExperienceGridCard from './ExperienceGridCard.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from './Header.js'
import Footer from './Footer.js'



const ExperienceHome = () => (
  <div className="ExperienceHome">
    <Header />
    <div><h1 className="ExperienceTitle">Experiencias en el área de Barcelona</h1></div>
    <ExperienceNavbar />
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4" >
        <ExperienceGridCard />
      </Row>
    </Container>
    <Footer />
  
  </div>
  );



export default ExperienceHome;