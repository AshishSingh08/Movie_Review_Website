import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

//styles
import { Wrapper, Content, Image, vertical_margin } from './Profile.styles';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Profile = ({ name, rollNo, email, linkedIn, phoneNo, image }) => (
  <Wrapper>
    <Image src={image} alt="Profile Picture"/>
    <Content>{name} ({rollNo})</Content>
    <Content>
      <a href={"emailto:" + email} style={vertical_margin}><FontAwesomeIcon icon={faEnvelope} /></a>
      <a href={linkedIn} style={vertical_margin}><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href={"tel:" + phoneNo} style={vertical_margin}><FontAwesomeIcon icon={faPhone} /></a>
    </Content>
  </Wrapper>
);

export default Profile;
