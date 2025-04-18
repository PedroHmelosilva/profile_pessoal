import {AiFillPhone, AiOutlineMail, AiFillBook, AiFillEnvironment} from "react-icons/ai";

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>+55 (11) 98635-0290</p>
            </div>
        </div>

        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p>pedrohmeloesilva@gmail.com</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillBook id="book-icon" />
            <div>
                <h3>Instituição</h3>
                <p>Fatec Jundiaí</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Itupeva - SP</p>
            </div>
        </div>
    </section>; {
    }
};

export default InformationContainer;