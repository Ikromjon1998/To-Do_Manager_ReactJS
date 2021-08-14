import { Navbar, Form, FormControl, Container, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function Logo(){
    return (
        <Navbar.Brand style={{color: "white"}} href="index.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-check-all" viewBox="0 0 16 16">
                    <path d="M8.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
            </svg> ToDo Manager
        </Navbar.Brand>
    );
}

function User(){
    return (
        <Navbar.Brand className="justify-content-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
        </Navbar.Brand>
    );
}
function SearchForm(){
    return (
        <Form inline className='d-none d-sm-block justify-content-center'>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
        </Form> 
    );
}

const Navigation = () => {
    return (
        <Navbar className="navigation" expand="sm" fixed="top">
            <Container fluid >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Logo />
                <SearchForm />
                <User />

                
            </Container>

            <Navbar.Collapse id="responsive-navbar-nav" />
        </Navbar>
    )
    
}

export default Navigation