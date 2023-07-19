import React, { useState } from 'react'
import './navbarStyles.css'
import { Navbar, Nav, NavDropdown, Button, NavLink, Modal } from 'react-bootstrap';
import imgLogo from '../../assets/img/Logo.jpg'
import { ModalContratame } from '../Modal/ModalContratame';


export const NavbarMemento = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);
  return (
    <Navbar className='containerPrincipalNav'>
      <div className="d-flex align-items-center imgTitlePrincipalNav">
        <img className='logoImgNav' src={imgLogo} alt="Logo" />
        <Navbar.Brand href="/home" className="ml-2">Memento Coding</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/projects">Proyectos</Nav.Link>
          <Nav.Link href="/aboutMe">Sobre mí</Nav.Link>
          <Nav.Link href="/contacts">Contacto</Nav.Link>
        </Nav>
        <div className="d-flex align-items-center">
        <Nav>
        <Button onClick={abrirModal} className='btnNavbar' variant="primary">Contratame</Button>
        <Modal show={mostrarModal} onHide={cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>¿Qué proyecto buscas?</Modal.Title>
        </Modal.Header>
        <ModalContratame/>
        <Modal.Footer>
          <Button variant="primary" onClick={cerrarModal}>
          Enviar Solicitud
          </Button>
        </Modal.Footer>
      </Modal>
        </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}






