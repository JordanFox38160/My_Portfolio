import { NavLink } from 'react-router-dom'

const Page404 = () => {
    return (
        <header className="page404_container">
            <div className="lamp_container">
                <div className="lamp_pied">
                </div>
                <div className="lamp_tête">
                </div>
                <div class="glow">
                </div>
            </div>
            <div class="texte_not_found">
                <NavLink to={"/Accueil"}>
                    <h1>404 not found.</h1>
                    <p>Accueil</p>
                </NavLink>
            </div>
        </header >
    );
};

export default Page404;