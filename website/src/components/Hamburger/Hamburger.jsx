import React, {useState} from 'react';
import hamburgerIcon from '../../assets/icons/music (2).svg';
import './Hamburger.scss';

export default function Hamburger (){
    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu =() =>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
            
                <img onClick = {toggleMenu} className='hamburger--icon' src={hamburgerIcon} alt="Menu" />
            

            {isOpen && (
                <div className='hamburger--overlay' onClick={toggleMenu}>
                    <nav className='hamburger--content' onClick={(e) => e.stopPropagation()}>
                    <button className='hamburger--close' onClick={toggleMenu} aria-label='Close'>
                            x
                        </button>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Connect</a></li>
                        </ul>
                    </nav>
                </div>
            ) }

        </div>
    );
}


