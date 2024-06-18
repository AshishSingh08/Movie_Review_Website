import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const MainName = styled.div`
  color: var(--white);
  font-size: 40px;
  font-weight: bolder;
  letter-spacing: 4px;
  @media screen and (max-width: 500px){
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 0;
  margin: 0 auto;

  .Login{
     font-weight: bolder;
     font-size: 20px;
     background: var(--midGrey);
     margin-left: 500px;
     padding: 5px 30px;
     border: 2px solid red;
     color: var(--white);
     :hover {
        opacity: 0.8;
     }
     * {
        color: var(--white);
     }
    }
`;

export const MainLogoImg = styled.img`
  width: 50px;
  transform: rotate(90deg);
  @media screen and (max-width: 500px) {
    width: 20px;
    transform: rotate(0deg);
  }
`;

export const DatabaseLogoImg = styled.img`
  width: 50px;

  @media screen and (max-width: 500px) {
    width: 30px;
  }
`;
