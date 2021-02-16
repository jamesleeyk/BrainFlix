import React from 'react';
import './Nav.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import image from '../../assets/Images/Mohan-muruge.jpg';

function Nav() {
  return (
    <nav className="head__nav nav">
      <ul className="nav__list">
        <li className="nav__item">
          <img src={logo} alt="" className="nav__logo" />
        </li>
        <li className="nav__item">
          <form className="nav__form">
            <input type="text" className="nav__search" placeholder="Search" />
            <div className="nav__button-div">
              <button className="nav__button">UPLOAD</button>
              <div className="nav__img-div">
                <img className="nav__img" src={image} alt="" />
              </div>
            </div>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
