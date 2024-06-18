import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  border-radius: 10px;
  margin: 13px;
  height: 600px;
  display: inline-block;
  width: 48%;
  position: relative;
  animation: animateHeroImage 1s;
  @media screen and (max-width: 1300px){
    width: 100%;
  }
  @media screen and (max-width: 500px){
    display: none;
  }
  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 30px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);
  :hover {
      opacity: 0.8;
  }

  h1 {
    font-size: var(--fontSuperBig);
    margin: 5px 0;
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);
    margin: 10px 0;
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }
  h4 {
    display: inline-block;
    margin: 5px 50px 5px 0px;
  }
  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
