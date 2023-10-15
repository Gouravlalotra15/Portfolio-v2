import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {[
        <SiCplusplus />,
        <DiJavascript1 />,
        <DiNodejs />,
        <DiReact />,
        <DiMongodb />,
      ].map((tool) => (
        <Col xs={4} md={2} className="tech-icons">
          {tool}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
