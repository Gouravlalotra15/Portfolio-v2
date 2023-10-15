import React from 'react';
import Card from 'react-bootstrap/Card';
import STATICS from '../../translation';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            {'Greetings'} {STATICS.Im}{' '}
            <span className="green">Gourav Lalotra</span>,{' '}
            {'FrontEnd Developer.'} <br /> <br />
            {'I have done my graduation from NIT Jalandhar.'}{' '}
            {`Committed to crafting exceptional user experiences through responsive design and intuitive interfaces. Eager to contribute innovative solutions and learn in a collaborative, fast-paced environment.
              `}{' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
