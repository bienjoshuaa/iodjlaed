import React, { useEffect } from 'react';
import '../css/skills.css'; // Ensure you link to the updated CSS

const skillsData = [
  { name: 'JavaScript', icon: '🔹' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🌐' },
  { name: 'Express', icon: '📦' },
  { name: 'MongoDB', icon: '📊' },
  { name: 'CSS', icon: '🎨' },
  { name: 'HTML', icon: '📄' },
  // Add more skills as needed
];

const Skills = () => {
  useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // If the skill card is in view, add the class 'in-view'
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Stop observing after it's animated
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Observe all skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
      observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Technologies</h2>
      <p className="skills-description">
        A curated selection of the technologies that I use to build cutting-edge web applications. These skills empower me to bring ideas to life.
      </p>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
