import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
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
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className= {`navbar__container__menu ${toggleicon ?"active":""}`}>
                    {
                        data.map((item, key) => (
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
            </nav>
        </div>
    ); 
};

export default Navbar;