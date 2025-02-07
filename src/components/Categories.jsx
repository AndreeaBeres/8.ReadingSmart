import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <section id="categories">
            <h2>Book Categories</h2>
            <div className="category">
                <h3><Link to="/fiction">Fiction</Link></h3>
                <p>Enhances creativity and empathy through storytelling.</p>
                <img src="images/fiction_image.jpg" alt="Fiction books" />
            </div>
            <div className="category">
                <h3><Link to="/nonfiction">Non-Fiction</Link></h3>
                <p>Expands knowledge and real-world understanding.</p>
                <img src="images/nonfiction_image.jpeg" alt="Non-fiction books" />
            </div>
            <div className="category">
                <h3><Link to="/selfimprovement">Self-Improvement</Link></h3>
                <p>Develops skills and personal growth strategies.</p>
                <img src="images/self_improvement_image.jpg" alt="Self-improvement books" />
            </div>
            <div className="category">
                <h3><Link to="/sciencetechnology">Science & Technology</Link></h3>
                <p>Encourages critical thinking and innovation.</p>
                <img src="images/science_tech_image.jpg" alt="Science and Technology books" />
            </div>
        </section>
    );
};

export default Categories;