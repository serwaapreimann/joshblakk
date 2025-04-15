import './Footer.scss';
import Facebook from '../../assets/icons/facebook (1).svg';
import X from '../../assets/icons/twitter (2).svg';
import Instagram from '../../assets/icons/instagram (2).svg';
import SnapChat from '../../assets/icons/snapchat.svg';
import TikTok from '../../assets/icons/tik-tok.svg';



export default function Footer (){
    return (
        <div className='footer--container'>
            <figure className="social--media">
                     <img src={X} alt="X" />
                    <img src={Facebook} alt="Facebook" />  
                    <img src={Instagram} alt="Instagram" />
                    <img src={SnapChat} alt="Snap" />
                    <img src={TikTok} alt="TikTok" />
                    
            </figure>
            <div className="footer--credits">
                <p> Excellentia Studios</p>
            </div>
            
        </div>
    )
}