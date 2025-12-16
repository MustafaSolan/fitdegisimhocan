import React from 'react';
import weightImg from '../../assets/weight_training.png';
import '../NutritionGuide/NutritionGuide.css';
import '../NutritionGuide/NutritionDetails.css';
import './WeightTraining.css';

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
                    <p>Vücut "bu harekette güçlendim" sinyalini alınca kas geliştiriyor. Bunun üzerine yeterli protein ve iyi bir uyku eklendi mi, süreç zaten verimli şekilde işliyor.</p>
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
        <div className="wt-faq-section">
            <h3 className="wt-faq-header">Sıkça Sorulan Sorular</h3>
            <div className="wt-faq-container">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`wt-faq-item ${openIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="wt-faq-question">
                            <span className="wt-q-text">{index + 1}) {item.question}</span>
                            <div className="wt-toggle-icon">
                                <span className="wt-icon-line hor"></span>
                                <span className="wt-icon-line ver"></span>
                            </div>
                        </div>
                        <div className="wt-faq-answer" style={{ maxHeight: openIndex === index ? '500px' : '0' }}>
                            <div className="wt-answer-content">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const WeightTraining = () => {
    return (
        <section id="weight-training" className="nutrition-guide-section page-transition">
            <div className="wt-page-container">
                <div className="wt-content-wrapper">

                    <div className="nutrition-content-wrapper">
                        <div className="detail-block">
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
                                <div className="wt-goal-guides-container">

                                    <div className="wt-guide-card" id="bulk-guide">
                                        <div className="wt-guide-header">
                                            <div className="wt-guide-icon">📈</div>
                                            <h4>Kilo Alarak Kas Kütlesi Artırmak</h4>
                                        </div>
                                        <div className="wt-guide-content">
                                            <h5>Ektomorf Nedir?</h5>
                                            <p>Ektomorf, vücut olarak genelde ince yapılı, kemikli, kol/bacak çevresi dar olan, kilo alması zor kişiler için kullanılan terim. Bu vücut tipine sahip kişilerin metabolizması hızlı çalışır ve normal yeme düzeniyle kilo almakta zorlanırlar.</p>
                                            <p>Eğer siz de bu vücut tipine sahipseniz ve biraz daha hacimli, kaslı ve güçlü görünmek istiyorsanız, kilo alarak kas yapmak sizin için mantıklı bir yol.</p>

                                            <div className="wt-action-box">
                                                <h5>Ne Yapmalı?</h5>
                                                <ul>
                                                    <li><strong>Yüksek Yoğunluk:</strong> Yüksek yoğunluklu ağırlık antrenmanı yapmalısınız. Bu, en önemli kural bizim için.</li>
                                                    <li><strong>Kalori Fazlası:</strong> Günlük ihtiyacına ek olarak yaklaşık 300–500 kalori fazladan almaya çalışın. Bu fazlalık, vücudun kas yapımı için gereken enerjiyi sağlayacak.</li>
                                                    <li><strong>Karbonhidrat Odaklı:</strong> Karbonhidrata ağırlık verebilirsiniz. Ektomorflar genelde çok hızlı yakıyor, bu yüzden proteinden ziyade karbonhidrat alımını artırmak doğru bir seçim olacak.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wt-guide-card" id="recomp-guide">
                                        <div className="wt-guide-header">
                                            <div className="wt-guide-icon">⚖️</div>
                                            <h4>Sabit Kiloda Kalıp Kas Kütlesi Artırmak</h4>
                                        </div>
                                        <div className="wt-guide-content">
                                            <p>Herkesin hedefi kilo almak ya da yağ yakmak olmamalı. Bazı kişiler için en mantıklı yol, şu anki kilosunu koruyup kas kütlesini artırmak oluyor. Özellikle yağ oranı çok yüksek olmayan ama kas kütlesi de düşük olan biriyseniz, bu yaklaşım size en temiz şekilde ilerleme imkânını sağlayacaktır.</p>
                                            <p>Bu noktada önceliğimiz bulk ya da definasyon yapmak değil. Çünkü vücudun hem çok yağlı hem de çok zayıf değilse, bu iki uç hedef sana tam uymaz. Burada dikkat etmen gereken nokta, vücudun toparlaması ve kasların güçlenmesi.</p>

                                            <div className="wt-action-box">
                                                <h5>Nasıl İlerlemeliyiz?</h5>
                                                <ul>
                                                    <li><strong>Ufak Kalori Açığı:</strong> Kalorini çok düşürmene gerek yok. Günlük ihtiyacına yakın beslenip sadece ufak bir açık bıraktığında hem yağlanmayı engellersiniz hem de vücut enerjisi düşmez.</li>
                                                    <li><strong>Sert Antrenman:</strong> Antrenmanların kesinlikle sert olmalı. Kas kazanmanın anahtarı bu. Vücudunuz "ben burada güçlenmeliyim" sinyalini aldığında kas gelişimi devreye girer.</li>
                                                    <li><strong>Beslenme Dengesi:</strong> Kilo almıyorsunuz diye karbonhidratı azaltmak doğru değil. Sert idmanı kaldıracak enerjin olmalı. Protein ise zaten kas yapımının temel taşı.</li>
                                                    <li><strong>Toparlanma:</strong> Lütfen toparlanmayı ciddiye al. Sabit kalorilerle kas yapmak biraz daha ince bir süreç olduğu için uyku ve dinlenme daha da önem kazanıyor.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wt-guide-card" id="loss-guide">
                                        <div className="wt-guide-header">
                                            <div className="wt-guide-icon">🔥</div>
                                            <h4>Kilo Vermek İsteyenler İçin En Temiz Yol</h4>
                                        </div>
                                        <div className="wt-guide-content">
                                            <p>Kilo verme süreci sosyal medyada gereksiz karışıklık yaratılan konulardan birisi. Ne yaptığınızı bilerek ilerlediğinizde hızlı ve efektif bir sonuç alabileceğine eminim. En önemli nokta: başlangıçta disiplin. Yağlı bir vücutta erken cheat meal süreci direkt yavaşlatır, o yüzden önce vücudu düzene sokmak şart.</p>

                                            <div className="wt-action-box">
                                                <h5>Nasıl İlerlemeliyiz?</h5>
                                                <div className="wt-step-list">
                                                    <div className="wt-step-item">
                                                        <span className="wt-step-num">1</span>
                                                        <div>
                                                            <strong>Bilinçli Ağırlık Çalışması:</strong> Ağırlık antrenmanı yine şart. Öncelikle metabolizmamızı hızlandırmamız gerekiyor. Artan kas kütlesiyle de harcanan kaloriyi arttırıyoruz.
                                                        </div>
                                                    </div>
                                                    <div className="wt-step-item">
                                                        <span className="wt-step-num">2</span>
                                                        <div>
                                                            <strong>Kontrollü Kardiyo:</strong> Kalori açığını kardiyo ile destekle. Delice koşmana gerek yok; düzen yeterli.
                                                        </div>
                                                    </div>
                                                    <div className="wt-step-item">
                                                        <span className="wt-step-num">3</span>
                                                        <div>
                                                            <strong>Aç Kalmadan Kalori Açığı:</strong> Günlük ihtiyacının 500 kalori kadar aşağısında beslenmen yeterli olacaktır. Gün içinde enerjinizin düşmemesi adına lifli gıdalar odaklı beslenmenizi tavsiye ediyorum.
                                                        </div>
                                                    </div>
                                                    <div className="wt-step-item">
                                                        <span className="wt-step-num">4</span>
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
        },
        {
            id: 4,
            question: "Normal beslenme düzeninle kilo durumun nasıl değişir?",
            options: [
                { id: 'A', text: "A) Çok kolay kilo alırım, yediklerim hemen kiloya yansır" },
                { id: 'B', text: "B) Kilom genellikle sabit kalır" },
                { id: 'C', text: "C) Ne kadar yesem de kilo almakta zorlanırım" }
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
        // Her soru için cevap-hedef eşlemesi
        // Soru 0: A=loss, B=bulk, C=recomp
        // Soru 1: A=loss, B=recomp, C=bulk
        // Soru 2: A=loss, B=bulk, C=recomp
        // Soru 3 (Metabolizma): A=loss, B=recomp, C=bulk

        const answerMappings = {
            0: { A: 'loss', B: 'bulk', C: 'recomp' },
            1: { A: 'loss', B: 'recomp', C: 'bulk' },
            2: { A: 'loss', B: 'bulk', C: 'recomp' },
            3: { A: 'loss', B: 'recomp', C: 'bulk' }
        };

        let goalCounts = { loss: 0, bulk: 0, recomp: 0 };

        Object.entries(finalAnswers).forEach(([questionIndex, answer]) => {
            const mapping = answerMappings[questionIndex];
            if (mapping && mapping[answer]) {
                goalCounts[mapping[answer]]++;
            }
        });

        let title = "";
        let desc = "";
        let targetId = "";

        // 4 soru için en az 2 eşleşme gerekli
        if (goalCounts.loss >= 2) {
            title = "Kilo Vermeye Odaklan";
            desc = "Yağ oranını düşürmek için kalori açığı oluşturmalı ve kardiyoyu artırmalısın.";
            targetId = "loss-guide";
        } else if (goalCounts.bulk >= 2) {
            title = "Kilo Alarak Kas Kazan (Bulk)";
            desc = "Kas kütlesini artırmak için kontrollü kalori fazlası ve ağır güç antrenmanı yapmalısın.";
            targetId = "bulk-guide";
        } else if (goalCounts.recomp >= 2) {
            title = "Vücut Rekompozisyonu";
            desc = "Mevcut kilonu koruyarak yağ yakıp kas yapmaya (sıkılaşmaya) odaklanmalısın.";
            targetId = "recomp-guide";
        } else {
            // Eşitlik durumunda öncelik sırası
            if (goalCounts.loss === goalCounts.bulk && goalCounts.bulk === goalCounts.recomp) {
                title = "Vücut Rekompozisyonu";
                desc = "Dengeli beslenip antrenman şiddetini artırarak vücudunu şekillendirmelisin.";
                targetId = "recomp-guide";
            } else if (goalCounts.loss >= goalCounts.bulk && goalCounts.loss >= goalCounts.recomp) {
                title = "Kilo Vermeye Odaklan";
                desc = "Önce fazlalıklarından kurtulup daha temiz bir temel üzerine inşa etmelisin.";
                targetId = "loss-guide";
            } else if (goalCounts.bulk >= goalCounts.recomp) {
                title = "Kilo Alarak Kas Kazan (Bulk)";
                desc = "Kas inşası için yakıta ihtiyacın var, korkmadan yemelisin.";
                targetId = "bulk-guide";
            } else {
                title = "Vücut Rekompozisyonu";
                desc = "Mevcut kilonu koruyarak yağ yakıp kas yapmaya odaklanmalısın.";
                targetId = "recomp-guide";
            }
        }

        setResult({ title, desc, targetId });
    };

    const scrollToGuide = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
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
        <section className="wt-calculator-section">
            <div className="container">
                <div className="wt-calc-header-section">
                    <h3 className="wt-section-title">HEDEFİNİ BELİRLE</h3>
                    <div className="wt-title-underline"></div>
                </div>

                <div className="wt-calc-group-container">
                    {/* Left Card: Calculator Interface */}
                    <div className="wt-calc-card left-card">
                        {!result ? (
                            <div className="wt-calc-interface">
                                <div className="wt-calc-progress-box">
                                    <div className="wt-calc-progress-labels">
                                        <span>İlerleme</span>
                                        <span>{step + 1} / {questions.length}</span>
                                    </div>
                                    <div className="wt-calc-progress-bg">
                                        <div className="wt-calc-progress-fill" style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
                                    </div>
                                </div>

                                <div className="wt-calc-question-box">
                                    <h4 className="wt-q-text-calc">{currentQ.question}</h4>
                                    <div className="wt-calc-options-list">
                                        {currentQ.options.map((opt) => (
                                            <button
                                                key={opt.id}
                                                className={`wt-calc-option-btn ${answers[step] === opt.id ? 'selected' : ''}`}
                                                onClick={() => handleAnswer(opt.id)}
                                            >
                                                <span className="wt-opt-indicator"></span>
                                                <span className="wt-opt-text">{opt.text}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="wt-calc-completed-state">
                                <div className="wt-completed-icon-circle">
                                    <div className="wt-checkmark">✓</div>
                                </div>
                                <h4>Analiz Tamamlandı!</h4>
                                <p>Sana en uygun antrenman hedefini sağ tarafta görebilirsin.</p>
                                <button className="wt-calc-reset-btn" onClick={resetQuiz}>⟳ Testi Tekrarla</button>
                            </div>
                        )}
                    </div>

                    {/* Right Card: Results Display */}
                    <div className="wt-calc-card right-card">
                        {result ? (
                            <div className="wt-result-premium-content">
                                <div className="wt-result-badge">TAVSİYE EDİLEN HEDEF</div>
                                <h3 className="wt-result-title">{result.title}</h3>
                                <p className="wt-result-desc">{result.desc}</p>
                                <div className="wt-result-decoration"></div>
                                <button className="wt-action-scroll-btn" onClick={() => scrollToGuide(result.targetId)}>
                                    PLANINI GÖR ↓
                                </button>
                            </div>
                        ) : (
                            <div className="wt-result-placeholder">
                                <span className="wt-p-icon">🎯</span>
                                <p>Soruları cevapladığında<br />hedefin burada belirecek.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};



export default WeightTraining;
