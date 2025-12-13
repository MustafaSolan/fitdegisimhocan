import React from 'react';
import './EbookSection.css';
import ebookCover from '../../assets/ebook-cover.png';
import ebookPreview from '../../assets/ebook-preview.png';

const EbookSection = () => {
    return (
        <section id="ekitap" className="ebook-section">
            <div className="container ebook-container">
                <div className="ebook-content">
                    <div className="ebook-badge">⚡ YENİ VE YÜKSEK ETKİLİ</div>
                    <h2 className="ebook-title">Fit Değişim: <br /><span className="highlight">Beslenme & Antrenman</span> Masterclass</h2>
                    <p className="ebook-description">
                        Karmaşık bilgilerden arındırılmış, sadece sonuca odaklanan bilimsel yöntemler.
                        Bu rehber, vücudunu dönüştürmen için ihtiyacın olan <strong>tek kaynak</strong>.
                        Artık deneme-yanılma yok, sadece sonuç var.
                    </p>

                    <ul className="ebook-features">
                        <li>
                            <div className="feature-icon">🥑</div>
                            <div>
                                <strong>Bilimsel Beslenme Stratejileri</strong>
                                <p>Kalori saymanın ötesinde: Makrolar, zamanlama ve metabolik adaptasyon yönetimi.</p>
                            </div>
                        </li>
                        <li>
                            <div className="feature-icon">🔥</div>
                            <div>
                                <strong>Hipertrofi & Yağ Yakımı Programları</strong>
                                <p>Her seviyeye uygun, progressive overload prensibine dayalı antrenman şablonları.</p>
                            </div>
                        </li>
                        <li>
                            <div className="feature-icon">🧠</div>
                            <div>
                                <strong>Sürdürülebilir Yaşam Tarzı</strong>
                                <p>Kısıtlayıcı diyetler olmadan, sosyal hayatını bozmadan formda kalmanın sırları.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="ebook-cta">
                        <button className="ebook-btn">
                            <span>HEMEN İNDİR</span>
                            <span>•</span>
                            <span style={{ opacity: 0.9, fontSize: '0.9em' }}>₺149</span>
                        </button>
                        <a href="#" className="ebook-link">İçindekiler Kısmına Göz At</a>
                    </div>
                </div>

                <div className="ebook-visuals">
                    <div className="visual-wrapper">
                        <img src={ebookCover} alt="Fitness ve Beslenme E-Kitabı Kapağı" className="ebook-cover-img" />
                        <img src={ebookPreview} alt="E-Kitap Tablet Önizlemesi" className="ebook-preview-img floating" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EbookSection;
