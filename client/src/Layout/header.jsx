import './header.css';
import companyLogo from '../assets/brand-name.jpg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ()=>{
    
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary header" sticky="top" >
                <Navbar.Brand href="#home">
                    <img src={companyLogo}  width="200" height="65"  className="d-inline-block align-top" alt="EFDS"/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div className='bar'>
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Get Involve</Nav.Link>
                        <Nav.Link href="#link">Forum</Nav.Link>
                        <Nav.Link href="#link">Contact us</Nav.Link>
                        <Nav.Link href="/login"><div className='button'><h>Sign In</h></div></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;