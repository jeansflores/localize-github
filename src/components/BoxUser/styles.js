import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';

import { theme } from '../../utils';

const flipInYAnimation = keyframes`${flipInY}`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 50px 50px 50px;
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

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.dark};
  height: 120px;
  width: 100%;
  color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
  padding: 12px;

  svg {
    position: relative;
    display: flex;
    align-self: flex-end;
    top: -44px;
    right: -1px;
    font-size: 22px;
    cursor: pointer;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  small {
    color: #bbb;
    font-size: 14px;
  }
`;

export const Avatar = styled.div`
  margin-bottom: -38px;
  align-self: center;
  background: ${theme.colors.light};
  border-radius: 100%;
  box-shadow: 0 0 0.5em #222;
  display: flex;
  height: 105px;
  position: relative;
  top: -50px;
  width: 105px;
  align-items: center;
  justify-content: center;

  img {
    float: left;
    width: 95%;
    height: 95%;
    object-fit: cover;
    border-radius: 100%;
  }
`;

export const Details = styled.div`
  background: ${theme.colors.light};
  width: 100%;
  padding: 10px;

  p {
    color: #555;
    text-align: center;
  }
`;

export const Bio = styled.div`
  background: ${theme.colors.light};
  width: 100%;
  padding: 10px;

  p {
    color: #555;
    text-align: center;
  }
`;

export const Statistics = styled.section`
  background: ${theme.colors.light};
  display: grid;
  grid-template-columns: 33% 33% 33%;
  padding: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  div:nth-child(2) {
    border-left: #ddd 1px solid;
    border-right: #ddd 1px solid;
  }

  @media (max-width: 500px) {
    grid-template-columns: none;

    div:nth-child(2) {
      border-left: none;
      border-right: none;
    }
  }
`;

export const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export const StatisticInfo = styled.h5`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const StatisticLabel = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
`;

export const Repositories = styled.div`
  background: ${theme.colors.light};
  height: 120px;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
