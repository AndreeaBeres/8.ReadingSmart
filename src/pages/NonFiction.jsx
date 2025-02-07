import React from 'react';
import '../Main.css';

function NonFiction() {
    const scrollToSection = () => {
        document.getElementById("book-list").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="NonFiction">
            <header>
                <h1>Top 5 Non-Fiction Books to Read</h1>
                <p>Explore the most impactful non-fiction books that will expand your knowledge and inspire your personal growth.</p>
                <button onClick={scrollToSection}>Learn More</button>
            </header>

            <section id="book-list">
                <h2>Our Top Picks</h2>

                <div className="book">
                    <h3>Sapiens: A Brief History of Humankind</h3>
                    <p> A deep dive into the history of humanity and its future.</p>
                    <img src="/images/sapiens.jpg" alt="Sapiens Book" />
                    <a href="https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>Educated</h3>
                    <p>A memoir about a woman who grows up in a strict family but escapes to gain an education.</p>
                    <img src="/images/educated.jpg" alt="Educated Book" />
                    <a href="https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>The Immortal Life of Henrietta Lacks</h3>
                    <p>The story of Henrietta Lacks, whose cells became the most important tool in medicine.</p>
                    <img src="/images/henrietta.jpg" alt="Henrietta Lacks Book" />
                    <a href="https://www.amazon.com/Immortal-Life-Henrietta-Lacks/dp/1400052181" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>Becoming</h3>
                    <p>The former First Lady's memoir on her life, education, and time in the White House.</p>
                    <img src="/images/becoming.jpg" alt="Becoming Book"  />
                    <a href="https://www.amazon.com/Becoming-Michelle-Obama/dp/1524763136" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>Thinking, Fast and Slow</h3>
                    <p>A look at how our minds work and how we make decisions</p>
                    <img src="/images/thinking.jpg" alt="Thinking, Fast and Slow Book"  />
                    <a href="https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555" target="_blank" rel="noopener noreferrer">
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

export default NonFiction;