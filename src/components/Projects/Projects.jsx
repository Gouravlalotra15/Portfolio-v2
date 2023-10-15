import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import Message from '../../assets/Projects/Message.png';
import Wermin from '../../assets/Projects/Wermin.png';
import Youtube from '../../assets/Projects/Youtube.png';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('ProjHeader')}{' '}
          <strong className="green">{t('Works')} </strong>
        </h1>
        <p className="text">{t('ProjSubtitle')}</p>
        <Row
          style={{ justifyContent: 'center', paddingBottom: '10px' }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wermin}
              title="Wermin"
              description={t(`Developed fully responsive E-commerce website, ensuring seamless user experience across devices. Implemented advanced
              state management, enhancing performance and enabling efficient data flow.`)}
              link="https://wermins-store.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Message}
              isBlog={false}
              title="Secure-Messenger"
              description={t(`Dedicated rooms for secure and closed communications.Other users are notified whenever any user enters/leaves the room. All
              messages are encrypted with AES Encyption.`)}
              link="https://secure-chat-messenger.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="Pandas AI"
              description={t(`YouTube Clone is an efficacious video-sharing solution that aids you in launching your video streaming software. The app allows
              admin to add an unlimited collection of videos to keep the users hooked to the app.`)}
              link="https://youtube-clone-seven-lake.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
