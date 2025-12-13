const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-content">
                <h2 style={{ fontSize: '2rem', marginBottom: '24px', letterSpacing: '-0.5px' }}>Biz Kimiz?</h2>
                <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '50px', lineHeight: '1.8', maxWidth: '750px', margin: '0 auto 50px auto' }}>
                    Fitness dünyasının kalıplaşmış kurallarını bir kenara bırakıyoruz. Amacımız sadece antrenman yaptırmak değil; bilgiyi en anlaşılır ve keyifli haliyle sunarak sürdürülebilir bir yaşam tarzı inşa etmenize yardımcı olmak. Bilimin ışığında, karmaşadan uzak ve sonuç odaklı bir gelişim yolculuğuna davetlisiniz.
                </p>

                <div className="stats-container">
                    <div className="stat-box">
                        <span className="stat-number">+33M</span>
                        <span className="stat-label">Görüntülenme</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
