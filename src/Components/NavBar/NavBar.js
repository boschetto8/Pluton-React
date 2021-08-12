import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'



function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    
                    <br/>
                        <Navbar.Brand href="#home">Escape a Plutón <CartWidget/></Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#books">Libros</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                            
                            
                        </Nav>
                        
                </Container>
                 
            </Navbar>
                     
        </div>
    )
}

export default NavBar


