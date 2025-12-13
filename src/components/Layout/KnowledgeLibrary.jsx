import { Link } from 'react-router-dom';
import nutritionImg from '../../assets/library/nutrition.png';
import supplementImg from '../../assets/library/supplement.png';
import vitaminImg from '../../assets/library/vitamin.png';

const KnowledgeLibrary = () => {
    return (
        <section id="library" className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
            <h2 style={{ marginBottom: '50px' }}>Bilgi Kütüphanesi</h2>
            <div className="feature-grid">
                {/* Besin Rehberi Card */}
                <Link to="/besin-rehberi" className="image-card">
                    <div className="card-bg" style={{ backgroundImage: `url(${nutritionImg})` }}></div>
                    <div className="card-overlay">
                        <div className="card-content">
                            <h3>Besin Rehberi</h3>
                            <p>Makrolar, sağlıklı tarifler ve beslenme gerçekleri.</p>
                        </div>
                    </div>
                </Link>

                {/* Supplement Rehberi Card */}
                <Link to="/supplement-rehberi" className="image-card">
                    <div className="card-bg" style={{ backgroundImage: `url(${supplementImg})` }}></div>
                    <div className="card-overlay">
                        <div className="card-content">
                            <h3>Supplementler</h3>
                            <p>Neyi, ne zaman ve neden kullanmalısın?</p>
                        </div>
                    </div>
                </Link>

                {/* Vitamin & Mineral Card */}
                <Link to="/vitamin-rehberi" className="image-card">
                    <div className="card-bg" style={{ backgroundImage: `url(${vitaminImg})` }}></div>
                    <div className="card-overlay">
                        <div className="card-content">
                            <h3>Vitamin & Mineral</h3>
                            <p>Sağlığın ve performansın gizli kahramanları.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default KnowledgeLibrary;
