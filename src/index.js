import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// each function or section will be divided to each file later

function Header() {
  return (
  <div className="header__dogma">
      <div className="header__welcome">
        <h1>Welcome, I am Jongwan.</h1>
        <p>A passionate Frontend Web Developer having an experience of building Web applications with JavaScript, React.js, Node.js including some knowledge of Python, Django and flask.</p>
      </div>

      <div className="header__image">
        <img src="#" alt="background" />
      </div>

      <div className="header__contact">
        <h1>Contact</h1>
        <p>Email:
          <a href="mailto:">starmireu@gmail.com</a> 
        </p>
        <p>Phone:
          <a href="tel:">+82 10 8215 8540</a>
        </p>
        {/* add github, linkedin page here */}
      </div>
  </div>
  );
}

function Body() {
  return (
    <div className="body__dogma">
      <div className="body__about">
        <h1>Skills</h1>
        <p>RATHER TO BE A JACK-OF-ALL-TRADE, I FOCUS ON THE FRONTED FIELD.</p>
      </div>

      <div className="body__skills">
        <h1>Proficiency</h1>
        <p>HTML5, CSS3, JavaScript, React.js, Node.js</p>
        <p>Python, Django, Flask, MySQL, Git, Github</p>
      </div>

      <div className="body__projects">
        <h1>Projects</h1>
        <p>
          <a href=""></a>
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer__dogma">
      <div className="footer__copyright">
        <p>Copyright © 2020 Jongwan Starmire. All rights reserved.</p>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <div className="navbar__dogma">
      <div className="navbar__menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
