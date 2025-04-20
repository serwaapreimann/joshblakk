import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../../components/Logo/Logo';
import './Home.scss';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.scss';


export default function Home(){
    
    return (
       <div className='home--container'>
            <div className='hamburger--menu'>
                <Hamburger className="hamburger--icon"/>
                <Logo className="logo"/>
                <Navigation/>
            </div>
            
            <div className='hero--section'>
                <Hero className="hero--text-small hero--text-large"/>
            </div>
            <div className="footer--section">
                <Footer/>
            </div>
            

       </div>
    )
}