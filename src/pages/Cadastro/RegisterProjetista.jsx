import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from './assets/Image.png';
import '../Cadastro/styles/register.css';

function RegisterProjetista() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!termsAccepted) {
      alert("Você deve aceitar os termos e condições.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/usuario', {
        id: 0,
        username: name,
        senha: password,
        email: email,
        tipo: 'projetista'
      });

      if (response.status === 201) {
        setMessage('Projetista registrado com sucesso!');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        setMessage('Erro ao registrar projetista.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setMessage('Erro ao registrar projetista.');
    }
  };

  return (
    <div className="register-container">
      <div className="image-section">
        <img src={image} alt="Imagem do registro" />
      </div>
      <div className="form-section">
        <h1>Registre-se como Projetista</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nome:</label>
            <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Endereço de E-mail:</label>
            <input type="email" placeholder="seuemail@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Senha:</label>
            <input type="password" placeholder="Crie uma senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <p className="password-hint">Escolha uma senha com, no mínimo, 8 caracteres.</p>
          <div className="checkbox-group">
            <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
            <label>Eu aceito os <a href="#">Termos e Condições</a> e entendi a <a href="#">Política de Privacidade</a></label>
          </div>
          <button type="submit">Registrar</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default RegisterProjetista;
