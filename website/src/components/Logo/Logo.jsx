import './Logo.scss';
import LogoImage from '../../images/Josh Blakk.svg'

export default function Logo (){
    return (
        <>
            <figure className='logo'>
                <img src={LogoImage} alt="Logo" />
            </figure>
        </>
    )
}