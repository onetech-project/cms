import React from 'react';
import { Container, Nav, NavDropdown, Navbar as NB, Image } from 'react-bootstrap';
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
  const isLanding = window.location.pathname === '/';

  return (
    <>
      <NB bg="white" expand="lg" sticky="top" className="shadow-sm border-bottom-1">
        <Container>
          <NB.Brand href="/">
            <Image src={logo} alt="logo" className="brand-logo" />
          </NB.Brand>
          <NB.Toggle aria-controls="basic-navbar-nav" />
          <NB.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={`${isLanding ? '#' : '/#'}home`}>{t('LANG-001')}</Nav.Link>
              <Nav.Link href={`${isLanding ? '#' : '/#'}about`}>{t('LANG-002')}</Nav.Link>
              <Nav.Link href={`${isLanding ? '#' : '/#'}product`}>{t('LANG-003')}</Nav.Link>
              <Nav.Link href={`${isLanding ? '#' : '/#'}partners`}>{t('LANG-004')}</Nav.Link>
              <Nav.Link href={`${isLanding ? '#' : '/#'}contact`}>{t('LANG-005')}</Nav.Link>
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
          </NB.Collapse>
        </Container>
      </NB>
    </>
  );
};

export default Navbar;
