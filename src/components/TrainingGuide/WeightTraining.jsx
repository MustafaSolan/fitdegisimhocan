import React from 'react';
import weightImg from '../../assets/weight_training.png';
import '../NutritionGuide/NutritionGuide.css'; // Reusing the CSS for consistency

const FAQSection = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Kas nasıl gelişir?",
            answer: (
                <>
                    <p>Kas gelişimi aslında çok basit bir mekanizmaya sahip. Bu mekanizmaya <strong>progressive overload</strong> diyoruz. Yani zamanla ağırlığı, tekrar sayısını veya toplam hacmi artırmak.</p>
                    <p>Vücut “bu harekette güçlendim” sinyalini alınca kas geliştiriyor. Bunun üzerine yeterli protein ve iyi bir uyku eklendi mi, süreç zaten verimli şekilde işliyor.</p>
                </>
            )
        },
        {
            question: "Tekrar sayısı ne olmalı?",
            answer: (
                <p>Setlerin çoğunu <strong>6–8 tekrar</strong> aralığında, seni gerçekten zorlayan ağırlıklarla yapmak en verimlisi. Çünkü bu aralık yüksek ağırlık gerektiren kas liflerini de uyarıyor. Göğüs, sırt, bacak… fark etmez, tüm bölgeler için mantık aynı.</p>
            )
        },
        {
            question: "Hangi antrenman metodunu kullanmalıyım?",
            answer: (
                <>
                    <p>Bu tamamen haftada kaç gün spor yapabildiğinize bağlı.</p>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '10px' }}>
                        <li style={{ marginBottom: '8px' }}>🔹 <strong>3 gün</strong> → Full body</li>
                        <li style={{ marginBottom: '8px' }}>🔹 <strong>4–5 gün</strong> → Upper–Lower</li>
                        <li>🔹 <strong>6 gün</strong> → PPL (İtiş, Çekiş, Bacak)</li>
                    </ul>
                    <p style={{ marginTop: '10px' }}>Hepsi yerine göre mantıklı olabilir, önemli olan programı düzenli uygulamak.</p>
                </>
            )
        },
        {
            question: "Kardiyo mu önce, ağırlık mı?",
            answer: (
                <p><strong>Kesinlikle ağırlık antrenmanı önce yapılmalı.</strong> Çünkü enerjinin büyük kısmını ağırlık kaldırmaya ayırmalısınız ki ağırlık veya tekrar artışı yapabilesiniz. Kardiyo sonrası antrenmana girerseniz performans düşer. Hatta ısınmayı bile abartmaya gerek yok; kısa ve yeterli bir ısınma yeterlidir.</p>
            )
        }
    ];

    return (
        <div className="faq-section">
            <h3 className="faq-header">Sıkça Sorulan Sorular</h3>
            <div className="faq-container">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="faq-question">
                            <span className="q-text">{index + 1}) {item.question}</span>
                            <div className="toggle-icon">
                                <span className="icon-line hor"></span>
                                <span className="icon-line ver"></span>
                            </div>
                        </div>
                        <div className="faq-answer" style={{ maxHeight: openIndex === index ? '500px' : '0' }}>
                            <div className="answer-content">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .faq-section {
                    margin-top: 100px;
                    width: 100%;
                    max-width: 900px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .faq-header {
                    text-align: center;
                    font-size: 2rem;
                    font-weight: 800;
                    margin-bottom: 40px;
                    color: #333;
                }

                .faq-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .faq-item {
                    background: #fff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.03);
                    border: 1px solid #eee;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .faq-item:hover {
                    box-shadow: 0 8px 25px rgba(0,0,0,0.06);
                    border-color: #FF9800;
                }
                
                .faq-item.active {
                    border-color: #FF9800;
                    box-shadow: 0 8px 25px rgba(255, 152, 0, 0.1);
                }

                .faq-question {
                    padding: 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #fff;
                }

                .q-text {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #1a1a1a;
                }

                .toggle-icon {
                    width: 32px;
                    height: 32px;
                    background: #fff3e0;
                    border-radius: 50%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .faq-item.active .toggle-icon {
                    background: #FF9800;
                    transform: rotate(90deg);
                }

                .icon-line {
                    position: absolute;
                    background: #FF9800;
                    border-radius: 2px;
                    transition: all 0.3s ease;
                }

                .faq-item.active .icon-line {
                    background: #fff;
                }

                .icon-line.hor {
                    width: 14px;
                    height: 2px;
                }

                .icon-line.ver {
                    width: 2px;
                    height: 14px;
                }

                .faq-item.active .icon-line.ver {
                    opacity: 0; /* Turn into minus */
                }

                .faq-answer {
                    overflow: hidden;
                    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .answer-content {
                    padding: 0 25px 25px 25px;
                    color: #555;
                    line-height: 1.7;
                    font-size: 1.05rem;
                }
            `}</style>
        </div>
    );
};

const WeightTraining = () => {
    return (
        <section id="weight-training" className="nutrition-guide-section page-transition">
            <div className="wt-page-container">
                <div className="content-wrapper">

                    <div className="nutrition-content-wrapper">
                        <div className="detail-block">
                            {/* Image removed as per user request */}
                            <div className="detail-content">
                                <h3 className="detail-title"><span className="detail-icon">🏋️‍♂️</span> Neden Ağırlık Antrenmanı Yapmalıyız?</h3>

                                <p className="detail-text">
                                    Ağırlık antrenmanı denince çoğu kişinin aklına sadece kas yapmak geliyor ama getirisi kesinlikle tahmin edilenden çok daha fazla. Düzenli olarak ağırlık kaldırmanın hem beden hem de zihin için yapabileceğiniz en iyi yatırımlardan biri olduğunu düşünüyorum.
                                </p>

                                <p className="detail-text">
                                    Öncelikle kalp ve damar sağlığına ciddi katkı sağlıyor. Kaslarınız güçlendikçe vücudunuzun oksijen kullanma kapasitesi artıyor, dolaşım hızlanıyor ve kalp daha verimli çalışıyor. Bu da olası hastalıkların önüne geçmeniz anlamına geliyor.
                                </p>

                                <p className="detail-text">
                                    Bir diğer önemli nokta ise özgüvene etkisi. Güçlü hissetmek, aynada kendinizi daha diri görmek ve hedeflerinizi adım adım başarmak… bunlar doğal olarak kendinize güveninizi yukarı çekiyor. Birçok insanın sporla birlikte hayatının başka alanlarında da daha cesur hale gelmesi hiç şaşırtıcı değil.
                                </p>

                                <div className="info-box" style={{
                                    backgroundColor: '#f0f9ff',
                                    borderLeft: '4px solid #2196F3',
                                    padding: '15px',
                                    margin: '20px 0',
                                    borderRadius: '0 8px 8px 0'
                                }}>
                                    <p className="detail-text" style={{ margin: 0 }}>
                                        <strong>Bilinmeyen Bir Fayda:</strong> Bilimsel araştırmalara göre düzenli güç antrenmanı yapan bireylerin akademik ve mental performansı daha yüksek oluyor. Çünkü ağırlık antrenmanı stres hormonlarını azaltıyor, odaklanmayı artırıyor ve beynin öğrenme kapasitesini olumlu etkiliyor.
                                    </p>
                                </div>

                                <p className="detail-text">
                                    Tabii ki işin fiziksel tarafı da çok değerli. Ağırlık çalışmak vücut postürünü düzeltir. Uzun süre masa başında çalışan biriyseniz, özellikle sırt ve core kaslarını güçlendirmek duruşunuzu ciddi anlamda toparlar.
                                </p>

                                <p className="detail-text">
                                    Ve elbette kas kütlesi artışı da sürecin sonunda kaçınılmaz. Kaslar büyüdükçe vücudun bazal metabolizma hızı da artar. Yani dinlenirken bile daha fazla kalori yakmaya başlarsınız. Bu da yağ kaybını hızlandıran çok güzel bir bonus etkidir.
                                </p>


                                <p className="detail-text" style={{ fontWeight: '600', marginTop: '15px' }}>
                                    Kısacası, ağırlık antrenmanı daha sağlıklı, güçlü, enerjik, özgüvenli ve zinde bir hayat yaşamak için yapılabilir. Kendinizi her açıdan upgrade ettiğiniz bir süreç gibi düşünebilirsiniz.
                                </p>

                                {/* Goal Calculator */}
                                <GoalCalculator />

                                {/* Detailed Goal Guides */}
                                <div className="goal-guides-container">

                                    <div className="guide-card" id="bulk-guide">
                                        <div className="guide-header">
                                            <div className="guide-icon">📈</div>
                                            <h4>Kilo Alarak Kas Kütlesi Artırmak</h4>
                                        </div>
                                        <div className="guide-content">
                                            <h5>Ektomorf Nedir?</h5>
                                            <p>Ektomorf, vücut olarak genelde ince yapılı, kemikli, kol/bacak çevresi dar olan, kilo alması zor kişiler için kullanılan terim. Bu vücut tipine sahip kişilerin metabolizması hızlı çalışır ve normal yeme düzeniyle kilo almakta zorlanırlar.</p>
                                            <p>Eğer siz de bu vücut tipine sahipseniz ve biraz daha hacimli, kaslı ve güçlü görünmek istiyorsanız, kilo alarak kas yapmak sizin için mantıklı bir yol.</p>

                                            <div className="action-box">
                                                <h5>Ne Yapmalı?</h5>
                                                <ul>
                                                    <li><strong>Yüksek Yoğunluk:</strong> Yüksek yoğunluklu ağırlık antrenmanı yapmalısınız. Bu, en önemli kural bizim için.</li>
                                                    <li><strong>Kalori Fazlası:</strong> Günlük ihtiyacına ek olarak yaklaşık 300–500 kalori fazladan almaya çalışın. Bu fazlalık, vücudun kas yapımı için gereken enerjiyi sağlayacak.</li>
                                                    <li><strong>Karbonhidrat Odaklı:</strong> Karbonhidrata ağırlık verebilirsiniz. Ektomorflar genelde çok hızlı yakıyor, bu yüzden proteinden ziyade karbonhidrat alımını artırmak doğru bir seçim olacak.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="guide-card" id="recomp-guide">
                                        <div className="guide-header">
                                            <div className="guide-icon">⚖️</div>
                                            <h4>Sabit Kiloda Kalıp Kas Kütlesi Artırmak</h4>
                                        </div>
                                        <div className="guide-content">
                                            <p>Herkesin hedefi kilo almak ya da yağ yakmak olmamalı. Bazı kişiler için en mantıklı yol, şu anki kilosunu koruyup kas kütlesini artırmak oluyor. Özellikle yağ oranı çok yüksek olmayan ama kas kütlesi de düşük olan biriyseniz, bu yaklaşım size en temiz şekilde ilerleme imkânını sağlayacaktır.</p>
                                            <p>Bu noktada önceliğimiz bulk ya da definasyon yapmak değil. Çünkü vücudun hem çok yağlı hem de çok zayıf değilse, bu iki uç hedef sana tam uymaz. Burada dikkat etmen gereken nokta, vücudun toparlaması ve kasların güçlenmesi.</p>

                                            <div className="action-box">
                                                <h5>Nasıl İlerlemeliyiz?</h5>
                                                <ul>
                                                    <li><strong>Ufak Kalori Açığı:</strong> Kalorini çok düşürmene gerek yok. Günlük ihtiyacına yakın beslenip sadece ufak bir açık bıraktığında hem yağlanmayı engellersiniz hem de vücut enerjisi düşmez.</li>
                                                    <li><strong>Sert Antrenman:</strong> Antrenmanların kesinlikle sert olmalı. Kas kazanmanın anahtarı bu. Vücudunuz “ben burada güçlenmeliyim” sinyalini aldığında kas gelişimi devreye girer.</li>
                                                    <li><strong>Beslenme Dengesi:</strong> Kilo almıyorsunuz diye karbonhidratı azaltmak doğru değil. Sert idmanı kaldıracak enerjin olmalı. Protein ise zaten kas yapımının temel taşı.</li>
                                                    <li><strong>Toparlanma:</strong> Lütfen toparlanmayı ciddiye al. Sabit kalorilerle kas yapmak biraz daha ince bir süreç olduğu için uyku ve dinlenme daha da önem kazanıyor.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="guide-card" id="loss-guide">
                                        <div className="guide-header">
                                            <div className="guide-icon">🔥</div>
                                            <h4>Kilo Vermek İsteyenler İçin En Temiz Yol</h4>
                                        </div>
                                        <div className="guide-content">
                                            <p>Kilo verme süreci sosyal medyada gereksiz karışıklık yaratılan konulardan birisi. Ne yaptığınızı bilerek ilerlediğinizde hızlı ve efektif bir sonuç alabileceğine eminim. En önemli nokta: başlangıçta disiplin. Yağlı bir vücutta erken cheat meal süreci direkt yavaşlatır, o yüzden önce vücudu düzene sokmak şart.</p>

                                            <div className="action-box">
                                                <h5>Nasıl İlerlemeliyiz?</h5>
                                                <div className="step-list">
                                                    <div className="step-item">
                                                        <span className="step-num">1</span>
                                                        <div>
                                                            <strong>Bilinçli Ağırlık Çalışması:</strong> Ağırlık antrenmanı yine şart. Öncelikle metabolizmamızı hızlandırmamız gerekiyor. Artan kas kütlesiyle de harcanan kaloriyi arttırıyoruz.
                                                        </div>
                                                    </div>
                                                    <div className="step-item">
                                                        <span className="step-num">2</span>
                                                        <div>
                                                            <strong>Kontrollü Kardiyo:</strong> Kalori açığını kardiyo ile destekle. Delice koşmana gerek yok; düzen yeterli.
                                                        </div>
                                                    </div>
                                                    <div className="step-item">
                                                        <span className="step-num">3</span>
                                                        <div>
                                                            <strong>Aç Kalmadan Kalori Açığı:</strong> Günlük ihtiyacının 500 kalori kadar aşağısında beslenmen yeterli olacaktır. Gün içinde enerjinizin düşmemesi adına lifli gıdalar odaklı beslenmenizi tavsiye ediyorum.
                                                        </div>
                                                    </div>
                                                    <div className="step-item">
                                                        <span className="step-num">4</span>
                                                        <div>
                                                            <strong>Makroları Dengede Tut:</strong> Kilo veriyorum diye karbonhidratı sıfırlamak yok. Günlük hayat temposunu ve antrenmanı kaldıracak enerji lazım.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <FAQSection />

                                <style jsx>{`
                                .content-wrapper {
                                    max-width: 1200px;
                                    margin: 0 auto;
                                    padding: 40px 20px;
                                    width: 100%;
                                }
                                
                                .wt-page-container {
                                    width: 100%;
                                    display: flex;
                                    justify-content: center;
                                }
                                .goal-guides-container {
                                    margin-top: 80px;
                                    display: flex;
                                    flex-direction: column;
                                    gap: 50px;
                                    width: 100%;
                                }
                                
                                .guide-card {
                                    background: #fff;
                                    border-radius: 20px;
                                    padding: 40px;
                                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                                    border: 2px solid #FF9800; /* Portakal Rengi Border */
                                }

                                .guide-header {
                                    display: flex;
                                    align-items: center;
                                    gap: 20px;
                                    margin-bottom: 25px;
                                    border-bottom: 2px solid #f0f0f0;
                                    padding-bottom: 20px;
                                }

                                .guide-icon {
                                    font-size: 2.5rem;
                                    background: #fff3e0;
                                    color: #FF9800;
                                    width: 60px;
                                    height: 60px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border-radius: 12px;
                                }
                                
                                .guide-header h4 {
                                    font-size: 1.5rem;
                                    font-weight: 700;
                                    color: #333;
                                    margin: 0;
                                }

                                .guide-content p {
                                    font-size: 1.05rem;
                                    color: #555;
                                    line-height: 1.7;
                                    margin-bottom: 20px;
                                }

                                .guide-content h5 {
                                    font-size: 1.2rem;
                                    font-weight: 700;
                                    color: #e65100;
                                    margin-bottom: 15px;
                                }

                                .action-box {
                                    background: #fff8e1;
                                    border-left: 4px solid #FF9800;
                                    padding: 25px;
                                    border-radius: 0 12px 12px 0;
                                    margin-top: 25px;
                                }

                                .action-box ul {
                                    padding-left: 20px;
                                    margin: 0;
                                }

                                .action-box li {
                                    margin-bottom: 12px;
                                    color: #444;
                                    line-height: 1.6;
                                }

                                .step-list {
                                    display: flex;
                                    flex-direction: column;
                                    gap: 15px;
                                }

                                .step-item {
                                    display: flex;
                                    gap: 15px;
                                    align-items: flex-start;
                                }

                                .step-num {
                                    background: #FF9800;
                                    color: white;
                                    width: 24px;
                                    height: 24px;
                                    border-radius: 50%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-weight: 700;
                                    font-size: 0.8rem;
                                    flex-shrink: 0;
                                    margin-top: 3px;
                                }
                            `}</style>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GoalCalculator = () => {
    const [step, setStep] = React.useState(0);
    const [answers, setAnswers] = React.useState({});
    const [result, setResult] = React.useState(null);

    const questions = [
        {
            id: 1,
            question: "Şu anki fiziksel görünümünü nasıl değerlendiriyorsun?",
            options: [
                { id: 'A', text: "A) Yağ oranım yüksek, sıkılaşmaya ihtiyacım var" },
                { id: 'B', text: "B) Zayıf / ince yapılıyım, kas kütlem düşük" },
                { id: 'C', text: "C) Kilom yüksek değil, ama göbeğimi görebiliyorum" }
            ]
        },
        {
            id: 2,
            question: "Baş parmağınız ve orta parmağınız ile belimin yan kısmını kavrayınca..",
            options: [
                { id: 'A', text: "A) Çok fazla yağ kütlesi geliyor" },
                { id: 'B', text: "B) Kilom yüksek değil ama yağ kütlesi geliyor" },
                { id: 'C', text: "C) Hiç yağ kütlesi gelmiyor" }
            ]
        },
        {
            id: 3,
            question: "Ayna karşısında genel hatlarınızı nasıl görüyorsunuz?",
            options: [
                { id: 'A', text: "A) Ağırlık daha çok alt bölgede toplanıyor" },
                { id: 'B', text: "B) Hatlar düz ve simetrik" },
                { id: 'C', text: "C) Bel kıvrımı belirgin" }
            ]
        }
    ];

    const handleAnswer = (optionId) => {
        const newAnswers = { ...answers, [step]: optionId };
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers) => {
        let counts = { A: 0, B: 0, C: 0 };
        Object.values(finalAnswers).forEach(ans => counts[ans] = (counts[ans] || 0) + 1);

        let title = "";
        let desc = "";
        let targetId = "";

        if (counts.A >= 2) {
            title = "Kilo Vermeye Odaklan";
            desc = "Yağ oranını düşürmek için kalori açığı oluşturmalı ve kardiyoyu artırmalısın.";
            targetId = "loss-guide";
        } else if (counts.B >= 2) {
            title = "Kilo Alarak Kas Kazan (Bulk)";
            desc = "Kas kütlesini artırmak için kontrollü kalori fazlası ve ağır güç antrenmanı yapmalısın.";
            targetId = "bulk-guide";
        } else if (counts.C >= 2) {
            title = "Vücut Rekompozisyonu";
            desc = "Mevcut kilonu koruyarak yağ yakıp kas yapmaya (sıkılaşmaya) odaklanmalısın.";
            targetId = "recomp-guide";
        } else {
            if (counts.A === 1 && counts.B === 1 && counts.C === 1) {
                title = "Vücut Rekompozisyonu";
                desc = "Dengeli beslenip antrenman şiddetini artırarak vücudunu şekillendirmelisin.";
                targetId = "recomp-guide";
            } else if (counts.A > 0) {
                title = "Kilo Vermeye Odaklan";
                desc = "Önce fazlalıklarından kurtulup daha temiz bir temel üzerine inşa etmelisin.";
                targetId = "loss-guide";
            } else {
                title = "Kilo Alarak Kas Kazan (Bulk)";
                desc = "Kas inşası için yakıta ihtiyacın var, korkmadan yemelisin.";
                targetId = "bulk-guide";
            }
        }

        setResult({ title, desc, targetId });
    };

    const scrollToGuide = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Offset for navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const resetQuiz = () => {
        setStep(0);
        setAnswers({});
        setResult(null);
    };

    const currentQ = questions[step];

    return (
        <section className="calculator-section-wrapper">
            <div className="container">
                <div className="calc-header-section">
                    <h3 className="section-title">HEDEFİNİ BELİRLE</h3>
                    <div className="title-underline"></div>
                </div>

                <div className="calc-group-container">
                    {/* Left Card: Calculator Interface */}
                    <div className="calc-card left-card">
                        {!result ? (
                            <div className="calc-interface">
                                <div className="calc-progress-box">
                                    <div className="calc-progress-labels">
                                        <span>İlerleme</span>
                                        <span>{step + 1} / {questions.length}</span>
                                    </div>
                                    <div className="calc-progress-bg">
                                        <div className="calc-progress-fill" style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
                                    </div>
                                </div>

                                <div className="calc-question-box">
                                    <h4 className="q-text">{currentQ.question}</h4>
                                    <div className="calc-options-list">
                                        {currentQ.options.map((opt) => (
                                            <button
                                                key={opt.id}
                                                className={`calc-option-btn ${answers[step] === opt.id ? 'selected' : ''}`}
                                                onClick={() => handleAnswer(opt.id)}
                                            >
                                                <span className="opt-indicator"></span>
                                                <span className="opt-text">{opt.text}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="calc-completed-state">
                                <div className="completed-icon-circle">
                                    <div className="checkmark">✓</div>
                                </div>
                                <h4>Analiz Tamamlandı!</h4>
                                <p>Sana en uygun antrenman hedefini sağ tarafta görebilirsin.</p>
                                <button className="calc-reset-btn" onClick={resetQuiz}>⟳ Testi Tekrarla</button>
                            </div>
                        )}
                    </div>

                    {/* Right Card: Results Display */}
                    <div className="calc-card right-card">
                        {result ? (
                            <div className="result-premium-content">
                                <div className="result-badge">TAVSİYE EDİLEN HEDEF</div>
                                <h3 className="result-title">{result.title}</h3>
                                <p className="result-desc">{result.desc}</p>
                                <div className="result-decoration"></div>
                                <button className="action-scroll-btn" onClick={() => scrollToGuide(result.targetId)}>
                                    PLANINI GÖR ↓
                                </button>
                            </div>
                        ) : (
                            <div className="result-placeholder">
                                <span className="p-icon">🎯</span>
                                <p>Soruları cevapladığında<br />hedefin burada belirecek.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .calculator-section-wrapper {
                    padding: 60px 0;
                    width: 100%;
                    background: transparent;
                }

                .calc-header-section {
                    text-align: center;
                    margin-bottom: 50px;
                }

                .section-title {
                    font-size: 1.8rem;
                    font-weight: 800;
                    letter-spacing: 1px;
                    color: #333;
                    margin: 0;
                }

                .title-underline {
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(90deg, #2196F3, #21CBF3);
                    margin: 15px auto 0;
                    border-radius: 2px;
                }

                .calc-group-container {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    max-width: 1200px; /* Increased from 1100px */
                    margin: 0 auto;
                    width: 100%;
                }

                .calc-card {
                    flex: 1;
                    min-width: 400px; /* Added min-width to prevent 'thin and long' look */
                    background: #ffffff;
                    border-radius: 24px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    padding: 40px;
                    min-height: 400px;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid rgba(0,0,0,0.02);
                }

                .calc-card.left-card {
                    flex: 1.2; /* Give slightly more space to questions */
                }

                /* Progress Styling */
                .calc-progress-box {
                    margin-bottom: 30px;
                }

                .calc-progress-labels {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.85rem;
                    color: #888;
                    font-weight: 600;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                }

                .calc-progress-bg {
                    height: 6px;
                    background: #f0f0f0;
                    border-radius: 3px;
                    overflow: hidden;
                }

                .calc-progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #2196F3, #21CBF3);
                    border-radius: 3px;
                    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Question Styling */
                .q-text {
                    font-size: 1.2rem;
                    color: #1a1a1a;
                    margin-bottom: 25px;
                    line-height: 1.5;
                    font-weight: 700;
                }

                .calc-options-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .calc-option-btn {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: 16px 20px;
                    border: 2px solid #f4f4f4;
                    border-radius: 14px;
                    background: #fff;
                    cursor: pointer;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                    text-align: left;
                    position: relative;
                }

                .calc-option-btn:hover {
                    border-color: #b3e5fc;
                    background-color: #f8fbff;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 10px rgba(0,0,0,0.03);
                }

                .calc-option-btn.selected {
                    border-color: #2196F3;
                    background-color: #e3f2fd;
                    color: #1565C0;
                }

                .opt-indicator {
                    width: 20px;
                    height: 20px;
                    border: 2px solid #ddd;
                    border-radius: 50%;
                    margin-right: 15px;
                    flex-shrink: 0;
                    position: relative;
                }

                .calc-option-btn.selected .opt-indicator {
                    border-color: #2196F3;
                    background: #2196F3;
                }
                
                .calc-option-btn.selected .opt-indicator::after {
                    content: '';
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background: white;
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                
                .opt-text {
                    font-size: 1rem;
                    font-weight: 500;
                    color: inherit;
                }

                /* Completion State */
                .calc-completed-state {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }

                .completed-icon-circle {
                    width: 80px;
                    height: 80px;
                    background: #e8f5e9;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                }

                .checkmark {
                    color: #4caf50;
                    font-size: 2.5rem;
                }

                .calc-reset-btn {
                    margin-top: 25px;
                    background: #f5f5f5;
                    border: none;
                    color: #666;
                    padding: 12px 25px;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .calc-reset-btn:hover {
                    background: #eeeeee;
                    color: #333;
                }

                /* Right Card Specifics */
                .calc-card.right-card {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 0; /* Let children handle padding if needed, or overlay */
                    overflow: hidden;
                    position: relative;
                }

                /* If result is showing, make it fancy */
                .result-premium-content {
                    background: linear-gradient(145deg, #1565C0, #0d47a1);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                    color: white;
                }

                .result-badge {
                    display: inline-block;
                    background: rgba(255,255,255,0.15);
                    color: #90caf9;
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    padding: 8px 16px;
                    border-radius: 30px;
                    margin-bottom: 25px;
                    backdrop-filter: blur(5px);
                }

                .result-title {
                    font-size: 2rem;
                    font-weight: 800;
                    line-height: 1.25;
                    margin-bottom: 20px;
                    color: #fff;
                }

                .result-desc {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: rgba(255,255,255,0.9);
                    max-width: 90%;
                }

                /* Placeholder */
                .result-placeholder {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: #aaa;
                    padding: 40px;
                }

                .p-icon {
                    font-size: 3.5rem;
                    display: block;
                    margin-bottom: 20px;
                    opacity: 0.4;
                    filter: grayscale(100%);
                }

                .action-scroll-btn {
                    margin-top: 30px;
                    background: white;
                    color: #1565C0;
                    border: none;
                    padding: 14px 30px;
                    border-radius: 50px;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                    cursor: pointer;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                }

                .action-scroll-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                }

                @media (max-width: 900px) {
                    .calc-group-container {
                        flex-direction: column;
                    }
                    .calc-card {
                        min-width: 100%; 
                        min-height: auto;
                    }
                }
            `}</style>
        </section>
    );
};



export default WeightTraining;
