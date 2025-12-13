import React from 'react';
import proteinImg from '../../assets/protein.png';
import './NutritionDetails.css';

const Proteins = () => {
    return (
        <div className="detail-block">
            <div className="detail-image-container">
                <img src={proteinImg} alt="Protein Kaynakları" className="detail-image" />
            </div>
            <div className="detail-content">
                <h3 className="detail-title">
                    <span className="detail-icon">🥩</span>
                    Proteinler
                </h3>
                <p className="detail-text">
                    Fitness söz konusu olduğunda en belirleyici makro proteindir. Kasın onarımı, büyümesi ve antrenman sonrası toparlanma doğrudan yeterli protein almaya bağlıdır.
                </p>
                <p className="detail-text">
                    1 gram protein yaklaşık 4 kcal enerji sağlar. Üstelik hem en doyurucu makrodur hem de yüksek termik etkiye sahiptir. Yani aldığınız proteinin sindirilmesi için harcanan enerji yüksektir; tüketilen proteinin yaklaşık %25–30’u sindirim sırasında yakılır. Bu da özellikle yağ yakım dönemlerinde önemli bir avantaj oluşturur.
                </p>
                <p className="detail-text">
                    Protein alımı, kaslarımızı oluşturan aktin ve miyozin iplikçiklerinin üretimi için gereken hammaddenin düzenli olarak sağlanması anlamına gelir. Bu süreçte vücut, yeni kas dokusu oluşturmak için sürekli “tamir ve inşa” halinde olur.
                </p>
                <p className="detail-text">
                    Ayrıca antrenman sonrası başlayan kas protein sentezi, kas gelişiminin temel mekanizmasıdır. Yeterli protein aldığınızda bu süreç verimli çalışır; az aldığınızda ise kas kazanımı yavaşlar ve toparlanma gecikir.
                </p>

                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '20px', marginBottom: '10px', color: 'var(--primary)' }}>Hayvansal Protein Kaynakları</h4>
                <p className="detail-text" style={{ fontSize: '0.95rem', marginBottom: '15px' }}>
                    Hayvansal proteinler “tam protein” kabul edilir. Yani vücudun ihtiyaç duyduğu tüm 9 temel amino asidi eksiksiz şekilde içerir. Biyoyararlılık açısından üstündür.
                </p>
                <div className="source-list">
                    <span className="source-tag">Protein Tozu</span>
                    <span className="source-tag">Tavuk, Hindi, Kırmızı Et</span>
                    <span className="source-tag">Balık ve Deniz Ürünleri</span>
                    <span className="source-tag">Yumurta</span>
                    <span className="source-tag">Süt ve Süt Ürünleri</span>
                </div>

                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '20px', marginBottom: '10px', color: 'var(--primary)' }}>Bitkisel Protein Kaynakları</h4>
                <div className="source-list">
                    <span className="source-tag">Mercimek, Nohut, Fasulye</span>
                    <span className="source-tag">Kinoa</span>
                    <span className="source-tag">Tofu (Soya)</span>
                    <span className="source-tag">Kuruyemişler</span>
                    <span className="source-tag">Yulaf</span>
                </div>

                <p className="detail-text" style={{ marginTop: '20px', fontStyle: 'italic', fontSize: '0.9rem' }}>
                    <strong>Hangi Tür Daha Avantajlı?</strong> Biyoyararlılık ve kas gelişimi açısından hayvansal proteinler, yüksek lösin içeriği ve hızlı sindirimi ile daha üstündür ancak bitkisel kaynaklarla desteklenmiş bir diyet en sağlıklısıdır.
                </p>
            </div>
        </div>
    );
};

export default Proteins;
