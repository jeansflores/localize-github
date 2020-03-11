import styled from 'styled-components';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { theme, colors } from '../../utils';

export const SearchContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SearchBar = styled.div`
  align-items: center;
  background-color: ${theme.colors.background};
  border-radius: 63px;
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 7px;
  width: 550px;

  svg {
    margin-left: 16px;
    margin-right: 12px;
    font-size: 17px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const SearchGroupInput = styled.div`
  display: flex;
  align-items: center;
  flex: 0.95;

  @media (max-width: 576px) {
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${colors.white};
  outline: none;
  font-size: 17px;
  width: 100%;
`;

export const SearchButton = styled(Button)`
  background: transparent;
  border: none;
  color: ${colors.white};
  outline: none;
  font-size: 17px;
  width: 100%;
`;

export const Logo = styled.img`
  width: 40%;
  height: auto;

  @media (max-width: 990px) {
    width: 60%;
  }
`;

export const SearchInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 19px;
  line-height: 25px;
  align-items: center;

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;
