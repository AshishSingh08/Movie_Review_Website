import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { Image } from './thumbnail.styles';

const Thumbnail = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt='Movie-thumbnail'/>
      </Link>
    ):(
         <Image src={image} alt='Movie-thumbnail'/>
    )}
  </div>
);

export default Thumbnail;
