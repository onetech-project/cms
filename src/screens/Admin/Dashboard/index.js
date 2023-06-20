import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import './index.css';
import { FaEdit, FaHome, FaWrench } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Container className="dashboard">
      <Row className="justify-content-center align-items-center dashboard">
        {[
          {
            title: 'Blogs',
            description: <div>Add an Article to your Landing Page</div>,
            icon: <FaEdit size={150} color="gray" />,
            onClick: () => navigate('/admin/blog/create')
          },
          {
            title: 'General Settings',
            description: <div>Setup your website information</div>,
            icon: <FaWrench size={150} color="gray" />,
            onClick: () => navigate('/admin/setting/general')
          },
          {
            title: 'Landing Page Setup',
            description: <div>Setup your Landing Page General Content</div>,
            icon: <FaHome size={150} color="gray" />,
            onClick: () => navigate('/admin/setting/landing')
          }
        ].map((x, i) => (
          <Col key={i.toString()} xs="12" sm="12" md="12" lg="3" xl="3" xxl="3">
            <Card>
              <Card.Header>{x.title}</Card.Header>
              <Card.Body className="d-flex flex-column gap-3 align-items-center">
                <div>{x.description}</div>
                {x.icon}
              </Card.Body>
              <Card.Footer>
                <Button className="w-100" onClick={x.onClick}>
                  GO
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
