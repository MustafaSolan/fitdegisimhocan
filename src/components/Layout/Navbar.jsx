import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo-link" onClick={closeMobileMenu}>
                    <img src={logo} alt="FitDeğişimHocan Logo" className="logo-img" />
                </Link>

                <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? '✕' : '☰'}
                </div>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <div className="nav-item">
                        <Link to="/" onClick={closeMobileMenu}>Ana Sayfa</Link>
                    </div>

                    <div className="nav-item" onClick={() => toggleDropdown('nutrition')}>
                        <span style={{ cursor: 'pointer' }}>Beslenme Rehberi <span className={`arrow-down ${activeDropdown === 'nutrition' ? 'rotate' : ''}`}>▼</span></span>
                        <div className={`dropdown-menu ${activeDropdown === 'nutrition' ? 'show' : ''}`}>
                            <Link to="/besin-rehberi" className="dropdown-link" onClick={closeMobileMenu}>Besin Rehberi</Link>
                            <Link to="/supplement-rehberi" className="dropdown-link" onClick={closeMobileMenu}>Supplement Rehberi</Link>
                            <Link to="/vitamin-rehberi" className="dropdown-link" onClick={closeMobileMenu}>Vitamin & Mineral</Link>
                        </div>
                    </div>

                    <div className="nav-item" onClick={() => toggleDropdown('training')}>
                        <span style={{ cursor: 'pointer' }}>Antrenman Rehberi <span className={`arrow-down ${activeDropdown === 'training' ? 'rotate' : ''}`}>▼</span></span>
                        <div className={`dropdown-menu ${activeDropdown === 'training' ? 'show' : ''}`}>
                            <Link to="/agirlik-antrenmani" className="dropdown-link" onClick={closeMobileMenu}>Ağırlık Antrenmanı</Link>
                            <Link to="/kardiyo-rehberi" className="dropdown-link" onClick={closeMobileMenu}>Kardiyo</Link>
                        </div>
                    </div>

                    <div className="nav-item">
                        <Link to="/e-kitap" onClick={closeMobileMenu}>E-Kitap</Link>
                    </div>

                    <a href="https://www.instagram.com/fitdegisimhocan/" target="_blank" rel="noopener noreferrer" className="btn" onClick={closeMobileMenu}>İletişim</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
