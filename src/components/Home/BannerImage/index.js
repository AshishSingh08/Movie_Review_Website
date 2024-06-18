import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content, Text } from './BannerImage.styles';

const BannerImage = ({ image, title, text, release_date, vote_count, stars, movieId ,clickable }) => (
  <>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Wrapper image={image}>
          <Content>
            <Text>
              <h1>{title}</h1>
              <h4>Release Date : {release_date}</h4>
              <h4>No of votes : {vote_count}</h4>
              <h4>Stars : ( {stars} / 10 )</h4>
              <p>{text}</p>
            </Text>
          </Content>
        </Wrapper>
      </Link>
    ):(
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <h4>Release Date : {release_date}</h4>
          <h4>No of votes : {vote_count}</h4>
          <h4>Stars : ( {stars} / 10 )</h4>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
    )}
  </>
);

export default BannerImage;
