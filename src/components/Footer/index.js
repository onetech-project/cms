import React from 'react';
import { Container, Row, Col, Nav, Image } from 'react-bootstrap';
import { FaWhatsapp, FaRegEnvelope, FaRegCalendarAlt, FaRegMap } from 'react-icons/fa';
import { logo } from '../../assets';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const isLanding = window.location.pathname === '/';
  return (
    <div className="text-lg-start text-muted">
      <section className="">
        <Container className="text-md-start mt-5">
          <Row className="mt-3">
            <Col xs="12" sm="12" md="12" lg="2" xl="2" className="mx-auto mb-4">
              <Image src={logo} alt="logo" fluid />
            </Col>

            <Col xs="12" sm="6" md="6" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('LANG-012')}</h6>
              <Nav.Link href={`${isLanding ? '#' : '/#'}home`} className="mb-2">
                {t('LANG-001')}
              </Nav.Link>
              <Nav.Link href={`${isLanding ? '#' : '/#'}about`} className="mb-2">
                {t('LANG-002')}
              </Nav.Link>
              <Nav.Link href={`${isLanding ? '#' : '/#'}product`} className="mb-2">
                {t('LANG-003')}
              </Nav.Link>
              <Nav.Link href={`${isLanding ? '#' : '/#'}blog`} className="mb-2">
                {t('LANG-004')}
              </Nav.Link>
              <Nav.Link href={`${isLanding ? '#' : '/#'}contact`} className="mb-2">
                {t('LANG-005')}
              </Nav.Link>
            </Col>

            <Col xs="12" sm="6" md="6" lg="3" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('LANG-014')}</h6>
              <Row className="mb-2">
                <Col xs="1" sm="1" md="1" lg="1" xl="1">
                  <FaWhatsapp className="me-2" />
                </Col>
                <Col
                  onClick={() => window.open('https://wa.me/6281212480989', '_blank')}
                  role="button">
                  +(62) 812-1248-0989
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs="1" sm="1" md="1" lg="1" xl="1">
                  <FaRegEnvelope className="me-3" />
                </Col>
                <Col>
                  <a
                    className="text-decoration-none text-reset"
                    href="mailto:putra.faris295@gmail.com">
                    wanfadlybaros2@gmail.com
                  </a>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs="1" sm="1" md="1" lg="1" xl="1">
                  <FaRegCalendarAlt className="me-3" />
                </Col>
                <Col>Monday to Friday 08:00 AM to 05:00 PM</Col>
              </Row>
            </Col>

            <Col xs="12" sm="6" md="6" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('LANG-015')}</h6>
              <Row>
                <Col xs="1" sm="1" md="1" lg="1" xl="1">
                  <FaRegMap className="me-3" />
                </Col>
                <Col>Jl. Puncak Semeru Golf, Bukit Golf Hijau, Bukit Sentul, Bogor, Jawa Barat</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="text-center p-4">
        <div className="mx-auto w-75 border-top" />
        <br />© {new Date().getFullYear()} All Right Reserved.&nbsp;
        <a className="text-reset text-decoration-none" href={process.env.REACT_APP_BASE_URL}>
          {process.env.REACT_APP_WEBSITE_NAME}
        </a>
      </div>
    </div>
  );
};

export default Footer;
