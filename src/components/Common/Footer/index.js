import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { Wrapper, Content, Clear } from './Footer.styles';

const Footer = () => (
  <>
    <Clear />
    <Wrapper>
      <Content>
        <Link to='/AboutUs' style={{ textDecoration: 'none' }}>
          <p>About Us</p>
        </Link>
        <Link to='/ContactUs' style={{ textDecoration: 'none' }}>
          <p>Contact Us</p>
        </Link>
      </Content>
    </Wrapper>
  </>
);

export default Footer;
