import React from 'react';
import cardioImg from '../../assets/cardio.png';
import '../NutritionGuide/NutritionGuide.css';
import '../NutritionGuide/NutritionDetails.css';
import './CardioGuide.css';

const CardioGuide = () => {
    return (
        <section id="cardio-guide" className="nutrition-guide-section page-transition">
            <div className="cardio-page-container">
                <div className="content-wrapper">

                    {/* Intro Section */}
                    <div className="nutrition-content-wrapper">
                        <div className="detail-block">
                            <div className="detail-content">
                                <h3 className="detail-title"><span className="detail-icon">🏃</span> Neden Kardiyo Yapmalıyım?</h3>
                                <p className="detail-text">
                                    Kardiyo, spora başlayan herkesin bir şekilde kulağına çalınan ilk kelimelerden birisidir. Amacınız yağ yakmak, daha sağlıklı bir kalp-damar sistemi oluşturmak veya sadece kendinizi daha iyi hissetmek olabilir. Kardiyo da doğru uygulandığında bu süreçleri destekleyen bir parçadır.
                                    <br /><br />
                                    Genelde biraz küçümsense de, aslında her hedefle çok iyi uyum sağlayabilir. Hangi türün en iyisi olduğu da tamamen vücudunuzun durumuna, kondisyonunuza ve yaşadığınız ortama bağlıdır. Yani olay aslında oldukça basit.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Common Questions/Info Grid */}
                    <div className="cardio-info-grid-container">
                        <div className="cardio-info-card">
                            <span className="cardio-info-number">01</span>
                            <h4>Ne tür bir kardiyo?</h4>
                            <p>Kardiyo koşu bandından ibaret değildir. Yüzme, ip atlama, bisiklet, kürek, dans… hepsi olur. Önemli olan sevdiğin ve sürdürebilir olanı seçmektir.</p>
                        </div>
                        <div className="cardio-info-card">
                            <span className="cardio-info-number">02</span>
                            <h4>Haftada kaç gün?</h4>
                            <p>Kardiyo sıklığı hedefine ve seviyene göre değişir. Ancak genel bir aralık vermek gerekirse: Haftada 2–5 seans çoğu insan için idealdir.</p>
                        </div>
                        <div className="cardio-info-card">
                            <span className="cardio-info-number">03</span>
                            <h4>Ne kadar sürmeli?</h4>
                            <p>Kardiyo ne kadar yoğunsa, süre o kadar kısa olabilir. Genel sağlık ve yağ yakımı için 15–60 dakika aralığı en verimli süredir.</p>
                        </div>
                    </div>

                    {/* Goals Section */}
                    <h3 className="cardio-section-header">Hedeflere Göre Kardiyo</h3>

                    <div className="cardio-goal-guides-container">
                        {/* Weight Loss Card */}
                        <div className="cardio-guide-card weight-loss">
                            <div className="cardio-card-header">
                                <span className="cardio-card-icon">🔥</span>
                                <h3>Kilo Vermek İsteyenler</h3>
                            </div>
                            <div className="cardio-card-body">
                                <p>Amaç kalori açığı yaratmak, bu yüzden kardiyo burada iyi bir destekleyici eleman olacaktır.</p>
                                <ul className="cardio-card-list">
                                    <li><strong>Sıklık:</strong> Haftada 3–5 gün</li>
                                    <li><strong>Yoğunluk:</strong> Orta yoğunluk</li>
                                    <li><strong>Zamanlama:</strong> Antrenman sonrası 20-30 dk veya dinlenme günlerinde 20-25 dk hafif-orta tempo.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Bulk Card */}
                        <div className="cardio-guide-card bulk">
                            <div className="cardio-card-header">
                                <span className="cardio-card-icon">💪</span>
                                <h3>Bulk Dönemindekiler</h3>
                            </div>
                            <div className="cardio-card-body">
                                <p>Amacımız kas yapmak; o yüzden kardiyo önceliğimiz olmamalı. Sadece kalp sağlığı ve kondisyon için yapılır.</p>
                                <ul className="cardio-card-list">
                                    <li><strong>Sıklık:</strong> Haftada 2-3 gün</li>
                                    <li><strong>Yoğunluk:</strong> Hafif</li>
                                    <li><strong>Zamanlama:</strong> Antrenman sonrası 15-20 dk veya dinlenme günlerinde hafif tempo.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* HIIT Section */}
                    <div className="cardio-hiit-section">
                        <div className="cardio-hiit-header">
                            <h3>HIIT Kardiyo</h3>
                            <span className="cardio-hiit-tag">Yüksek Yoğunluk</span>
                        </div>
                        <p className="cardio-hiit-desc">
                            HIIT (Yüksek Yoğunluklu Aralıklı Antrenman), kısa sürede maksimum yağ yakımı sağlayan bir yöntemdir.
                            15-20 saniye %90+ eforla depar atıp, 40-50 saniye dinlenme şeklinde uygulanır.
                            <br /><br />
                            <strong>Neden Yapmalısın?</strong> Zamandan tasarruf sağlar, metabolizmayı antrenman sonrası bile hızlandırır (afterburn effect) ve kondisyonu hızla artırır.
                        </p>
                        <div className="cardio-hiit-bg-icon">⚡</div>
                    </div>

                    {/* Equipment & Exercises */}
                    <div className="cardio-equipment-grid">
                        <div className="cardio-list-box">
                            <h4 className="blue">Kardiyo Aletleri</h4>
                            <ul className="cardio-styled-list">
                                <li>🏃‍♂️ Koşu bandı</li>
                                <li>🚲 Eliptik bisiklet</li>
                                <li>🚴 Sabit / Spin bisikleti</li>
                                <li>🚣 Kürek ergometresi</li>
                            </ul>
                        </div>
                        <div className="cardio-list-box">
                            <h4 className="orange">Ekipmansız Hareketler</h4>
                            <ul className="cardio-styled-list">
                                <li>🏔️ Mountain Climber</li>
                                <li>🤸 Burpee</li>
                                <li>⭐ Jumping Jack</li>
                                <li>🦵 High Knees & Butt Kicks</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CardioGuide;
