import React from 'react';

import wathsappIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/45360660?s=460&u=78d096d6ae0d110f695a2e3f1a58e561d30dfc9e&v=4" alt="Marcos Brandão" />
      <div>
        <strong>
          Diego Fernandes
        </strong>
        <span>Química</span>
      </div>
    </header>
    <p>
      Entusiasta das melhores tecnologias de quimica avançada
      <br /><br />
      apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </p>
    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={wathsappIcon} alt="wathsapp" />
        Entrar em contato
      </button>
    </footer>
    </article>   
  )
}

export default TeacherItem;