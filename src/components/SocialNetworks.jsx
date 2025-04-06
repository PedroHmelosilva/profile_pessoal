import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "github", link: "https://github.com/PedroHmelosilva", icon: <FaGithub /> },
    { name: "linkedin", link: "https://www.linkedin.com/in/pedromeloesilva/", icon: <FaLinkedin /> },
]
const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>;
};

export default SocialNetworks;