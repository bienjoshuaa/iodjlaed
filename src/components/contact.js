import React, { useEffect, useState } from 'react';
import '../css/contact.css'; // Ensure the CSS file is imported

const Contact = () => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true); // When the footer section comes into view
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
            observer.observe(contactSection);
        }

        return () => {
            if (contactSection) {
                observer.unobserve(contactSection);
            }
        };
    }, []);

    return (
        <section
            id="contact"
            className={`contact-section ${inView ? 'in-view' : ''}`}
        >
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-description">
                Feel free to reach out to me for any inquiries, collaborations, or feedback. I look forward to connecting with you!
            </p>
            <div className="contact-info">
                <p>Email: <a href="mailto:mbjienjoshua@gmail.com">mbjienjoshua@gmail.com</a></p>
                <p>Phone: <a href="tel:+639662874088">0966 287 4088</a></p>
            </div>
            <div className="contact-icons">
                <a href="mailto:mbjienjoshua@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </section>
    );
};

export default Contact;
