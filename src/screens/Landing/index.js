import { useTranslation } from 'react-i18next';
import { landing1, logo } from '../../assets';
import { GradientImage } from '../../components';
import './index.css';
import { Col, Image, Row, Carousel } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import BG from '../../assets/BG';
import Partners from '../../assets/Partners';

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
              window.open('https://wa.me/6281212480989', '_blank');
            }
          }}
        />
      </section>
      <section id="about">
        <div className="d-flex flex-column align-items-center justify-content-center mx-auto py-5 w-75">
          <Image src={logo} className="my-3" width={300} />
          <div className="landing-apps-description my-3">{t('ABOUT-001')}</div>
          {/* <a href="/about" className="text-red my-3">
            More Detail <FaChevronRight className="align-self-center" />
          </a> */}
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
            images: Object.values(BG),
            title: 'PAKET BUNDLING BUMI GUMATI RP.750.000,-/PAX',
            description: () => (
              <>
                <p>Termasuk:</p>
                <ul>
                  <li>Menginap di Bumi Gumati 1 kamar isi 4 orang</li>
                  <li>3x Makan dan 2x Coffee Break</li>
                  <li>Aula / Ruang Berkumpul</li>
                  <li>Halfday Outbound</li>
                  <li>Paintball</li>
                  <li>Api Unggun</li>
                  <li>Solo Keyboard</li>
                  <li>MC</li>
                  <li>Fasilitator</li>
                  <li>Sound System</li>
                  <li>Air Mineral</li>
                  <li>Banner</li>
                  <li>Dokumentasi</li>
                  <li>Min. 50 pax</li>
                </ul>
              </>
            ),
            button: 'Pesan'
          }
        ].map((x, i) => (
          <Row key={i.toString()} className="landing-apps-content-margin">
            <Col xxl="6" xl="6" lg="6" md="12" sm="12" xs="12" className="mb-3">
              <Carousel className="carousel-container">
                {x.images.map((x, i) => (
                  <Carousel.Item key={i.toString()}>
                    <Image src={x} fluid />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col xxl="6" xl="6" lg="6" md="12" sm="12" xs="12">
              <div className="d-flex flex-column justify-content-center h-100 mx-xl-5">
                <h1 className="mb-3">{x.title}</h1>
                {x.description()}
                <a
                  href="https://wa.me/6281212480989"
                  target="_blank"
                  className="text-red"
                  rel="noreferrer">
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
          {Object.values(Partners).map((x, i) => (
            <Col key={i.toString()} xxl="2" xl="2" lg="2" md="6" sm="6" xs="6" className="mx-auto">
              <div className="text-center">
                <Image src={x} width={200} height={200} />
              </div>
            </Col>
          ))}
        </Row>
      </section>
      <section id="videos">
        <Row className="landing-apps-content-margin">
          <Carousel className="w-100">
            <Carousel.Item>
              <iframe
                src="https://www.youtube.com/embed/F0WFPFKPZkw"
                width="100%"
                height="700px"
                title="Kegiatan Outbound di Sentul"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </Carousel.Item>
          </Carousel>
        </Row>
      </section>
    </div>
  );
};

export default Landing;
