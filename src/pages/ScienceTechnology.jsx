import React from 'react';
import '../Main.css';

function ScienceTechnology() {
    const scrollToSection = () => {
        document.getElementById("book-list").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="ScienceTechnology">
            <header>
                <h1>Top 5 Science & Technology Books to Read</h1>
                <p>Expand your knowledge with these must-read books on science and technology.</p>
                <button onClick={scrollToSection}>Learn More</button>
            </header>

            <section id="book-list">
                <h2>Our Top Picks</h2>

                <div className="book">
                    <h3>A Brief History of Time</h3>
                    <p> A fascinating journey into black holes, the universe, and the nature of time.</p>
                    <img src="/images/briefhistory.jpg" alt="A Brief History of Time Book"  />
                    <a href="https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>The Innovators</h3>
                    <p>The story of the pioneers who created the computer and the internet.</p>
                    <img src="/images/innovators.jpg" alt="The Innovators Book" />
                    <a href="https://www.amazon.com/The-Innovators-Walter-Isaacson-audiobook/dp/B00M9KICAY?crid=1V0N3WW4UVJJF&dib=eyJ2IjoiMSJ9.CeVRQOV_zqXkDBvIBZZFaBi75UpqRqPCina3b4gacWngKiaBA_whWsI05fUXykW1osfDJQHhGkhSm8D5hxEQHxogc_UgwawkaFQdr-TqmrCkd5Hj2nmS3xTxGDq86N3uNp-EX9r8G45x3LdfgjS6tMaZOEIeZwGCNLyFppPn1dU9phvaA8tCjjPWb-vUOGIC7xayl3DLKoruvstw5IhKaLHhQDHo8W1LQyJzG0N8RFs.YSFBGEBFnprixeQoeNn8M6NaHTtRvdtqHdKgg-ymctc&dib_tag=se&keywords=the+innovators+walter+isaacson&qid=1738945397&sprefix=The+Innovators+walter%2Caps%2C153&sr=8-1" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>The Singularity Is Near</h3>
                    <p>An exploration of artificial intelligence and the future of human evolution.</p>
                    <img src="/images/singularity.jpg" alt="The Singularity Is Near Book"  />
                    <a href="https://www.amazon.com/Singularity-Near-Humans-Transcend-Biology/dp/0670033847" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>Astrophysics for People in a Hurry</h3>
                    <p>A fun, quick read that explains the mysteries of the cosmos.</p>
                    <img src="/images/astrophysics.jpg" alt="Astrophysics for People in a Hurry Book" />
                    <a href="https://www.amazon.com/Astrophysics-People-Hurry-deGrasse-Tyson/dp/0393609391" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>The Code Breaker"</h3>
                    <p>A deep dive into CRISPR gene editing, biotechnology, and how it’s shaping the future of science.</p>
                    <img src="/images/codebreaker.jpg" alt="The Code Breaker Book" />
                    <a href="https://www.amazon.com/Code-Breaker-Jennifer-Doudna-Editing/dp/1982115858" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>
            </section>

            <footer>
                <p>&copy; 2025 Your Name. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default ScienceTechnology;