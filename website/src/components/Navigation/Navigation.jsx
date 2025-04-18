import "./Navigation.scss";
import '../../styles/partials/_fonts.scss';
import '../../styles/partials/_breakpoints.scss';
import React, {useState} from 'react';
import '../../components/Hero/Modal.scss';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';


export default function Navigation (){

    const [activeModal, setActiveModal] = useState(null);
    
    return (
        <div>
            <div className="navigation--links">
                <nav className="navigation--nav">
                    <ul className="navigation--links">
                        <li onClick={() => { setActiveModal('modal1')}}>BIOGRAPHY</li>
                        <li onClick={() => { setActiveModal('modal2')}}>EVENTS</li>
                        <li onClick={() => { setActiveModal('modal3')}}>CONNECT</li>
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
        </div>
    )
}