import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const Signup: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="Go barber Logo" />

        <form>
          <h1>Faça seu logon</h1>
          <Input icon={FiUser} name="name" placeholder="Seu nome completo" />

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

          <Button type="submit">Criar conta</Button>
        </form>

        <a href="/">
          <FiArrowLeft />
          Voltar
        </a>
      </Content>
    </Container>
  );
};

export default Signup;
