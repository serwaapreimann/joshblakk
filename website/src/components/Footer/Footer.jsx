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
                        <a href="https://x.com/joshblakk">
                            <img src={X} alt="X" />
                        </a>
                        <a href="https://www.facebook.com/JoshBlakkMusic/">
                            <img src={Facebook} alt="Facebook" />   
                        </a>
                        <a href="https://www.instagram.com/joshblakk/">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="https://snapchat.com/t/N4JqqrpL">
                            <img src={SnapChat} alt="Snap" />
                        </a>
                        <a href="https://www.tiktok.com/@joshblakk">
                            <img src={TikTok} alt="TikTok" />
                        </a>         
            </figure>
            <div className="footer--credits">
                <p> <a href="https://www.excellentiastudios.ca">Excellentia Studios</a></p>
            </div>
            
        </div>
    )
}