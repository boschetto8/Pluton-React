import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar,  Nav, Container } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import ShoppingCart from '../ShoppingCart/ShoppingCart'





const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">                
                    <Container>
                        <Navbar.Brand href="#home">Escape a Plutón <CartWidget/></Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#books">Libros</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>                
                            
                        </Nav>
                    </Container>   
                         <ShoppingCart />
                         
                               
                
                 
                
            </Navbar>
                     
        </div>
    )
}

export default NavBar


