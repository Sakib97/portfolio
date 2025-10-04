import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import useScrollDirection from '../../hooks/useScrollDirection';
import { useState } from 'react';
// import styles from "../../features/styles/NavigationBar.module.css";
import styles from "../styles/Navbar.module.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
    // Offcanvas state
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showNavbar = useScrollDirection();
    return (
        <div>
            <Navbar bg="light" expand="lg"
                // className="shadow-sm mb-3"
                className={`shadow-sm fixed-top ${showNavbar ? styles.navbarShow : styles.navbarHide}`}>
                <Container>
                    <Navbar.Brand as={Link} to="/">Ashek Seum</Navbar.Brand>

                    <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar-expand-lg" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="end"
                        show={show}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton onHide={handleClose} className="justify-content-center">
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav style={{ fontSize: '1.1rem' }}
                                className="
                                    ms-auto        /* push to right on large screens */
                                    flex-lg-row    /* horizontal on large screens */
                                    flex-column    /* vertical on small screens */
                                    align-items-lg-end  /* right align on large */
                                    align-items-center  /* center align on small */
                                    gap-1
                                "
                            >
                                <Nav.Link onClick={handleClose} as={Link} to="/">Home</Nav.Link>
                                {/* <Nav.Link onClick={handleClose} href="#about">About</Nav.Link> */}
                                <Nav.Link onClick={handleClose} as={Link} to="/publications#publications">Publication</Nav.Link>
                                <Nav.Link onClick={handleClose} as={Link} to="/education#education">Education</Nav.Link>
                                <Nav.Link onClick={handleClose} as={Link} to="/projects#projects">Projects</Nav.Link>
                                {/* {user ? (
                                    <Nav.Link onClick={handleClose} as={Link} to="/dashboard/profile">{user.user_metadata.full_name || "User"}</Nav.Link>
                                ) : (
                                    <Nav.Link onClick={handleClose} as={Link} to="/auth/signin">Sign In</Nav.Link>
                                )} */}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>
    );
}

export default NavigationBar;