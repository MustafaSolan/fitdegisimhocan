import React from 'react';
import Proteins from './Proteins';
import Carbs from './Carbs';
import Fats from './Fats';
import './NutritionGuide.css';

const NutritionGuide = () => {
    return (
        <section id="besin" className="nutrition-guide-section page-transition">
            <div className="container">
                <div className="section-header center-text">
                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 6vw, 3rem)',
                        background: 'linear-gradient(to right, #ff6600, #ff9933)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '20px',
                        fontWeight: '800',
                        wordBreak: 'break-word'
                    }}>Nasıl Beslenmeliyiz?</h1>
                    <h2 className="section-title">Besin Rehberi</h2>
                    <p className="section-subtitle">
                        Beslenme kişiye özeldir. Hepimizin iş temposu, günlük düzeni ve yaşam şartları farklı olduğu için herkesin aynı programı uygulaması mümkün değil. Önemli olan, kendi hayatına uyum sağlayan bir düzen oluşturmak. Bu rehberin amacı kısıtlamalar koymak değil, beslenmenin temel mantığını anlatmaktır.
                    </p>
                </div>

                <div className="nutrition-content-wrapper">
                    <Proteins />
                    <Carbs />
                    <Fats />
                </div>
            </div>
        </section>
    );
};

export default NutritionGuide;
