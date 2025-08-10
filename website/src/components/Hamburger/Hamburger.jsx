import React, { useState} from 'react';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import './Hamburger.scss';
import Modal from 'react-bootstrap/Modal';
import '../../components/Hero/Modal.scss';


export default function Hamburger (){
    const [isOpen, setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <img onClick={toggleMenu} className='hamburger--icon' src={hamburgerIcon} alt="Menu" />

            {isOpen && (
                <div className='hamburger--overlay' onClick={toggleMenu}>
                    <nav className='hamburger--content' onClick={(e) => e.stopPropagation()}>
                        <button className='hamburger--close' onClick={toggleMenu} aria-label='Close'>
                            x
                        </button>
                        <ul>
                            <li onClick={() => { setActiveModal('modal1') }}>BIOGRAPHY</li>
                            <li><a href="https://bnds.us/cezeiy" target="_blank" rel="noopener noreferrer"> SHOWS</a></li>
                            <li onClick={() => { setActiveModal('modal3') }}>CONNECT</li>
                        </ul>
                    </nav>

                    <Modal className='modal--container' show={activeModal === 'modal1'} onHide={() => setActiveModal(null)} centered>
                        <Modal.Body className='modal--body'>
                            <h3>Biography</h3>
                            <p>As Josh Blakk’s musical journey evolved, so did his ambition to break boundaries and explore new creative heights. Rooted in the vibrant rhythms of Accra, his eclectic sound blends Afrobeat, soul, and highlife, infused with his unique cultural background. Collaborating with artists from diverse musical traditions expanded his artistic range, allowing him to craft a signature style that defies genre limits. Known for his dynamic live performances, Josh uses both music and storytelling to create immersive experiences, with each song serving as a deeply personal expression. His project "Luminis," dedicated to his wife, highlights the emotional depth of his work and reflects his dream of reaching global stages like the Grammys.</p>
                            <p>Josh’s desire to innovate led to the formation of the Waakye Band, a collective that introduced "High Soul," a seamless blend of Highlife and Soul music. Through this collaboration, he continues to experiment and push creative limits, resonating with audiences both locally and internationally. Beyond personal success, Josh is driven by a passion to shape the future of music, challenge conventions, and leave a lasting legacy. His commitment to musical excellence and fearless self-expression inspires others to embrace their artistry without limitations, making him a powerful voice in the global music landscape.</p>                        </Modal.Body>
                    </Modal>

                    <Modal className='modal--container' show={activeModal === 'modal3'} onHide={() => setActiveModal(null)} centered>
                        <Modal.Body className='modal--body' closeButton>
                            <h3>For Booking & Inquiries: </h3>
                            <p>joshblakkmusic@gmail.com</p>
                        </Modal.Body>
                    </Modal>
                </div>
            )}
        </div>
    );
}
