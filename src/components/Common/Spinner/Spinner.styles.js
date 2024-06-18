import styled from 'styled-components';

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #dddddd;
  border-top-color: #009579;
  border-bottom-color: #009579;
  margin: 0 auto;
  border-radius: 50%;
  transform: rotate(0.16turn);
  animation: loading 1s ease infinite;

  @keyframes loading {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
`;
