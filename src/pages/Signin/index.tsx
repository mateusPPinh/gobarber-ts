import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Go barber Logo" />

        <form>
          <h1>Faça seu logon</h1>

          <Input
            icon={FiMail}
            name="email"
            placeholder="E-mail"
            autoComplete="false"
          />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Acessar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default Signin;
