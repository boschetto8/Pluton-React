import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand href="#home">Escape a Plutón</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#books">Libros</Nav.Link>
                        <Nav.Link href="#contact">Carrito</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
                     
        </div>
    )
}

export default NavBar


