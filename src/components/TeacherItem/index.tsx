import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
    <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/20846871?s=460&u=8a0b1b0a627ba4a68b460b7c45fcf9bceccd1954&v=4" alt="Matheus"/>
            <div>
                <strong>Matheus Gonçalves</strong>
                <span>Algebra</span>
            </div>
        </header>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, temporibus eveniet autem animi quaerat quia, mollitia similique, dolorem necessitatibus quae doloremque praesentium explicabo odio. Eaque debitis at molestias quod quis.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;