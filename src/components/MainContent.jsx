import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';
import TecnologiesContainer from './TecnologiesContainer';
import ProjectsContainer from './ProjectsContainer';

const MainComponent = () => {
    return <main id="main-content">
        <h1>Pedro Henrique Melo e Silva</h1>
        <AboutContainer />
        <TecnologiesContainer />
        <ProjectsContainer />
    </main>;{  
    }
};

export default MainComponent;