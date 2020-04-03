import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const Backdrop = styled.div`
  align-items: center;
  animation: 0.3s ${fadeInAnimation};
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1071;
  overflow: auto;
`;

// Plano de fundo para modal
export default Backdrop;
