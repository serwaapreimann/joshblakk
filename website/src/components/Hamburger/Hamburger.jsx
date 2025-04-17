import React, {useState} from 'react';
import hamburgerIcon from '../../assets/icons/music (2).svg';
import './Hamburger.scss';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../../components/Hero/Modal.scss';


export default function Hamburger (){
    const [isOpen,setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);

    const toggleMenu =() =>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
            
                <img onClick = {toggleMenu} className='hamburger--icon' src={hamburgerIcon} alt="Menu" />
            

            {isOpen && (
                <div className='hamburger--overlay' onClick={toggleMenu}>
                    <nav className='hamburger--content' onClick={(e) => e.stopPropagation()}>
                    <button className='hamburger--close' onClick={toggleMenu} aria-label='Close'>
                            x
                        </button>
                        <ul>
                            <li onClick={() => { setActiveModal('modal1')}}>Bio</li>
                            <li onClick={() => { setActiveModal('modal2')}}>Events</li>
                            <li onClick={() => { setActiveModal('modal3')}}>Connect</li>
                            
                        </ul>

                    </nav>
                    <Modal className='modal--container' show={activeModal === 'modal1'} onHide={()=>setActiveModal(null)} centered>
                        <Modal.Body className='modal--body'>
                            <h3>Biography</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium impedit ut assumenda esse autem quibusdam aut velit a temporibus? Hic dolore debitis sequi id laboriosam quae a saepe dignissimos?</p>
                        </Modal.Body>
                    </Modal>

                    <Modal className='modal--container' show={activeModal === 'modal2'} onHide={()=>setActiveModal(null)} centered>
                        <Modal.Body className='modal--body'>
                            <h3>Upcoming Events</h3>
                            <Container className='modal--table'>
                                <Row>
                                    <Col>
                                        Location, Alliance Francais
                                    </Col>
                                    <Col xs={12} md={8}>
                                        .col-xs-12 .col-md-8
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                    </Modal>

                    <Modal className='modal--container' show={activeModal === 'modal3'} onHide={()=>setActiveModal(null)} centered>
                        <Modal.Body className='modal--body' closeButton>
                            <h3>For Booking & Inquiries: </h3>
                            <p>joshblakkmusic@gmail.com</p>
                        </Modal.Body>
                    </Modal>
                </div>
            ) }

        </div>
    );
}


