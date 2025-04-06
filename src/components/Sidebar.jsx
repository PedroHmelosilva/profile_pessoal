import Avatar from '../img/perfil.jpg';

import "../styles/components/sidebar.sass";
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Pedro" />
        <p className="title">Estudante de Ciência de Dados</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://pedrohmelosilva.github.io/portifoliopessoal/pages/login.html" className="btn">Meu portifólio</a>
    </aside>;{
    }
};

export default Sidebar;