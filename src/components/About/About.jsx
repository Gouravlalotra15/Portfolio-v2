import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import laptopImg from '../../assets/about.svg';
import STATICS from '../../translation';

function About() {
  // chanded the build folder name to docs
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              {STATICS.AboutHeader}{' '}
              <strong className="green">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '10px', paddingBottom: '50px' }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="green">{STATICS.Languages} </strong>
          {'And'} <strong className="green">{'Frameworks'} </strong>{' '}
          {'I Use'}
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
