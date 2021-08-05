import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, ListGroup, FormControl, Form, Navbar } from 'react-bootstrap/';
import floating from './plus.png';
import './App.css';
import './main.css'

function App() {
  return (
    <>
      <Navbar className="navigation" expand="sm" fixed="top">
        <Container fluid >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Brand style={{ color: 'white' }} href='#'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-check-all" viewBox="0 0 16 16">
                    <path d="M8.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
            </svg> ToDo Manager 
          </Navbar.Brand>

          <Form inline className="d-none d-sm-block justify-content-center">
            <FormControl type="text" placeholder="Quick search!" className="mr-sm-2" />
          </Form>

          <Navbar.Brand className="justify-content-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
          </Navbar.Brand>

        </Container>

        <Navbar.Collapse id="responsive-navbar-nav">
        </Navbar.Collapse>


      </Navbar>
      
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
            {/* <h1>All</h1>
            <ListGroup variant="flush">
              <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                  <label class="form-check-label" for="defaultCheck1">
                    Complete Lab 2 
                  </label>
                </div>
                
                <span>Monday 22 March 2021 at 14:30</span>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                  <label class="form-check-label" for="defaultCheck1">
                    Buy some groceries
                  </label>
                </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <span>Today</span>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                  <label class="form-check-label important" for="defaultCheck1">
                    Read a good book
                  </label>
                </div>
                <span>Saturday 17 April 2021 at 13:00</span></ListGroup.Item>
            </ListGroup> */}
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
