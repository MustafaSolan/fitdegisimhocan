import React from 'react';
import wheyImg from '../../assets/whey.png';
import creatineImg from '../../assets/creatine.png';
import preworkoutImg from '../../assets/preworkout.png';
import bcaaImg from '../../assets/bcaa.png';
import './NutritionGuide.css';
import './NutritionDetails.css';

const Supplements = () => {
    return (
        <section id="supplement" className="nutrition-guide-section page-transition" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="section-header center-text">
                    <h2 className="section-title">Supplement Rehberi</h2>
                    <p className="section-subtitle">
                        Supplementler, temel besin kaynaklarımızın yanında kullanabileceğimiz takviye gıdalardır. Vücudun ihtiyaç duyduğu ama beslenme düzeninde eksik kalabilen vitamin, mineral veya makro bileşenleri tamamlamak için kullanılırlar.
                    </p>
                </div>

                <div className="nutrition-content-wrapper">

                    {/* Protein Powder */}
                    <div className="detail-block">
                        <div className="detail-image-container">
                            <img src={wheyImg} alt="Whey Protein" className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h3 className="detail-title"><span className="detail-icon">🥤</span> Protein Tozu (Whey)</h3>
                            <p className="detail-text">
                                Protein tozu, günlük protein ihtiyacınızı karşılamada pratik bir destek sağlar. 100 gramında ortalama 75–80 gram protein, bir porsiyonunda ise genellikle 25–26 gram protein bulunur.
                            </p>
                            <p className="detail-text">
                                En yaygın tür olan whey protein, sütten elde edildiği için hayvansaldır ve amino asit profili oldukça güçlüdür. Kas onarımı ve toparlanma açısından etkili bir yardımcı kaynaktır. Protein tozu öğünün yerini tutmaz, sadece eksik kalan proteini tamamlamak için kullanılır.
                            </p>
                        </div>
                    </div>

                    {/* Creatine */}
                    <div className="detail-block">
                        <div className="detail-image-container">
                            <img src={creatineImg} alt="Kreatin" className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h3 className="detail-title"><span className="detail-icon">⚡</span> Kreatin</h3>
                            <p className="detail-text">
                                Kreatin, güç, kuvvet ve yüksek yoğunluklu performansı artırır. En iyi araştırılmış ve en güvenilir supplementlerden biridir.
                            </p>
                            <p className="detail-text">
                                Günlük 3–5 gram almak çoğu kişi için yeterlidir. Kas hücrelerinde su tutarak hacim ve güç artışı sağlar. Bu su tutumu geçicidir ve performansı artıran mekanizmanın bir parçasıdır.
                            </p>
                            <p className="detail-text">
                                Araştırmalar, kreatinin sadece kas performansını değil, aynı zamanda beyin ve karaciğer sağlığını da olumlu etkilediğini kanıtlamıştır. En yaygın ve en etkili form olarak <strong>kreatin monohidrat</strong> tercih edilebilir.
                            </p>
                        </div>
                    </div>

                    {/* Pre-Workout */}
                    <div className="detail-block">
                        <div className="detail-image-container">
                            <img src={preworkoutImg} alt="Pre-Workout" className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h3 className="detail-title"><span className="detail-icon">🚀</span> Pre-Workout</h3>
                            <p className="detail-text">
                                Pre-workout ürünleri; enerji, odak ve antrenman performansını artırmak için formüle edilir. İçeriklerinde genellikle kafein, beta-alanin, sitrülin malat bulunur.
                            </p>
                            <p className="detail-text">
                                Düzenli kullanımda vücut adapte olacağı için ara vererek kullanmak mantıklıdır. Etkisi, kafein direnci gibi etkenlerden dolayı kişiden kişiye değişebilir.
                            </p>

                            <div className="detail-subsection" style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #4CAF50' }}>
                                <h4 style={{ margin: '0 0 12px 0', color: '#333', fontSize: '1rem' }}>📌 İçerdiği Temel Maddeler</h4>

                                <div style={{ marginBottom: '15px' }}>
                                    <strong style={{ color: '#2196F3' }}>Beta Alanin</strong>
                                    <p className="detail-text" style={{ margin: '5px 0' }}>
                                        Beta alanin, kaslarda asitlenmeyi geciktirerek yanma hissinin daha geç gelmesini sağlar. Özellikle yüksek tekrar ve interval antrenmanlarında performansı uzatır. Karıncalanma hissi yaratabilir, bu gayet normaldir.
                                    </p>
                                </div>

                                <div style={{ marginBottom: '15px' }}>
                                    <strong style={{ color: '#9C27B0' }}>Sitrülin</strong>
                                    <p className="detail-text" style={{ margin: '5px 0' }}>
                                        Sitrülin, vücut dokularına kan akışını artırarak performans ve pump hissini destekler. Böbreklerde arjinine dönüşür ve plazmadaki arjinin seviyesini daha uzun süre yüksek tutar. Bu sayede nitrik oksit üretimi ve amonyak döngüsü daha dengeli çalışır.
                                    </p>
                                </div>

                                <div>
                                    <strong style={{ color: '#FF5722' }}>Kafein</strong>
                                    <p className="detail-text" style={{ margin: '5px 0' }}>
                                        Kafein, odaklanmayı artırır ve yorgunluk hissini baskılar. Güç ve performansı kısa sürede yukarı çeker. Geç saatlerde alınması durumunda uyku kalitesini olumsuz etkileyebilir, doz önemlidir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BCAA */}
                    <div className="detail-block">
                        <div className="detail-image-container">
                            <img src={bcaaImg} alt="BCAA" className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h3 className="detail-title"><span className="detail-icon">🧪</span> BCAA</h3>
                            <p className="detail-text">
                                BCAA, lösin, izolösin ve valinden oluşan üç temel amino asittir. Ancak bilimsel olarak, yeterli protein alıyorsanız BCAA’nın ekstra bir faydası yoktur.
                            </p>
                            <p className="detail-text">
                                Whey proteinin içinde zaten yüksek miktarda BCAA bulunur, bu yüzden çoğu kişi için gereksiz bir takviyedir diyebiliriz.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default Supplements;
