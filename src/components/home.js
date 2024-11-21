import React, { useEffect, useState } from 'react';
import profileImage from '../assets/1.jpg'; // Correctly import the image
import '../css/home.css';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [imageVisible, setImageVisible] = useState(false); // State to trigger the fade-in

  const fullText =
    'HHi, I’m Bien, a passionate back-end developer specializing in building efficient, scalable, and robust web applications.';
  const typingSpeed = 75;

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    // Trigger fade-in animation after component mounts
    setImageVisible(true); // Set state to true to show image

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center justify-center text-center p-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left md:mr-6 mb-4 md:mb-0">
          <h1 className="text-4xl font-extrabold text-white mb-4 text-shadow-lg">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-xl">
            {typedText}
            <span className="blink"></span>
          </p>
        </div>
        <img
          src={profileImage}
          alt="Profile"
          className={`w-80 h-80 rounded ${imageVisible ? 'fade-in' : ''} img-hover`} // Apply fade-in class based on state
        />
      </div>
    </section>
  );
};

export default Home;
