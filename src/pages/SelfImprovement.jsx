import React from 'react';
import '../Main.css';

function SelfImprovement() {
    const scrollToSection = () => {
        document.getElementById("book-list").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="SelfImprovement">
            <header>
                <h1>Top 5 Self-Improvement Books to Read</h1>
                <p>Discover the best self-improvement books to help you grow, stay motivated, and lead a fulfilling life.</p>
                <button onClick={scrollToSection}>Learn More</button>
            </header>

            <section id="book-list">
                <h2>Our Top Picks</h2>

                <div className="book">
                    <h3>Atomic Habits</h3>
                    <p> A guide to building good habits and breaking bad ones, with simple strategies for success.</p>
                    <img src="/images/atomic.jpg" alt="Atomic Habits Book" />
                    <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>The Power of Now</h3>
                    <p>A spiritual guide to understanding the importance of living in the present moment.</p>
                    <img src="/images/thepower.jpg" alt="The Power of Now Book" />
                    <a href="https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>The 7 Habits of Highly Effective People</h3>
                    <p>A timeless classic offering powerful principles for personal and professional effectiveness.</p>
                    <img src="/images/7habits.jpg" alt="7 Habits Book" />
                    <a href="https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/0743269519" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3> Grit: The Power of Passion and Perseverance</h3>
                    <p>An inspiring look at the power of passion and persistence for achieving success.</p>
                    <img src="/images/grit.jpg" alt="Grit Book"  />
                    <a href="https://www.amazon.com/Grit-Passion-Perseverance-Angela-Duckworth/dp/1501111108" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>You Are a Badass</h3>
                    <p>A motivational book to help you unleash your inner power and achieve your dreams.</p>
                    <img src="/images/youare.jpg" alt="You Are a Badass Book" />
                    <a href="https://www.amazon.com/You-Are-Badass%C2%AE-Doubting-Greatness/dp/0762447699" target="_blank" rel="noopener noreferrer">
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

export default SelfImprovement;