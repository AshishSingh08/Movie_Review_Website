import React from 'react';

//Styles
import { CenteredContent, Description, Form, Heading, MediaIcons } from './ContactUs.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  return (
      <CenteredContent>
        <Heading>
          Contact Us
        </Heading>
        <Description>
          Leave us a mail, we'll be right back!
        </Description>
        <Form>
          <table>
            <tbody>
              <tr>
                <td><label>Email </label></td>
                <td><input type="text" placeholder="example@gmail.com"></input><br/></td>
              </tr>
              <tr>
                <td><label>Password </label> </td>
                <td><input type="text" placeholder="Password"></input><br/></td>
              </tr>
              <tr>
                <td><label>Content </label></td>
                <td><textarea cols="50" rows="3" placeholder="Content"/> <br/></td>
              </tr>
              <tr className="submit-col">
                <td colSpan="2"><button className="submit_button" formAction='submit'>Submit</button></td>
              </tr>
            </tbody>
          </table>
        </Form>
        <br/>
        <Description>
          Connect with us on any of the social network below!
        </Description>
        <MediaIcons>
          <a href="#"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        </MediaIcons>
      </CenteredContent>
  );
};
export default AboutUs;
