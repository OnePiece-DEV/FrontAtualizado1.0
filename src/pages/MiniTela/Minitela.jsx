import React from 'react';
import './Minitela.css'; // Importa o CSS para estilização

const CadastroModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Escolha o Tipo de Cadastro</h2>
        <div className="modal-buttons">
          <button onClick={() => window.location.href = '/register/projetista'}>Cadastrar como Projetista</button>
          <button onClick={() => window.location.href = '/register/cliente'}>Cadastrar como Cliente</button>
        </div>
      </div>
    </div>
  );
};

export default CadastroModal;
