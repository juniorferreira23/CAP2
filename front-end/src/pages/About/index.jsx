import React from "react";
import { Link } from "react-router-dom";
import './style.css';


const About = () => {

    const screens = ['Home', '']

    return (
        <div className="about">
            <header className="headerAbout">
                <h1>About</h1>
                <nav>
                <ul>
                    {screens.map(screen => {
                    return (<li><Link to={`/${screen}`} className='menu'>{screen == ''?'Logout':screen}</Link></li>)
                    })}
                </ul>
                </nav>
            </header>
            <div className="container">
            <div className="wrapper">
                <h2 className="title">Descrição</h2>
                <p>O aplicativo visa proporcionar um ambiente acolhedor e eficiente para cadastrar os animais que estão em busca de um lar amoroso e responsável. Além disso, ele oferece uma plataforma intuitiva para conectar esses animais aos potenciais tutores interessados em dar-lhes uma nova chance de vida. Com uma interface amigável e funcionalidades abrangentes, o aplicativo não apenas facilita o processo de adoção, mas também permite que os tutores em potencial registrem suas informações, garantindo um processo transparente e seguro para todas as partes envolvidas.</p>
                
                <h2 className="title">Team</h2>
                <p>Elizeu Leoncio Ferreira Júnior - 01576238</p>
                <p>Pedro Andrade da Silva Neto - 01603590</p>
                <p>Flavio José de Albuquerque Barbosa - 01648810</p>
                <p>Davi dos Santos Lima - 01358277</p>
                <p>Kauan Cavalcanti de Santana - 01692066</p>
                <p>Paulo Vinícius Feliciano de Souza - 01618133</p>
                <p>Rosilene da Silva Lima - 01619051</p>
                <p>Lucas Maia Sivini - 01616874</p>
                <p>Jean Ricardo França da Silva - 01583760</p>
                <p>Matheus de Oliveira Lins Mendes Simes- 01618966</p>
                <p>Gabriel Antônio Santos da Silva - 01625447</p>
                <p>Anna Beatriz Santos Medeiros da Silva - 01334353</p>

                <h2 className="title">Github Repository</h2>
                <a href="https://github.com/juniorferreira23/Trabalho_CAP" rel="noreferrer" target="_blank">link</a>
            </div>
            </div>
        </div>
    );
};

export default About;