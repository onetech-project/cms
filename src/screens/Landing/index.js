import {
  landing1,
  landing4,
  logo,
  landing2,
  landing3,
  landingIcon1,
  landingIcon2,
  landingIcon3,
  landingIcon4,
  landingPartner1,
  landingPartner3,
  landingPartner4
} from '../../assets';
import { GradientImage } from '../../components';
import './index.css';
import { Badge, Button, Col, Image, Row } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

const Landing = () => {
  return (
    <div>
      <GradientImage
        image={landing1}
        caption={'Hello, World!'}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
        button={{
          text: 'Contact Us',
          action: () => {
            location.href = process.env.REACT_APP_PREFIX_V3;
          }
        }}
      />
      <div className="d-flex flex-column align-items-center justify-content-center mx-auto py-5 w-75">
        <Image src={logo} className="my-3" width={300} />
        <div className="landing-apps-description my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
        <a href="/about" className="text-red my-3">
          More Detail <FaChevronRight className="align-self-center" />
        </a>
      </div>
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
          <Col xxl="6" xl="6" lg="6" md="12" sm="12" xs="12">
            <Image src={x.image} fluid width="100%" />
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
      <Row className="landing-apps-content-margin">
        <Col>
          <h1>What We Offer</h1>
          <p>Get benefits from partnering with us</p>
        </Col>
      </Row>
      <Row className="landing-apps-content-margin">
        {[
          {
            image: landingIcon1,
            caption: 'Acquire New Customers',
            description:
              'Reach your potential customers effectively and efficiently as soon as possible'
          },
          {
            image: landingIcon2,
            caption: 'Up to Date Technologies',
            description:
              'We believe that to always up to date with the trends is very important to achieve new levels of success'
          },
          {
            image: landingIcon3,
            caption: 'Generate Your Revenue',
            description:
              'Increase your sales revenue through our disruptive strategic objectives successfull partnerships'
          },
          {
            image: landingIcon4,
            caption: 'Digitalizing Your Business',
            description:
              'Let us digitalize your business with our best digital products, services and solutions'
          }
        ].map((x, i) => (
          <Col key={i.toString()} xxl="3" xl="3" lg="3" md="12" sm="12" xs="12">
            <div className="text-center mx-3 mb-md-5">
              <Image src={x.image} fluid />
              <h3 className="my-3">{x.caption}</h3>
              <p>{x.description}</p>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="landing-apps-content-margin my-5">
        <Col>
          <h1>Our Partners</h1>
          <p>Some of our partners</p>
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
    </div>
  );
};

export default Landing;
