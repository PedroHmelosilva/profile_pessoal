import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiMsqlServer,
    DiReact,
} from 'react-icons/di';

import '../styles/components/tecnologiescontainer.sass';
import { FaSass } from "react-icons/fa";

const technologies = [
    { Id: "html", name: "HTML5", text: "Aprendi ao longo do curso de ADS e estou totalmente apto em realizar projetos com essa linguagem.", icon: <DiHtml5 />},

    { Id: "css", name: "CSS3", text: "Sou muito adaptado com essa ferramenta para criar projetos mais estéticos, bonitos e responsivos.", icon: <DiCss3 />},

    { Id: "js", name: "JavaScript", text: "Sei o básico e estou aprendendo mais para me aperfeiçoar.", icon: <DiJsBadge />},

    { Id: "mysqlserver", name: "SQLServer", text: "Não estou no nível que eu desejo mais com minha nova carreira se iniciando na Fatec creio que vou aprender muito com essa farramenta.", icon: <DiMsqlServer />},

    { Id: "react", name: "REACT", text: "Linguagem que estou estudando e colocando em prática em outros projetos além dessa página e o meu portifólio.", icon: <DiReact />},

    { Id: "sass", name: "SASS", text: "Ferramenta que estou aprendendo para criar projetos mais estéticos e responsivos.", icon: <FaSass />},
]

const TecnologiesContainer = () => {
    return <section className='tecnologies-container'>
        <h2>Tecnologias</h2>
        <div className="tecnologies-grid">
           {technologies.map((tech) => (
             <div className='technology-card' id={tech.Id} key={tech.Id}>
                {tech.icon}
                <div className='technology-info'>
                    <h3>{tech.name}</h3>
                    <p>{tech.text}</p>
                </div>
             </div>
           ))} 
        </div>
        <br />
    </section>;{ 
    }
};

export default TecnologiesContainer;