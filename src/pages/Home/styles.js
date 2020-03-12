import styled, { keyframes, css } from 'styled-components';
import { fadeIn } from 'react-animations';
import Container from '../../components/Container';
import { theme, colors } from '../../utils';

const fadeInAnimation = keyframes`${fadeIn}`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SearchContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: 2s ${fadeInAnimation};
`;

export const SearchBar = styled.div.attrs(props => ({}))`
  align-items: center;
  animation: ${props => (props.error ? 'shake 0.2s ease-in-out 0s 2' : '')};
  background-color: ${theme.colors.background};
  border-radius: 63px;
  border: ${props => (props.error ? `${theme.colors.danger} 1.5px solid` : '')};
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

export const SearchButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: ${colors.white};
  border-radius: 22px;
  border: none;
  color: ${theme.colors.dark};
  font-size: 1rem;
  height: 42px;
  outline: none;
  text-align: center;
  width: 101px;

  &:hover {
    background: ${theme.colors.secondaryLighter};
  }

  &:active {
    transform: scale(0.95);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.9;
  }

  ${props => {
    return (
      props.loading &&
      css`
        svg {
          animation: ${rotateAnimation} 2s linear infinite;
        }
      `
    );
  }}
`;

export const Logo = styled.img`
  height: auto;
  width: 40%;

  @media (max-width: 990px) {
    width: 60%;
  }
`;

export const SearchInfo = styled.div`
  align-items: center;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  font-size: 19px;
  line-height: 25px;
  margin-bottom: 30px;
  margin-top: 30px;

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

export const SearchInfoError = styled.div`
  align-items: center;
  color: ${theme.colors.danger};
  display: flex;
  flex-direction: column;
  font-size: 19px;
  margin-bottom: 10px;
  margin-top: 10px;

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;
