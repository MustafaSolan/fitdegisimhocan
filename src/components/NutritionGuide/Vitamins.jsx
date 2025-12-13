import React from 'react';
import omegaImg from '../../assets/omega3.png';
import zmaImg from '../../assets/zma.png';
import vitaminsImg from '../../assets/vitamins_mix.png';
import './NutritionGuide.css';
import './NutritionDetails.css';

const Vitamins = () => {
    return (
        <section id="vitamin" className="nutrition-guide-section page-transition">
            <div className="container">
                <div className="section-header center-text">
                    <h2 className="section-title">Vitamin & Mineral Rehberi</h2>
                    <p className="section-subtitle">
                        Sağlığın temeli ve bağışıklık sisteminin koruyucuları. Makrolar arabanın yakıtıysa, mikrolar motorun yağıdır.
                    </p>
                </div>

                <div className="nutrition-content-wrapper">

                    {/* Omega-3 */}
                    <div className="detail-block">
                        <div className="detail-image-container">
                            <img src={omegaImg} alt="Omega-3" className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h3 className="detail-title"><span className="detail-icon">🐟</span> Omega-3 Yağ Asitleri</h3>
                            <p className="detail-text">
                                Kalp-damar sağlığını destekler, inflamasyonu azaltır, eklem sağlığına ve toparlanmaya katkı sağlar.
                            </p>
                            <p className="detail-text">
                                Düzenli balık tüketmeyenler için en mantıklı supplementlerden biridir.
                            </p>
                        </div>
                    </div>

                    {/* D Vitamini - Using Vitamins Image for generic vitamin representation if no specific D-vit image */}
                    <div className="detail-block">
                        <div className="detail-image-container">
                            {/* Since user left images to me, using the mix image for general health/vitamins like D-Vit */}
                            <img src={vitaminsImg} alt="D Vitamini" className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h3 className="detail-title"><span className="detail-icon">☀️</span> D Vitamini</h3>
                            <p className="detail-text">
                                D vitamini vücutta hormon gibi çalışır ve eksikliği oldukça yaygındır. Bağışıklık, kemik sağlığı, enerji ve hormon dengesi için önemlidir.
                            </p>
                            <p className="detail-text">
                                Kan tahliliyle seviyeyi ölçtürüp doktorun önerdiği doza göre alınmalıdır.
                            </p>
                        </div>
                    </div>

                    {/* ZMA */}
                    <div className="detail-block">
                        <div className="detail-image-container">
                            <img src={zmaImg} alt="ZMA" className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h3 className="detail-title"><span className="detail-icon">🌙</span> ZMA (Çinko – Magnezyum – B6)</h3>
                            <p className="detail-text">
                                ZMA; özellikle uyku kalitesi, kas gevşemesi ve toparlanmayı desteklemek için kullanılan bir kombinasyondur.
                            </p>
                            <p className="detail-text">
                                Uyku problemi yaşayanlar için faydalı olabilir; ancak mucizevi bir kas yapıcı değildir. Çinko veya magnezyum eksikliğiniz yoksa etkisi sınırlı olur.
                            </p>
                        </div>
                    </div>

                    {/* Other Vitamins */}
                    <div className="detail-block">
                        <div className="detail-content" style={{ width: '100%' }}>
                            <h3 className="detail-title"><span className="detail-icon">💊</span> Diğer Vitamin ve Mineraller</h3>
                            <p className="detail-text">
                                Multivitaminler veya tekli vitamin-mineral takviyeleri, günlük diyetinizde eksik kalan mikro besinleri tamamlamak için kullanılabilir.
                            </p>
                            <p className="detail-text">
                                Özellikle B12, folat, magnezyum, demir, K2 gibi maddeler bazı kişilerde diyetle yeterince alınamayabilir. Gereklilik kişiye göre değişir; kan testi en net yoludur.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Vitamins;
