// src/components/Headercomponents.jsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Headercomponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // 任意：メニュー開時に背景スクロールを止める（モバイルUX向上）
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="log">
        <h3>Sota Yoshida</h3>
      </div>

      <nav
        id="nav-menu"
        className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/research"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Research
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/connect"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Connect
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        className={`hamburger-button ${isMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-expanded={isMenuOpen}
        aria-controls="nav-menu"
        aria-label="メニューを開閉"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </header>
  );
};

export default Headercomponents;
