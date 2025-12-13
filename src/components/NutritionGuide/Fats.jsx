import React from 'react';
import fatsImg from '../../assets/fats.png';
import './NutritionDetails.css';

const Fats = () => {
    return (
        <div className="detail-block">
            <div className="detail-image-container">
                <img src={fatsImg} alt="Sağlıklı Yağ Kaynakları" className="detail-image" />
            </div>
            <div className="detail-content">
                <h3 className="detail-title">
                    <span className="detail-icon">🥑</span>
                    Yağlar
                </h3>
                <p className="detail-text">
                    Yağlar, hormon sağlığının korunması için vazgeçilmezdir. Testosteron, östrojen, D vitamini türevleri ve pek çok hormonun üretimi için yeterli yağ alımı gereklidir. Bu yüzden amacımız ne olursa olsun, yağsız vücut kütlemizin her kilogramı için en az 1 gram yağ tüketmek bizim için ideal bir sınırdır diyebiliriz.
                </p>
                <p className="detail-text">
                    Yağlar gram başına 9 kcal sağlar. Bu yüzden enerji yoğunlukları yüksektir. Yeterli miktarda yağ almak hem doygunluk hissini destekler hem de yağda çözünen vitaminlerin (A, D, E, K) emilimini sağlar.
                </p>
                <p className="detail-text">
                    <strong>Yağ Yemek Yağlandırır mı?</strong> Kesinlikle hayır. Yağlanmayı belirleyen şey yağ tüketimi değil, kalori fazlasıdır. Vücut yağ depolamaya kalori fazlası olduğunda başlar, hangi makrodan geldiği ikinci plandadır.
                </p>

                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '20px', marginBottom: '10px', color: 'var(--primary)' }}>Sağlıklı Yağ Kaynakları</h4>
                <p className="detail-text">Yağ alımının kalitesini artırmak için doymamış yağlardan zengin kaynaklara yönelmek en doğru yaklaşımdır.</p>

                <div className="source-list">
                    <span className="source-tag">Zeytinyağı</span>
                    <span className="source-tag">Avokado</span>
                    <span className="source-tag">Badem, Fındık, Ceviz</span>
                    <span className="source-tag">Somon, Uskumru (Omega-3)</span>
                    <span className="source-tag">Chia ve Keten Tohumu</span>
                </div>
            </div>
        </div>
    );
};

export default Fats;
