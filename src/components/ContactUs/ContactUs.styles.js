import styled from 'styled-components';

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: auto;
  width: 50%;
  padding: 10px;
`;

export const Heading = styled.h1`
    font-size: 60px;
`;

export const Description = styled.p`
    font-size: 24px;
`;

export const MediaIcons = styled.div`
color: var(--white);
a {
    font-size: 16px;
    height: 45px;
    width: 45px;
    display: inline-block;
    text-align: center;
    line-height: 43px;
    border-radius: 5px;
    border: 2px solid #222222;
    margin: 0px 5px 0 0;
    transition: all 0.3s ease;
    :hover {
        border-color: #eb2f06;
    }
}`;

export const Form = styled.form`
  color: var(--white);
  font-size: 24px;
  margin: 0 auto;
  table {
      text-align: left;
      label {
          font-size: 15px;
      }
      td{
          padding: 2px;
      }
      td {
          input {
              width: 100%;
          }
          textarea {
              margin: 2px 0;
          }
      }
      .submit-col{
          text-align: center;
      }
  }
  .submit_button {
      border: 0px;
      font-size: 16px;
      font-weight: bolder;
      background: var(--darkGrey);
      border-radius: 5px;
      padding: 10px;
      color: var(--white);
      width: 70%;
  }
`;
