import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Home() {
  const [buttonColor, setButtonColor] = useState("#000"); 

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setButtonColor(randomColor);
  };

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting;

    if (currentHour < 12) {
      greeting = "Good morning!";
    } else if (currentHour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }

    console.log(greeting); 

  
  }, []); 

  return (
    <div>
      <header>
        <h1>Web Developer Internship</h1>
      </header>
      <div style={{ 
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <p>
          Welcome to our Web Developer Internship landing page. We are excited to offer you an opportunity to learn and grow in the field of web development.
        </p>
        <p>
          This internship will provide hands-on experience in front-end and back-end development, as well as exposure to various web technologies and frameworks.
        </p>
        <p>
          If you are passionate about coding, eager to learn, and ready to contribute to real-world projects, then this internship is for you!
        </p>
        <button
          style={{ 
            backgroundColor: buttonColor,
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onClick={changeColor}
        >
          Change Color
        </button>
        <br /><br />

        <Link to='/calculate' ><button>Calculator</button></Link>
      </div>
    </div>
  );
}

export default Home;
