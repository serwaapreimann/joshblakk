import React, {useState} from 'react';
import './Hamburger.scss';
import hamburgerIcon from '../../assets/icons/music (2).svg';
export default function Hamburger (){
    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu =() =>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
            
                <img onClick = {toggleMenu} className='hamburger--icon' src={hamburgerIcon} alt="Menu" />
            

            {isOpen && (
                <div className='hamburger--menu'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Tours</li>
                        <li>Connect</li>
                    </ul>


                </div>
            ) }

        </div>
    );
}


