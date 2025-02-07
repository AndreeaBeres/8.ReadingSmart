import React from 'react';

const Header = () => {
    const scrollToSection = () => {
        document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header>
            <h1>Can Reading Books Make Us Smarter?</h1>
            <p>Explore how different book genres contribute to intelligence and personal growth.</p>
            <button onClick={scrollToSection}>Learn More</button>
        </header>
    );
};

export default Header;