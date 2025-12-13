import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Layout/EbookSection.css';
import ebookCover from '../assets/ebook-cover-user.png';
import ebookPreview from '../assets/ebook-preview.png';

const Ebook = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ebook-page-container">
            <section id="ekitap" className="ebook-section">
                <div className="container ebook-container">
                    <div className="ebook-content">
                        <div className="ebook-badge">⚡ Güncel Bilimsel Makalelerle Desteklenmiş</div>
                        <h2 className="ebook-title">Fit Değişim: <br /><span className="highlight">Antrenman & Beslenme</span> Rehberi</h2>
                        <p className="ebook-description">
                            Meta-analizler ışığında güncel bilgileri içeren, özellikle beslenme konusunda başucu kitabınız olabilecek bir ürün diyebilirim.
                            <strong> İstediğiniz değişim için ihtiyacınız olan bilgileri akıcı ve anlaşılır biçimde veriyor kitabımız.</strong>
                        </p>

                        <ul className="ebook-features">
                            <li>
                                <div className="feature-icon">✨</div>
                                <div>
                                    <strong>Herkese Hitap Eden İçerik</strong>
                                    <p>Sizler için özel olarak hazırlanmış olup merak edilen konuları kanıta dayalı bir dille açıklıyoruz .</p>
                                </div>
                            </li>
                            <li>
                                <div className="feature-icon">🎯</div>
                                <div>
                                    <strong>Hedefe Yönelik Programlar</strong>
                                    <p>İster yağ yakın, ister kas kütlesi ekleyin. Size en uygun yol haritası kitapta hazır, sizi bekliyor.</p>
                                </div>
                            </li>
                            <li>
                                <div className="feature-icon">⭐</div>
                                <div>
                                    <strong>Hurafelere Son</strong>
                                    <p> Sosyal medyada duyduğunuz korku tüccarlığı yayan fitness içeriklerine son veriyoruz.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="ebook-cta">
                            <a
                                href="https://www.shopier.com/fitdegisimhocan/35973708"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ebook-btn"
                                style={{ textDecoration: 'none' }}
                            >
                                <span>HEMEN İNDİRİN</span>

                            </a>
                            <Link to="/e-kitap-icindekiler" className="ebook-btn-outline" style={{ textDecoration: 'none' }}>
                                <span>İÇİNDEKİLER</span>
                            </Link>
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
        </div>
    );
};

export default Ebook;
