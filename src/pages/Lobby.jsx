import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import '../Lobby.css';

function Lobby() {
    return (
        <div className="Lobby">
            <Header />
            <Introduction />
            <Categories />
            <Footer />
        </div>
    );
}

export default Lobby;