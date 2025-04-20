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
                        <li onClick={() => { setActiveModal('modal1')} } >BIOGRAPHY</li>
                        <li onClick={() => { setActiveModal('modal2')}}>EVENTS</li>
                        <li onClick={() => { setActiveModal('modal3')}}>CONNECT</li>
                    </ul>
                </nav>

                    <Modal className='modal--container' show={activeModal === 'modal1'} onHide={()=>setActiveModal(null)} centered>
                        <Modal.Body className='modal--body'>
                            <h3>Biography</h3>
                            <p>As Josh Blakk’s musical journey evolved, so did his ambition to break boundaries and explore new creative heights. Rooted in the vibrant rhythms of Accra, his eclectic sound blends Afrobeat, soul, and highlife, infused with his unique cultural background. Collaborating with artists from diverse musical traditions expanded his artistic range, allowing him to craft a signature style that defies genre limits. Known for his dynamic live performances, Josh uses both music and storytelling to create immersive experiences, with each song serving as a deeply personal expression. His project "Luminis," dedicated to his wife, highlights the emotional depth of his work and reflects his dream of reaching global stages like the Grammys.</p>
                            <p>Josh’s desire to innovate led to the formation of the Waakye Band, a collective that introduced "High Soul," a seamless blend of Highlife and Soul music. Through this collaboration, he continues to experiment and push creative limits, resonating with audiences both locally and internationally. Beyond personal success, Josh is driven by a passion to shape the future of music, challenge conventions, and leave a lasting legacy. His commitment to musical excellence and fearless self-expression inspires others to embrace their artistry without limitations, making him a powerful voice in the global music landscape.</p>
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