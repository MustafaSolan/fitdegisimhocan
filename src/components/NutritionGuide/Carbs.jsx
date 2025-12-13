import React from 'react';
import carbsImg from '../../assets/carbs.png';
import './NutritionDetails.css';

const Carbs = () => {
    return (
        <div className="detail-block">
            <div className="detail-image-container">
                <img src={carbsImg} alt="Karbonhidrat Kaynakları" className="detail-image" />
            </div>
            <div className="detail-content">
                <h3 className="detail-title">
                    <span className="detail-icon">🌾</span>
                    Karbonhidratlar
                </h3>
                <p className="detail-text">
                    Karbonhidratlar, özellikle spor yapan kişiler için temel bir enerji kaynağıdır. Antrenman temposunu sürdürebilmek, glikojen depolarını yenilemek ve gün boyunca hem zihinsel hem fiziksel performansı koruyabilmek için gereklidir. Gram başına 4 kcal enerji sağlarlar.
                </p>
                <p className="detail-text">
                    Yağ yakmak isteyenler genellikle daha düşük karbonhidrat alarak kalori açığı oluşturmayı kolaylaştırabilir. Buna karşılık kas geliştirmeyi hedefleyenler için daha yüksek karbonhidrat alımı hem antrenman gücü hem de toparlanma açısından önemli bir avantaj sağlar.
                </p>
                <p className="detail-text">
                    <strong>Karbonhidratlardan Korkmalı Mıyız?</strong> Kesinlikle hayır. Yağlanmanın nedeni karbonhidrat değil, toplam kalori fazlasıdır. Kalori dengesini kontrol ettiğiniz sürece karbonhidrat tüketmek herhangi bir sorun oluşturmaz; aksine antrenman verimi ve pump hissi için gereklidir.
                </p>

                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '20px', marginBottom: '10px', color: 'var(--primary)' }}>Glutenli Karbonhidrat Kaynakları</h4>
                <div className="source-list" style={{ marginBottom: '10px' }}>
                    <span className="source-tag">Tam Buğday Ekmeği</span>
                    <span className="source-tag">Bulgur</span>
                    <span className="source-tag">Makarna</span>
                    <span className="source-tag">Simit, Lavaş</span>
                </div>

                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '20px', marginBottom: '10px', color: 'var(--primary)' }}>Glutensiz Karbonhidrat Kaynakları</h4>
                <div className="source-list">
                    <span className="source-tag">Pirinç</span>
                    <span className="source-tag">Patates / Tatlı Patates</span>
                    <span className="source-tag">Mısır</span>
                    <span className="source-tag">Kinoa</span>
                    <span className="source-tag">Meyveler</span>
                    <span className="source-tag">Karabuğday</span>
                </div>

                <p className="detail-text" style={{ marginTop: '20px', fontStyle: 'italic', fontSize: '0.9rem' }}>
                    <strong>Neden Önemli?</strong> Gluten hassasiyetiniz yoksa tam tahıllar mükemmel kaynaklardır. Hassasiyeti olanlar için ise sindirimi kolay alternatifler mevcuttur.
                </p>
            </div>
        </div>
    );
};

export default Carbs;
