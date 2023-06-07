import { useTranslation } from 'react-i18next';
import {
  landing1,
  landing4,
  logo,
  landing2,
  landing3,
  landingPartner1,
  landingPartner3,
  landingPartner4
} from '../../assets';
import { GradientImage } from '../../components';
import './index.css';
import { Badge, Button, Col, Image, Row } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div id="landing">
      <section id="home">
        <GradientImage
          image={landing1}
          caption={process.env.REACT_APP_WEBSITE_NAME}
          description={`Let's Explore The Nature`}
          button={{
            text: 'Contact Us',
            action: () => {
              location.href = process.env.REACT_APP_PREFIX_V3;
            }
          }}
        />
      </section>
      <section id="about">
        <div className="d-flex flex-column align-items-center justify-content-center mx-auto py-5 w-75">
          <Image src={logo} className="my-3" width={300} />
          <div className="landing-apps-description my-3">{t('ABOUT-001')}</div>
          <a href="/about" className="text-red my-3">
            More Detail <FaChevronRight className="align-self-center" />
          </a>
        </div>
      </section>
      <section id="product">
        <Row className="landing-apps-content-margin my-5">
          <Col>
            <h1>{t('LANG-022')}</h1>
            <p>{t('LANG-023')}</p>
          </Col>
        </Row>
        {[
          {
            image: landing2,
            title: 'A Program For You',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            button: 'Our Services'
          },
          {
            image: landing3,
            title: 'More Opportunities',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            button: 'Steps to Partnerships'
          }
        ].map((x, i) => (
          <Row key={i.toString()} className="landing-apps-content-margin">
            <Col xxl="6" xl="6" lg="6" md="12" sm="12" xs="12" className="mb-3">
              <Image src={x.image} fluid width={600} height={600} />
            </Col>
            <Col xxl="6" xl="6" lg="6" md="12" sm="12" xs="12">
              <div className="d-flex flex-column justify-content-center h-100 mx-xl-5">
                <h1 className="mb-3">{x.title}</h1>
                <div className="mb-3">{x.description}</div>
                <a href="/services" className="text-red">
                  {x.button} <FaChevronRight className="align-self-center" />
                </a>
              </div>
            </Col>
          </Row>
        ))}
      </section>
      <section id="partners">
        <Row className="landing-apps-content-margin my-5">
          <Col>
            <h1>{t('LANG-020')}</h1>
            <p>{t('LANG-021')}</p>
          </Col>
        </Row>
        <Row className="landing-apps-content-margin">
          {[
            {
              image: landingPartner1,
              link: '#'
            },
            {
              image: landingPartner3,
              link: '#'
            },
            {
              image: landingPartner4,
              link: '#'
            },
            {
              image: landingPartner1,
              link: '#'
            },
            {
              image: landingPartner3,
              link: '#'
            },
            {
              image: landingPartner4,
              link: '#'
            }
          ].map((x, i) => (
            <Col key={i.toString()} xxl="2" xl="2" lg="2" md="6" sm="6" xs="6">
              <div className="text-center">
                <a href={x.link} target="_blank" rel="noreferrer">
                  <Image src={x.image} fluid />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </section>
      <section id="contact">
        <div className="image-cover-fluid" style={{ '--img': `url(${landing4})` }}>
          <div className="image-overlay">
            <Row className="mb-5">
              <Col>
                <h1 className="text-white">Become our next partner</h1>
                <p className="text-white">
                  Get started in easy way. You can be signed in and propose a partnership in just a
                  few minutes, at no cost.
                </p>
              </Col>
            </Row>
            <Row className="mb-5">
              {[
                {
                  caption: 'Get Connected With Us',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                  caption: 'Choose the right solution for your business',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                  caption: 'Propose your partnership proposal',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              ].map((x, i) => (
                <Col key={i.toString()} xxl="4" xl="4" lg="4" md="12" sm="12" xs="12">
                  <Row>
                    <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="2">
                      <h4 className="text-white">
                        <Badge pill bg="danger">
                          {i + 1}
                        </Badge>
                      </h4>
                    </Col>
                    <Col xxl="11" xl="11" lg="11" md="11" sm="11" xs="10">
                      <h1 className="text-white">{x.caption}</h1>
                      <p className="text-white">{x.description}</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="text-center">
                <Button
                  variant="danger"
                  size="lg"
                  className="d-flex justify-content-center banner-button m-auto">
                  Become Our Next Partner <FaChevronRight className="align-self-center m-1" />
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
