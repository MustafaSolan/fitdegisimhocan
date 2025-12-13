import Hero from '../components/Layout/Hero';
import About from '../components/Layout/About';
import KnowledgeLibrary from '../components/Layout/KnowledgeLibrary';
import TrainingLibrary from '../components/Layout/TrainingLibrary';


const Home = () => {
    return (
        <div className="page-transition">
            <Hero />
            <About />
            <KnowledgeLibrary />
            <TrainingLibrary />
        </div>
    );
};

export default Home;
