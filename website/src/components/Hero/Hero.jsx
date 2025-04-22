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
                <button onClick={() => {setActiveModal('modal1')}}>LISTEN NOW</button>
                <button onClick={()=> {setActiveModal('modal2')}}>PURCHASE NOW</button>
                <button onClick={()=> {setActiveModal('modal3')}}>BLAKK'S NOTES</button>
            </div>
                <Modal className='modal--container' show={activeModal === 'modal1'} onHide={()=>setActiveModal(null)} centered>
                    
                    <Modal.Body className='modal--body'>
                        <figure className='modal--figure'>
                            <a href="https://open.spotify.com/artist/0NbfqAkLJq6uLLCKKY3u2l?si=zdGhAIiCScWsrIrA1ydB3A"><img src={Spotify} alt="Spotify" /></a>
                            <a href="https://music.apple.com/ca/artist/josh-blakk/975655321"><img src={Apple} alt="Apple" /></a>
                            <a href="https://listen.tidal.com/artist/6673333"><img src={Tidal} alt="Tidal" /></a>
                            <a href="https://music.amazon.ca/artists/B00UIKSKIQ/josh-blakk?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=CA&ref=dm_sh_iIgEtBtQWUSuHnBd3fTgeNrm0"><img src={Amazon} alt="Amazon" /></a>
                            <a href="https://www.deezer.com/en/artist/7662430"><img src={Deezer} alt="Deezer" /></a>
                            <a href="https://www.youtube.com/channel/UCczQc6miou4VBv2vB2w6xdQ"><img src={YouTube} alt="YouTube" /></a>
                            <a href="https://web.napster.com/artist/art.5941693248710897"><img src={Naps} alt="Napster" /></a>
                            <a href="https://www.boomplay.com/share/artist/207359"><img src={BoomPlay} alt="BoomPlay" /></a>
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