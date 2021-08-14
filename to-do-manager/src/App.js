import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, ListGroup, FormControl, Form, Navbar } from 'react-bootstrap/';
import floating from './plus.png';
import './App.css';
import './main.css'

function App() {
  return (
    <>
      
      
      <Container fluid className="vheight-100">
        <Row>
          <Col sm={3} className="collapse d-sm-block d-none bg-light below-nav" id="left-sidebar">
            <ListGroup variant="flush">
              <ListGroup.Item className="list-item active">All</ListGroup.Item>
              <ListGroup.Item className="list-item">Important</ListGroup.Item>
              <ListGroup.Item className="list-item">Today</ListGroup.Item>
              <ListGroup.Item className="list-item">Next 7 days</ListGroup.Item>
              <ListGroup.Item className="list-item">Private</ListGroup.Item>
            </ListGroup>
          </Col>
          
          <Col sm={12}>
            
          </Col>

          <Col>
            <img className="bottomRight" src={floating} alt="plus_sign" />
          </Col>

        </Row>
      
      </Container>


    </>
  );
}

export default App;
