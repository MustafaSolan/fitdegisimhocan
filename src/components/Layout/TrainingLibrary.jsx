import React from 'react';
import { Link } from 'react-router-dom';
import weightImg from '../../assets/weight_training.png'; // Reusing existing
import cardioImg from '../../assets/cardio.png';

const TrainingLibrary = () => {
    return (
        <section className="training-library-section" style={{ padding: '80px 0', background: '#f8f9fa' }}>
            <div className="container">
                <h2 className="section-title center-text" style={{ marginBottom: '60px', position: 'relative', display: 'inline-block', left: '50%', transform: 'translateX(-50%)' }}>
                    Antrenman Rehberi
                    <span style={{ display: 'block', height: '4px', width: '60px', background: '#2196F3', margin: '15px auto 0', borderRadius: '2px' }}></span>
                </h2>

                <div className="training-cards-container">

                    {/* Weight Training Card */}
                    <Link to="/agirlik-antrenmani" className="training-wide-card">
                        <div className="tw-card-image" style={{ backgroundImage: `url(${weightImg})` }}>
                            <div className="tw-card-overlay"></div>
                        </div>
                        <div className="tw-card-content">
                            <div className="tw-content-wrapper">
                                <h3>Ağırlık Antrenmanı</h3>
                                <p>Kas kütlesini artır, postürünü düzelt ve gücünü keşfet. Vücut şekillendirme ve hipertrofi için kapsamlı rehber.</p>
                                <span className="tw-link">Rehberi İncele <i className="arrow-icon">&rarr;</i></span>
                            </div>
                        </div>
                    </Link>

                    {/* Cardio Card */}
                    <Link to="/kardiyo-rehberi" className="training-wide-card reverse">
                        <div className="tw-card-content">
                            <div className="tw-content-wrapper">
                                <h3>Kardiyo ve Kondisyon</h3>
                                <p>Kalp sağlığını koru, dayanıklılığını artır ve yağ yakımını hızlandır. Koşu, HIIT ve kondisyon çalışmaları.</p>
                                <span className="tw-link">Rehberi İncele <i className="arrow-icon">&rarr;</i></span>
                            </div>
                        </div>
                        <div className="tw-card-image" style={{ backgroundImage: `url(${cardioImg})` }}>
                            <div className="tw-card-overlay"></div>
                        </div>
                    </Link>

                </div>
            </div>

            <style jsx>{`
                .training-cards-container {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .training-wide-card {
                    display: flex;
                    background: white;
                    border-radius: 24px;
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 300px;
                    border: 1px solid rgba(0,0,0,0.03);
                }

                .training-wide-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }

                .tw-card-image {
                    flex: 0 0 45%;
                    position: relative;
                    background-size: cover;
                    background-position: center;
                    overflow: hidden;
                }

                .tw-card-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(45deg, rgba(33, 150, 243, 0.4), rgba(0,0,0,0.1));
                    transition: opacity 0.4s ease;
                }
                
                .training-wide-card:hover .tw-card-overlay {
                    opacity: 0.7;
                    background: linear-gradient(45deg, rgba(33, 150, 243, 0.6), rgba(0,0,0,0.3));
                }



                .tw-card-content {
                    flex: 1;
                    padding: 40px;
                    display: flex;
                    align-items: center;
                    position: relative;
                }

                .tw-content-wrapper {
                    max-width: 400px;
                }

                .tw-card-content h3 {
                    font-size: 1.8rem;
                    font-weight: 800;
                    margin-bottom: 15px;
                    color: #222;
                    background: linear-gradient(90deg, #333, #555);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .tw-card-content p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: #666;
                    margin-bottom: 25px;
                }

                .tw-link {
                    display: inline-flex;
                    align-items: center;
                    font-weight: 700;
                    color: #2196F3;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-size: 0.95rem;
                    transition: gap 0.3s ease;
                    gap: 8px;
                }

                .training-wide-card:hover .tw-link {
                    gap: 12px;
                    color: #1976D2;
                }

                /* Responsive adjustments */
                @media (max-width: 900px) {
                    .training-wide-card, .training-wide-card.reverse {
                        flex-direction: column;
                        height: auto;
                    }
                    
                    .tw-card-image {
                        height: 250px; /* Ensure visible height */
                        width: 100%;
                        flex: none; /* Prevent flex shrinking */
                    }

                    .tw-card-content {
                        padding: 30px 25px;
                    }
                    
                    /* For the reverse card (where valid HTML order is Content -> Image), we need column-reverse to put Image on top */
                    .training-wide-card.reverse {
                        flex-direction: column-reverse; 
                    }
                }
            `}</style>
        </section>
    );
};

export default TrainingLibrary;
