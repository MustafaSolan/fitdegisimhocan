import React from 'react';
import cardioImg from '../../assets/cardio.png'; // Assuming this exists from TrainingLibrary
import '../NutritionGuide/NutritionGuide.css'; // Reuse styles

const CardioGuide = () => {
    return (
        <section id="cardio-guide" className="nutrition-guide-section page-transition">
            <div className="wt-page-container">
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
                    {/* Common Questions/Info Grid */}
                    <div className="info-grid-container">
                        <div className="info-card">
                            <span className="info-number">01</span>
                            <h4>Ne tür bir kardiyo?</h4>
                            <p>Kardiyo koşu bandından ibaret değildir. Yüzme, ip atlama, bisiklet, kürek, dans… hepsi olur. Önemli olan sevdiğin ve sürdürebilir olanı seçmektir.</p>
                        </div>
                        <div className="info-card">
                            <span className="info-number">02</span>
                            <h4>Haftada kaç gün?</h4>
                            <p>Kardiyo sıklığı hedefine ve seviyene göre değişir. Ancak genel bir aralık vermek gerekirse: Haftada 2–5 seans çoğu insan için idealdir.</p>
                        </div>
                        <div className="info-card">
                            <span className="info-number">03</span>
                            <h4>Ne kadar sürmeli?</h4>
                            <p>Kardiyo ne kadar yoğunsa, süre o kadar kısa olabilir. Genel sağlık ve yağ yakımı için 15–60 dakika aralığı en verimli süredir.</p>
                        </div>
                    </div>

                    {/* Goals Section */}
                    {/* Goals Section */}
                    <h3 className="section-header" style={{ marginBottom: '30px', textAlign: 'center', fontSize: '2rem', fontWeight: '800', color: '#333' }}>Hedeflere Göre Kardiyo</h3>

                    <div className="goal-guides-container">
                        {/* Weight Loss Card */}
                        <div className="guide-card weight-loss">
                            <div className="card-header">
                                <span className="card-icon">🔥</span>
                                <h3>Kilo Vermek İsteyenler</h3>
                            </div>
                            <div className="card-body">
                                <p>Amaç kalori açığı yaratmak, bu yüzden kardiyo burada iyi bir destekleyici eleman olacaktır.</p>
                                <ul className="card-list">
                                    <li><strong>Sıklık:</strong> Haftada 3–5 gün</li>
                                    <li><strong>Yoğunluk:</strong> Orta yoğunluk</li>
                                    <li><strong>Zamanlama:</strong> Antrenman sonrası 20-30 dk veya dinlenme günlerinde 20-25 dk hafif-orta tempo.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Bulk Card */}
                        <div className="guide-card bulk">
                            <div className="card-header">
                                <span className="card-icon">💪</span>
                                <h3>Bulk Dönemindekiler</h3>
                            </div>
                            <div className="card-body">
                                <p>Amacımız kas yapmak; o yüzden kardiyo önceliğimiz olmamalı. Sadece kalp sağlığı ve kondisyon için yapılır.</p>
                                <ul className="card-list">
                                    <li><strong>Sıklık:</strong> Haftada 2-3 gün</li>
                                    <li><strong>Yoğunluk:</strong> Hafif</li>
                                    <li><strong>Zamanlama:</strong> Antrenman sonrası 15-20 dk veya dinlenme günlerinde hafif tempo.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* HIIT Section */}
                    {/* HIIT Section */}
                    <div className="hiit-section">
                        <div className="hiit-header">
                            <h3>HIIT Kardiyo</h3>
                            <span className="hiit-tag">Yüksek Yoğunluk</span>
                        </div>
                        <p className="hiit-desc">
                            HIIT (Yüksek Yoğunluklu Aralıklı Antrenman), kısa sürede maksimum yağ yakımı sağlayan bir yöntemdir.
                            15-20 saniye %90+ eforla depar atıp, 40-50 saniye dinlenme şeklinde uygulanır.
                            <br /><br />
                            <strong>Neden Yapmalısın?</strong> Zamandan tasarruf sağlar, metabolizmayı antrenman sonrası bile hızlandırır (afterburn effect) ve kondisyonu hızla artırır.
                        </p>
                        <div className="hiit-bg-icon">⚡</div>
                    </div>

                    {/* Equipment & Exercises */}
                    <div className="equipment-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
                        <div className="list-box">
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '20px', color: '#2196F3' }}>Kardiyo Aletleri</h4>
                            <ul className="styled-list">
                                <li>🏃‍♂️ Koşu bandı</li>
                                <li>🚲 Eliptik bisiklet</li>
                                <li>🚴 Sabit / Spin bisikleti</li>
                                <li>🚣 Kürek ergometresi</li>
                            </ul>
                        </div>
                        <div className="list-box">
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '20px', color: '#FF9800' }}>Ekipmansız Hareketler</h4>
                            <ul className="styled-list">
                                <li>🏔️ Mountain Climber</li>
                                <li>🤸 Burpee</li>
                                <li>⭐ Jumping Jack</li>
                                <li>🦵 High Knees & Butt Kicks</li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .wt-page-container {
                    padding-top: 100px;
                    padding-bottom: 60px;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding-left: 20px;
                    padding-right: 20px;
                }

                .info-grid-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                    margin-top: 30px;
                    margin-bottom: 80px; /* Increased bottom spacing per user request */
                }

                .info-card {
                    background: #fff;
                    padding: 30px;
                    border-radius: 16px;
                    border: 1px solid #eee;
                    position: relative;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                }

                .info-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    border-color: #FF9800; /* Orange accent on hover */
                }
                
                .info-number {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: 900;
                    color: rgba(255, 152, 0, 0.15); /* Subtle big number */
                    margin-bottom: -15px;
                    line-height: 1;
                }

                .info-card h4 {
                    color: #222;
                    margin-bottom: 15px;
                    font-size: 1.3rem;
                    font-weight: 700;
                    margin-top: 10px;
                }

                .info-card p {
                    color: #666;
                    line-height: 1.6;
                    font-size: 0.95rem;
                }

                .hiit-section {
                    margin-top: 60px;
                    background: #fff;
                    border-radius: 20px;
                    padding: 40px;
                    border: 2px solid #283593; /* Deep Blue Border */
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(40, 53, 147, 0.05);
                }
                
                .hiit-header {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 20px;
                    position: relative;
                    z-index: 2;
                }
                
                .hiit-header h3 {
                     font-size: 2rem;
                     font-weight: 800;
                     color: #283593;
                     margin: 0;
                }
                
                .hiit-tag {
                    background: #283593;
                    color: white;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .hiit-desc {
                    color: #444;
                    font-size: 1.05rem;
                    line-height: 1.7;
                    max-width: 800px;
                    position: relative;
                    z-index: 2;
                }
                
                .hiit-bg-icon {
                    position: absolute;
                    right: -20px;
                    bottom: -50px;
                    font-size: 14rem;
                    opacity: 0.1; /* Watermark effect */
                    transform: rotate(-15deg);
                    user-select: none;
                    pointer-events: none;
                    z-index: 1;
                }

                /* Reuse guide card styles from WeightTraining but define here ensuring independence */
                .goal-guides-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }

                .guide-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid rgba(0,0,0,0.05);
                    display: flex;
                    flex-direction: column;
                }

                .guide-card.weight-loss .card-header { background: linear-gradient(135deg, #FF9800, #F57C00); }
                .guide-card.bulk .card-header { background: linear-gradient(135deg, #4CAF50, #2E7D32); }

                .card-header {
                    padding: 25px;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .card-icon { font-size: 2rem; }
                .card-header h3 { margin: 0; font-size: 1.4rem; }

                .card-body {
                    padding: 30px;
                    color: #555;
                    line-height: 1.6;
                }

                .card-list {
                    list-style: none;
                    padding: 0;
                    margin-top: 20px;
                }

                .card-list li {
                    margin-bottom: 12px;
                    padding-left: 0;
                }

                .styled-list {
                    list-style: none;
                    padding: 0;
                }

                .styled-list li {
                    padding: 12px 15px;
                    background: white;
                    margin-bottom: 10px;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.03);
                    font-weight: 500;
                    color: #444;
                }

                @media (max-width: 768px) {
                    .equipment-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .hiit-section {
                        padding: 25px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default CardioGuide;
