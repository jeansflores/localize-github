import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 30px;
  margin: 0 50px 0 50px;

  @media (max-width: 576px) {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export default Container;
