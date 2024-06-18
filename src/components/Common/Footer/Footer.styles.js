import styled from 'styled-components';

export const Clear =styled.div`
      clear: both;
      height: 60px;
`;

export const Wrapper = styled.div`
  background: var(--darkGrey);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  margin-top: 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 0;
  margin: 0 auto;
`;
