import { NavLink } from 'react-router-dom'
import { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import Slide from 'react-reveal/Slide';
import ScrollToTop from 'react-scroll-up'
import React, { useState, useEffect } from 'react';
import ProgressBar from "react-scroll-progress-bar";
import Pulse from 'react-reveal/Pulse';
import logoGit from '../img/pngegg.png'
import logoLinkedin from '../img/linkedin.png'
import { slide as BurgerMenu } from 'react-burger-menu';
import { Triangle } from 'react-loader-spinner'
import BackgroundImage from '../img/background.jpg'

const MainAccueil = () => {

    const [loader, setLoader] = useState(true)
    useEffect(() => {

        setTimeout(() => {
            setLoader(false)
        }, 3000)
    })

    useEffect(() => {
        document.title = 'Accueil';
    }, []);

    const refprojet_container = useRef(null);

    const handleClick = () => {
        refprojet_container.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const refservice_Service_Container = useRef(null);

    const handleClickrefservice_Container = () => {
        refservice_Service_Container.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const refservice_Contact_Container = useRef(null);

    const handleClickrefContact_Container = () => {
        refservice_Contact_Container.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return loader ?
        (
            <div className='Loader'>
                <Triangle
                    height="180"
                    width="180"
                    color="cornflowerblue"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        )
        :
        (
            < main >
                <div className="nav">
                    <BurgerMenu right className="menu-fixed">
                        <button className='button_menu' onClick={handleClick} >Projets</button>
                        <button className='button_menu' onClick={handleClickrefservice_Container} >Services</button>
                        <button className='button_menu' onClick={handleClickrefContact_Container} >Contact</button>
                    </BurgerMenu>
                </div>
                <ProgressBar className="ProgressBar" height="3px" bgcolor="cornflowerblue" duration="0.2" />
                <header className="MainAccueil">
                    <div className="Navigation_Container">
                        <div className='title_and_ligne'>
                            <Slide left>
                                <h1 className="titre_page">Jordan Zerbib</h1>
                                <div className='ligne'></div>
                            </Slide >
                        </div>
                        <span className='arrowtopup'>
                            <ScrollToTop showUnder={750}>
                                <FontAwesomeIcon icon={faCircleArrowUp} />
                            </ScrollToTop>
                        </span>
                        <ul className="menu">
                            <li onClick={handleClick} className="menu_item">
                                Projets
                            </li>
                            <li onClick={handleClickrefservice_Container} className="menu_item">
                                Services
                            </li>
                            <li onClick={handleClickrefContact_Container} className="menu_item">
                                Contact
                            </li>
                            <a target="_blank" href="https://github.com/JordanFox38160/"><li className="menu_item">
                                Github
                            </li>
                            </a>
                        </ul>
                    </div>

                    <div className="MainAccueil">
                        <div className='MainAccueil_Container'>
                            <div className='section_text'>
                                <h2 className='title_content'>Hey, je suis Jordan.</h2>
                                <span className='Typewriter' style={{ color: 'white', fontWeight: '600' }}>
                                    <Typewriter
                                        words={['Developper Front-End', 'Developper Back-End', 'Intégrateur Web',]}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={30}
                                        delaySpeed={1000}
                                    />
                                </span>
                                <p className='text_content'>Du code sur mesure pour donner vie à vos projets web : développeur React/HTML/CSS/JavaScript dans la région de l'Isère, prêt à collaborer avec vous.</p>
                                <button onClick={handleClick} className='my_project'>Mes projets</button>
                            </div>
                            <Pulse >
                                <div className='section_text'>
                                    <h4 className='text_j'>J</h4>
                                </div>
                            </Pulse>
                        </div>
                        <Pulse forever={true} duration={1300} delay={1000} >
                            <FontAwesomeIcon onClick={handleClick} className='arrow_down' icon={faArrowAltCircleDown} />
                        </Pulse>
                    </div>

                    <div ref={refprojet_container} className='main_container'>
                        <div>
                            <h1>Mes projets :</h1>
                        </div>
                        <div className='projet_container'>
                            <a target="_blank" href="https://github.com/JordanFox38160/P7-Groupomania"><div className='item'>
                                <div className='texte_container'>
                                    <h1>Groupomania</h1>
                                    <p>Front / Back (React, JS, HTML, CSS, Node.JS, API) </p>
                                </div>
                            </div>
                            </a>
                            <a target="_blank" href="https://github.com/JordanFox38160/P6-Piiquante"><div className='item'>
                                <div className='texte_container'>
                                    <h1>Piiquante</h1>
                                    <p>Back (JS, Node.JS, Création et gestion d'API)</p>
                                </div>
                            </div>
                            </a>
                            <a target="_blank" href="https://github.com/JordanFox38160/P5-Kanap"><div className='item'>
                                <div className='texte_container'>
                                    <h1>Kanap</h1>
                                    <p>Front JS (JS, HTML, CSS)</p>
                                </div>
                            </div>
                            </a>
                            <a target="_blank" href="https://github.com/JordanFox38160/P4-La-Chouette-Agence"><div className='item'>
                                <div className='texte_container'>
                                    <h1>La Chouette Agence</h1>
                                    <p>Front  (SEO) </p>
                                </div>
                            </div>
                            </a>
                            <a target="_blank" href="https://github.com/JordanFox38160/P3-Oh-My-Food"><div className='item'>
                                <div className='texte_container'>
                                    <h1>Oh My Food</h1>
                                    <p>Front (HTML, CSS + Animation)</p>
                                </div>
                            </div>
                            </a>
                            <a target="_blank" href="https://github.com/JordanFox38160/P2-Reservia"><div className='item'>
                                <div className='texte_container'>
                                    <h1>Reservia</h1>
                                    <p>Front (HTML, CSS) </p>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div ref={refservice_Service_Container} className="service_Container">

                        <div className='text_flex'>
                            <div className='service_section_text'>
                                <span className='TypewriterTitle' style={{ color: 'white', fontWeight: '600' }}>
                                    <Typewriter
                                        words={["Développement d'applications web sur mesure.", "Des solutions pour vos projets", 'Des développements web adaptés à vos objectifs professionnels', 'Applications web personnalisées pour vos projets.']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={50}
                                        deleteSpeed={30}
                                        delaySpeed={5000}
                                    />
                                </span>
                                <p className='service_text_content'>Je peux créer des applications web personnalisées en utilisant les dernières technologies de développement web telles que React, HTML, CSS et JavaScript. Je suis en mesure de comprendre vos besoins et de les traduire en une application web professionnelle, intuitive et conviviale pour les utilisateurs. Que ce soit une application web complète ou un simple composant, je suis là pour vous aider à donner vie à votre projet.</p>
                                <div className='technologie_container'>
                                    <ul>
                                        <li>React / </li>
                                        <li>HTML / </li>
                                        <li>CSS / </li>
                                        <li>JavaScript</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={refservice_Contact_Container} className='contact_container'>
                        <div className='info_container'>
                            <h3 className='contact_title'>Contact :</h3>
                            <div className='input_container'>
                                <h4>Nom :</h4>
                                <input type='text' className='input_form'></input>
                            </div>
                            <div className='input_container'>
                                <h4>E-mail :</h4>
                                <input type='email' className='input_form'></input>
                            </div>
                            <div className='input_container'>
                                <h4>Message :</h4>
                                <textarea type='text' className='input_form_message'></textarea>
                            </div>
                            <button className='send_button'>Envoyez</button>
                        </div>
                        <div className='info_container'>
                            <h3>E-mail :</h3>
                            <a href="mailto:Jordan.zerbib38000@gmail.com?subject=Sujet text">Jordan.zerbib38000@gmail.com</a>

                            <h3>Numéro de téléphone :</h3>
                            <p>06 52 76 87 16</p>

                            <div className='reseau_logo'>
                                <h3>Réseaux :</h3>
                                <div className='logo'>
                                    <img className='logo_icon' src={logoGit}></img>
                                    <img className='logo_icon' src={logoLinkedin}></img>
                                </div>
                            </div>

                        </div>
                    </div>

                    <footer>
                        <p>Tous droits réservés &copy; Jordan Zerbib</p>
                    </footer>

                </header>
            </main >

        );
};

export default MainAccueil;