import React, { useEffect } from 'react';
import './EbookContents.css';

const chapters = [
    { id: 1, title: 'Kilo Verme Prensipleri', desc: 'Sağlıklı ve kalıcı kilo vermenin temel taşları.' },
    { id: 2, title: 'Kalori Açığı', desc: 'Vücudun enerji dengesi ve yağ yakımının matematiği.' },
    { id: 3, title: 'Hiçbir Besin Kilo Aldırmaz', desc: 'Besinlere dair yanlış inançları yıkıyoruz.' },
    { id: 4, title: 'Besin Kaynakları', desc: 'Makro ve mikro besinlerin en kaliteli kaynakları.' },
    { id: 5, title: 'Neden Yüksek Protein?', desc: 'Kas gelişimi ve tokluk hissi için proteinin önemi.' },
    { id: 6, title: 'Karbonhidrat ve İnsülin Direnci', desc: 'Karbonhidrat döngüsü ve insülin yönetimi.' },
    { id: 7, title: 'Şekerden Korkmayın', desc: 'Şekerin vücuttaki rolü ve doğru tüketimi.' },
    { id: 8, title: 'Yağı Abartma', desc: 'Yağ yakarken yağ tüketimine dikkat etmek.' },
    { id: 9, title: 'Mikro Besinler', desc: 'Vitaminler ve minerallerin görünmeyen gücü.' },
    { id: 10, title: 'Örnek Öğün Planı', desc: 'Pratik ve uygulanabilir günlük beslenme rutini.' },
    { id: 11, title: 'Gece Yiyebilirsiniz', desc: 'Gece yeme alışkanlığı ve metabolizma gerçekleri.' },
    { id: 12, title: 'Öğün Zamanlaması', desc: 'Ne zaman yediğiniz değil, ne kadar yediğiniz önemli.' },
    { id: 13, title: 'Yağ Yakmak ve Kaybetmek', desc: 'İkisi arasındaki fark ve hedefe giden yol.' },
    { id: 14, title: 'Günlük Aktivite Düzeyi', desc: 'NEAT ve günlük enerji harcamanızı artırmak.' },
    { id: 15, title: 'Ağırlık ve Kardiyo Çalışmaları', desc: 'Hangi antrenman tipi hedefinize daha uygun?' },
    { id: 16, title: 'Su Atmak', desc: 'Ödem atma yöntemleri ve suyun önemi.' },
    { id: 17, title: 'Supplementler', desc: 'Gerekli ve gereksiz takviyeler hakkında her şey.' },
    { id: 18, title: 'Diyet Kültürü ve Psikolojisi', desc: 'Sürdürülebilir bir yaşam tarzı oluşturmak.' },
    { id: 19, title: 'Uykunun Önemi', desc: 'Gelişim ve toparlanma için uykunun kritik rolü.' },
];

const EbookContents = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ebook-contents-page page-transition">
            <div className="container">
                <header className="contents-header">
                    <span className="contents-subtitle">Kitap İçeriği</span>
                    <h1 className="contents-title">Neler Öğreneceksiniz?</h1>
                    <p className="contents-description">
                        Bilimsel temellere dayanan, hurafelerden uzak ve sonuç odaklı bu rehberde sizi bekleyen konulara göz atın.
                    </p>
                </header>

                <div className="contents-grid">
                    {chapters.map((chapter) => (
                        <div key={chapter.id} className="content-card">
                            <span className="content-number">{chapter.id}</span>
                            <div className="content-info">
                                <h3>{chapter.title}</h3>
                                <p>{chapter.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="contents-footer">
                    <a
                        href="https://www.shopier.com/fitdegisimhocan/35973708"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contents-cta-btn"
                    >
                        Hemen İndirin
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EbookContents;
