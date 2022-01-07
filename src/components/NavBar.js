import React, { useState } from 'react'
import {Navbar,Container,Nav,Form,FormControl,Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


function NavBar({filter}) {
    const [rating, setRating] = useState(0)
    
    const [title, setTitle] = useState('')
    return (
        <div>
        <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/">Home</Link>
                        <Link to="/about-us">About-us</Link>
                        <Link to="/contact-us">Contact-us</Link>

                        
                    </Nav>
                    <ReactStars
                        count={5}
                        onChange={(x)=>setRating(x)}
                        size={24}
                        activeColor="#ffd700"
                    />,
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                        
                    </Form>
                    <Button onClick={()=>filter(rating,title)}>Search</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </div>
    )
}

export default NavBar
