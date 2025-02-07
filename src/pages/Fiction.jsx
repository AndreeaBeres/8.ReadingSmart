import React from 'react';
import '../Main.css';

function Fiction() {
    const scrollToSection = () => {
        document.getElementById("book-list").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="Fiction">
            <header>
                <h1>Top 5 Fiction Books You Must Read</h1>
                <p>Explore some of the best fictional works that have captivated readers worldwide.</p>
                <button onClick={scrollToSection}>Learn More</button>
            </header>

            <section id="book-list">
                <h2>Our Top Picks</h2>

                <div className="book">
                    <h3>The Great Gatsby</h3>
                    <p>A classic novel of the American dream and the Jazz Age, filled with passion and tragedy.</p>
                    <img src="/images/gatsby.jpg" alt="The Great Gatsby" />
                    <a href="https://www.amazon.com/Great-Gatsby-Original-Fitzgerald-Classic/dp/B0BF3P5XZS?dib=eyJ2IjoiMSJ9.oF-yws3iJXFTYaYx2asgP1oLsOD1aO3KjcKx4yz1XaDr6UYHPGmLxuKukjXJeb-SQAFp7tweVZN2l-HA-JM9_gN8_jJA6hBvBuvG9MnsOzH3m9eOvCyre9nM2l2Cuz5ltx8eTzjT-YsV-mxgUm2HAsFvnWEmUwaeBJdEaLeAIM-kKgNLJ7-mYlUffsvc_929-3tKCI1jKzEP2BeiGXiWMziPcmDj9IgjkabsXjLhQxk.9zEI_e4kjJznCu-IR-PjlFI4ACaQcZ-1Bvq3pgmaQ5w&dib_tag=se&keywords=the+great+gatsby&qid=1738934743&sr=8-3" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>To Kill a Mockingbird</h3>
                    <p>This Pulitzer Prize-winning novel explores racism and innocence through the eyes of a young girl.</p>
                    <img src="/images/mockingbird.jpg" alt="To Kill a Mockingbird" />
                    <a href="https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0060935464" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>1984</h3>
                    <p>A chilling dystopian novel that critiques government surveillance and the erosion of individual freedom.</p>
                    <img src="/images/1984.jpg" alt="1984" />
                    <a href="https://www.amazon.com/1984-George-Orwell/dp/1328869334" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>Pride and Prejudice</h3>
                    <p>A beloved romance and social commentary that has stood the test of time, blending wit and insight.</p>
                    <img src="/images/prideprejustice.jpg" alt="Pride and Prejudice" />
                    <a href="https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/8172344503" target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order Now</button>
                    </a>
                </div>

                <div className="book">
                    <h3>The Catcher in the Rye</h3>
                    <p>J.D. Salinger's famous coming-of-age novel, filled with themes of alienation and youthful rebellion.</p>
                    <img src="/images/catcher_rye.jpg" alt="The Catcher in the Rye" />
                    <a href="https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487" target="_blank" rel="noopener noreferrer">
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

export default Fiction;