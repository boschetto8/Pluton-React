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
                        <Navbar.Brand href="/">Escape a Plutón <CartWidget/></Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/contact">Contacto</Nav.Link>
                            <Nav.Link href="/about">Nosotros</Nav.Link>                
                            
                        </Nav>
                    </Container>   
                         <ShoppingCart />
                         
                               
                
                 
                
            </Navbar>
                     
        </div>
    )
}

export default NavBar


