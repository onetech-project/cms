import React from 'react';
import { Container, Nav, NavDropdown, Navbar as NB, Button, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { logo, globe } from '../../assets';
import { lang } from '../../i18n';
import { generalAction } from '../../stores/actions';
import './index.css';

const Navbar = () => {
  const general = useSelector((state) => state.generalReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <>
      <NB bg="white" expand="lg" sticky="top">
        <Container>
          <NB.Brand href="/">
            <Image src={logo} alt="logo" fluid height={100} width={100} />
          </NB.Brand>
          <NB.Toggle aria-controls="basic-navbar-nav" />
          <NB.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">{t('LANG-001')}</Nav.Link>
              <NavDropdown title={t('LANG-002')} id="about">
                <NavDropdown.Item href="/about">
                  <span>{t('LANG-008')}</span>
                  <br />
                  <span className="text-secondary">{t('LANG-016')}</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="/services">
                  <span>{t('LANG-009')}</span>
                  <br />
                  <span className="text-secondary">{t('LANG-017')}</span>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/news">{t('LANG-003')}</Nav.Link>
              <NavDropdown title={t('LANG-004')} id="help">
                <NavDropdown.Item href="/faq">
                  <span>{t('LANG-010')}</span>
                  <br />
                  <span className="text-secondary">{t('LANG-018')}</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="/guides">
                  <span>{t('LANG-011')}</span>
                  <br />
                  <span className="text-secondary">{t('LANG-019')}</span>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">{t('LANG-005')}</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <NavDropdown
                title={
                  <span>
                    <img src={globe} alt="logo" className="m-1" />
                    {general.language?.short}
                  </span>
                }
                id="language">
                {lang.map((x) => (
                  <NavDropdown.Item
                    key={x.code}
                    onClick={() => dispatch(generalAction.changeLanguage(x))}>
                    {x.long}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-xs-column">
              <Button as="a" href="login" variant="outline-secondary" size="sm" className="m-1">
                {t('LANG-006')}
              </Button>
              <Button as="a" href="/register" variant="outline-danger" size="sm" className="m-1">
                {t('LANG-007')}
              </Button>
            </div>
          </NB.Collapse>
        </Container>
      </NB>
    </>
  );
};

export default Navbar;
