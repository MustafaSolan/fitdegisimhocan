import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    {/* Brand Column */}
                    <div className="footer-brand">
                        <a href="https://www.instagram.com/fitdegisimhocan/" target="_blank" rel="noopener noreferrer" className="footer-logo-link">
                            <img src={logo} alt="fitdeğişimhocan" className="footer-logo-img" />
                            <span className="brand-name">fitdeğişimhocan</span>
                        </a>
                        <p className="footer-desc">
                            Bilimsel verilerle fitness yolculuğunuza rehberlik eden, güvenilir bilgi kaynağınız.
                        </p>
                        <a href="https://www.instagram.com/fitdegisimhocan/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <span>Instagram'da Takip Et →</span>
                        </a>
                    </div>

                    {/* Links Column 1 */}
                    <div className="footer-section">
                        <h4>Kategoriler</h4>
                        <ul className="footer-links">
                            <li><Link to="/besin-rehberi" onClick={() => window.scrollTo(0, 0)}>Beslenme Rehberi</Link></li>
                            <li><Link to="/agirlik-antrenmani" onClick={() => window.scrollTo(0, 0)}>Antrenman Rehberi</Link></li>
                            <li><Link to="/e-kitap" onClick={() => window.scrollTo(0, 0)}>E-Kitap</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 fitdeğişimhocan. Tüm hakları saklıdır.</p>
                    <p>Designed for Performance.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
