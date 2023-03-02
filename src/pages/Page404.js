import React from 'react';
import '../style/index.css';
import Navigation from '../components/navigation'
import Page404 from '../components/page404'

const Accueil = () => {
    return (
        <main className='accueil'>
            <Page404 />
        </main>
    );
};
export default Accueil;