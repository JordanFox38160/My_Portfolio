import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faMessage, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';

const Navigation = () => {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <header className="navigation">
            <div className="Navigation_Container">
                <div className='title_and_ligne'>
                    <div onClick={handleClick}>
                        <h1 className="titre_page">Jordan Zerbib</h1>
                        <div className='ligne'></div>
                    </div>
                    <div className='icone'>
                        <FontAwesomeIcon className='menu_icone' icon={faBars} />
                    </div>
                </div>
                <ul className="menu">
                    <li className="menu_item">
                        Accueil
                    </li>

                    <li className="menu_item">
                        Project
                    </li>
                    <li className="menu_item">
                        Services
                    </li>
                    <NavLink to={"/contact"}>
                        <li className="menu_item">
                            Contact
                        </li>
                    </NavLink>
                    <a target="_blank" href="https://github.com/JordanFox38160/"><li className="menu_item">
                        Github
                    </li>
                    </a>
                </ul>
            </div>
        </header>
    );
};

export default Navigation;