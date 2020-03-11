import styled from 'styled-components';
import { colors, theme } from '../../utils';

export const Body = styled.button`
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  background: ${colors.white};
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 42px;
  width: 101px;
  border-radius: 22px;

  &:hover {
    background: ${theme.colors.secondaryLighter};
  }

  &:focus {
    outline: none;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.95);
  }
`;
