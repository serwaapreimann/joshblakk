import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import './Modal.scss';
import Spotify from '../../assets/icons/spotify.webp';
import Apple from '../../assets/icons/apple music.svg';
import Tidal from '../../assets/icons/tidal.svg';
import Amazon from '../../assets/icons/amazon music.svg';
import Deezer from '../../assets/icons/deezer.svg';
import YouTube from '../../assets/icons/yt.svg';
import BoomPlay from '../../assets/icons/boomplay.webp';
import BeatPort from '../../assets/icons/beatport.svg';
import Seven from '../../assets/icons/7.webp';
import QoBuz from '../../assets/icons/qobuz.webp';
import Naps from '../../assets/icons/naps.webp';
import './Hero.scss';

export default function Hero (){

    const [activeModal, setActiveModal] = useState(null);

    return (
        <div className='hero--container'>
            <h1>CATCH-22</h1>
            <div className='button-container'>
                <button onClick={() => { setActiveModal('modal1')}}>LISTEN NOW</button>
                <button onClick={()=> setActiveModal('modal2')}>PURCHASE NOW</button>
                <button onClick={()=> setActiveModal('modal3')}>ALBUM INSPIRATION</button>
            </div>
                <Modal className='modal--container' show={activeModal === 'modal1'} onHide={()=>setActiveModal(null)} centered>
                    
                    <Modal.Body className='modal--body'>
                        <figure className='modal--figure'>
                            <img src={Spotify} alt="Spotify" />
                            <img src={Apple} alt="Apple" />
                            <img src={Tidal} alt="Tidal" />
                            <img src={Amazon} alt="Amazon" />
                            <img src={Deezer} alt="Deezer" />
                            <img src={YouTube} alt="YouTube" />
                            <img src={Naps} alt="Napster" />
                            <img src={BoomPlay} alt="BoomPlay" />
                        </figure>
                    </Modal.Body>
                </Modal>

                <Modal show={activeModal === 'modal2'} onHide={()=>setActiveModal(null)} centered>
                    <Modal.Body className='modal--body'>
                    <figure className='modal--figure-1'>
                            <img src={Apple} alt="Apple" />
                            <img src={Amazon} alt="Amazon" />
                            <img src={QoBuz} alt="QoBuz" />
                            <img src={BeatPort} alt="Beatport" />
                            <img src={Seven} alt="7Digital" />

                        </figure>
                    </Modal.Body>
                </Modal>

                <Modal show={activeModal === 'modal3'} onHide={()=>setActiveModal(null)} centered>
                    <Modal.Body className='modal--body'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sed quis placeat tenetur dolores pariatur earum molestiae distinctio a, architecto autem dolorem ab saepe nostrum ipsam repellendus nihil rerum culpa.
                    </p>
                    </Modal.Body>
                </Modal>
            </div>
    )
}