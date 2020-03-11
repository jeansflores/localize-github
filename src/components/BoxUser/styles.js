import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';

import { theme } from '../../utils';

const flipInYAnimation = keyframes`${flipInY}`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 50px 0 50px;
  animation: 0.6s ${flipInYAnimation};
  background: ${theme.colors.light};
  border-radius: 22px;

  @media (max-width: 576px) {
    width: 90%;
  }

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 550px;
  }
`;

export const BoxHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Apresentation = styled.div`
  background: ${theme.colors.dark};
  height: 120px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Avatar = styled.div`
  margin-bottom: -38px;
  align-self: center;
  background: ${theme.colors.light};
  border-radius: 100%;
  box-shadow: 0 0 0.5em #222;
  display: flex;
  height: 100px;
  position: relative;
  top: -50px;
  width: 100px;
`;

export const Bio = styled.div`
  background: ${theme.colors.light};
  height: 120px;
  width: 100%;
`;

export const Statistics = styled.div`
  background: ${theme.colors.light};
  height: 120px;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
