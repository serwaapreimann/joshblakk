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
                <button onClick={()=> setActiveModal('modal3')}>BLAKK'S NOTES</button>
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
                    Catch-22 is more than just an album — it’s a 13-track love odyssey, dropping May 23rd, 2025. Woven across two years and two cities — the vibrant streets of Lagos and the soulful heart of Accra — this project tells the story of love’s sweet contradictions: where it holds you close, tears you apart, sets you free, and pulls you back in. Blending the deep grooves of HighSoul, the raw heart of Afro-Soul, the timeless swing of Highlife, the velvet touch of RnB, and the pulse of Afrobeats, Catch-22 spins the soundtrack of a heart caught in the crossfire. From the first note to its live debut on May 24th, every track is a chapter in love’s wild, unshakable tale.                    </p>
                    </Modal.Body>
                </Modal>
            </div>
    )
}