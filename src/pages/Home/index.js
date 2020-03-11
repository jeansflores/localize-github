import React from 'react';
import { FaAt } from 'react-icons/fa';
import logo from '../../assets/image/logo.png';

import {
  SearchBar,
  SearchGroupInput,
  SearchInput,
  SearchButton,
  SearchContainer,
  SearchInfo,
  Logo,
} from './styles';
import { theme } from '../../utils';

const Home = () => (
  <SearchContainer>
    <Logo src={logo} alt="Localize Github" />
    <SearchInfo>
      <span>Encontre qualquer usuário do Github,</span>
      <span>com apenas um CLICK!</span>
    </SearchInfo>
    <SearchBar>
      <SearchGroupInput>
        <FaAt color={theme.colors.light} />
        <SearchInput type="text" placeholder="Insira o username" />
      </SearchGroupInput>
      <SearchButton>Buscar</SearchButton>
    </SearchBar>
  </SearchContainer>
);

export default Home;
