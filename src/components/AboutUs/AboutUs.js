import React from 'react';

//Components
import Profile from './Profile';

//Styles
import { Wrapper, CenteredHeader, Heading, Description } from './AboutUs.styles';

//Images
import NoImage from './../../images/no_image.jpg';
import RaushanImage from '../../images/Raushan-kumar-profile-picture.jpeg';
import AdityaImage from '../../images/Aditya-Yadav-profile-picture.jpg';
import AnimeshImage from '../../images/Animesh-sahu-profile-picture.jpeg';
import SatvikImage from '../../images/Satvik-Dubey-Profile-Picture.jpg';
// import Image from '../../images/';
// // import Image from '../../images/';
// import Image from '../../images/';




const AboutUs = () => {
  return (
    <>
      <CenteredHeader>
        <Heading>
          About Us
        </Heading>
        <Description>
          Hello! We are a team of 7 (Group 4).
          <br/>
          This is out End Semester Project, where we have designed a Movie Review Website using React.
        </Description>
      </CenteredHeader>
      <Wrapper>
          <Profile
            image={NoImage}
            name='Mani Raj Gupta'
            rollNo='LCS2021037'
            eMail='LCS2021037@iiitl.ac.in'
            linkedIn='https://www.linkedin.com/in/mani-raj-gupta-11b329224/'
            phoneNo='+91-7004991816'
          />
          <Profile
            image={NoImage}
            name='Samudrala Sharath Chandra'
            rollNo='LCS2021027'
            eMail='LCS2021027@iiitl.ac.in'
            linkedIn='https://www.linkedin.com/in/sharath-chandra-4b7023229/'
            phoneNo='+91-9160057443'
          />
          <Profile
            image={RaushanImage}
            name='Raushan kumar'
            rollNo='LCS2021032'
            eMail='LCS2021032@iiitl.ac.in'
            linkedIn='https://www.linkedin.com/in/raushan-kumar-781a9421a'
            phoneNo='+91-9931946374'
          />
          <Profile
            image={AnimeshImage}
            name='Animesh Sahu'
            rollNo='LCS2021035'
            eMail='LCS2021035@iiitl.ac.in'
            linkedIn='https://www.linkedin.com/in/animesh-sahu-5a327520b/'
            phoneNo='+91-9165482510'
          />
          <Profile
            image={NoImage}
            name='Abhishek Kumar'
            rollNo='LCS2021036'
            eMail='LCS2021036@iiitl.ac.in'
            linkedIn='https://www.linkedin.com/in/abhishek-kumar-8a99a6228/'
            phoneNo='+91-9335734573'
          />
          <Profile
            image={SatvikImage}
            name='Satvik Dubey'
            rollNo='LCS2021017'
            eMail='LCS2021017@iiitl.ac.in'
            linkedIn='https://www.linkedin.com/in/satvik-dubey-1499b1233/'
            phoneNo='+91-9950234151'
          />
          <Profile
            image={AdityaImage}
            name='Aditya Yadav'
            rollNo='LCS2021034'
            eMail='LCS2021036@iiitl.ac.in'
            linkedIn='https://www.linkedin.com/in/aditya-yadav-a510511a2/'
            phoneNo='+91-8527475970'
          />
      </Wrapper>
    </>
  );
};
export default AboutUs;
