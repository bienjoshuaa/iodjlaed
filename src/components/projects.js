import React, { useEffect, useState } from 'react';
import '../css/projects.css'; // Ensure the CSS file is imported

const projectsData = [
  {
    name: 'Data-Driven Management Information System',
    description: 'Integration of Data Analytics and PostgreSQL for PAPSAS, INC. Includes a voting system, event resource allocation, member attendance tracking, and performance assessment.',
    technologies: 'HTML, CSS, JavaScript, Python, Django, PostgreSQL',
    link: 'https://papsasinc.com',
  },
  {
    name: 'CozyControl',
    description: 'A Flutter and Dart-based mobile app to remotely control home appliances, aimed at ensuring proper energy consumption. Aligned with SDG 7 "Affordable and Clean Energy".',
    technologies: 'Flutter, Dart',
    link: 'https://github.com/Ervin-Capuno/flutter_ui_final_project',
  },
  {
    name: 'Recycling Management System',
    description: 'A web-based application built with PHP to enhance the efficiency of recycling processes. Allows users to manage recyclable materials and track environmental impact.',
    technologies: 'PHP, CSS',
    link: 'https://github.com/bienjoshuaa/recycling-management-system',
  },
];

const Projects = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // When the section comes into view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      className={`projects-section ${inView ? 'in-view' : ''}`}
    >
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        Here are some of the projects I have worked on, showcasing my expertise in software development, data management, and mobile app development.
      </p>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
