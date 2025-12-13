import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <header className="hero">
            <div className="container hero-content">
                <h1>
                    Değişime Giden Yolda <br />
                    <span className="highlight-text">Bilim ve Sadelik.</span>
                </h1>
                <p className="hero-sub">
                    Karmaşadan uzak, sadece sonuç odaklı içerikler. <br />
                    Kariyeriniz, sağlığınız ve fiziğiniz için en iyi yatırım.
                </p>
                <div className="hero-btns" style={{ justifyContent: 'center', display: 'flex', gap: '16px' }}>
                    <a
                        href="#about"
                        className="btn"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('about');
                            if (element) {
                                const headerOffset = 80;
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: "smooth"
                                });
                            }
                        }}
                    >Rehbere Göz At</a>
                    <Link to="/e-kitap" className="btn btn-outline">E-Kitabı İncele</Link>
                </div>
            </div>
        </header>
    );
};

export default Hero;
