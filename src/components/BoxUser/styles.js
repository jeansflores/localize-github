import styled, { keyframes, css } from 'styled-components';
import { flipInY } from 'react-animations';

import { theme } from '../../utils';

const flipInYAnimation = keyframes`${flipInY}`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const Box = styled.div`
  animation: 0.6s ${flipInYAnimation};
  background: ${theme.colors.light};
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 50px 50px 50px;

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
  align-items: center;
  background: ${theme.colors.dark};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 120px;
  padding: 12px;
  width: 100%;

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
  align-items: center;
  align-self: center;
  background: ${theme.colors.light};
  border-radius: 100%;
  box-shadow: 0 0 0.5em #222;
  display: flex;
  height: 105px;
  justify-content: center;
  margin-bottom: -38px;
  position: relative;
  top: -50px;
  width: 105px;

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
  padding: 10px;
  width: 100%;

  p {
    color: #555;
    text-align: center;
  }
`;

export const Bio = styled.div`
  background: ${theme.colors.light};
  padding: 10px;
  width: 100%;

  p {
    color: #555;
    text-align: center;
  }
`;

export const Statistics = styled.section`
  background: ${theme.colors.light};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  padding: 10px;

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
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const StatisticInfo = styled.h5`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const StatisticLabel = styled.span`
  color: #212529;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;
`;

export const Repositories = styled.div.attrs(props => ({}))`
  align-items: center;
  background: ${theme.colors.light};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: #ddd 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 100%;

  h4 {
    color: #444;
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

export const RepositoriesList = styled.div`
  align-items: center;
  background: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  max-height: 400px;
  overflow-y: auto;
  padding: 0px 10px 10px 10px;
  width: 100%;
`;

export const Repository = styled.div`
  background: ${theme.colors.light};
  border-radius: 8px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 4px;
  padding: 10px;
  width: 100%;

  span {
    color: #444;
    font-weight: bold;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const CountStar = styled.div`
  display: flex;

  svg {
    margin-right: 7px;
  }
`;
