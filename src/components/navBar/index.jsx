import  { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import './styles.scss';

const data = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About Me',
        to: '/about'
    },
    {
        label: 'Resume',
        to: '/resume'
    },
    {
        label: 'Skills',
        to: '/skills'
    },
    {
        label: 'Portfolio',
        to: '/portfolio'
    },
    {
        label: 'Contact',
        to: '/contact'
    }
]

const Navbar = () => {
    const [toggleicon, setToggleicon] = useState(false);
    const handleToggleicon = () => {
        setToggleicon(!toggleicon);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to={'/'} className="navbar__container__logo">
                     C H I K R A B A N E
                </Link>
                
                <ul className={`navbar__container__menu ${toggleicon ? "active" : ""}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar__container__menu__item">
                            <Link className="navbar__container__menu__item__links" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-icon" onClick={handleToggleicon}>
                    {toggleicon ? <HiX size={30} /> : <FaBars size={30}/>}
                </div>
            </div>
        </nav>
    ); 
};

export default Navbar;