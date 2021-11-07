import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Header() {
  return (
  <div className="header__dogma">
      <div className="header__welcome">
        <h1>Welcome, I am Jongwan.</h1>
        <p>A passionate Frontend Web Developer having an experience of building Web applications with JavaScript, React.js, Node.js with some knowledge of Python, Django and flask.</p>
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
        


      </div>

          

  </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

