import React from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from './../../config';

// Components
import BannerImage from './BannerImage';
import Grid from './../Common/Grid';
import Thumbnail from './../Common/Thumbnail';
import Spinner from './../Common/Spinner'
import Button from './../Common/Button';
import Searchbar from './SearchBar';

// Hook
import { useHomeFetch } from './../../hooks/useHomeFetch';
// Image
import NoImage from '../../images/no_image.jpg';

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadinMore } = useHomeFetch();

  if(error) return(<div>Something Went Wrong ...</div>)

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  let banner1=getRandomInt(0,19);
  let banner2=getRandomInt(0,19);
  if(banner1===banner2)
    banner2++;
  return (
    <>
      {!searchTerm && state.results[banner1] && state? (
        <BannerImage
          clickable={true}
          movieId={state.results[banner1].id}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[banner1].backdrop_path}`}
          title={state.results[banner1].original_title}
          text={state.results[banner1].overview}
          release_date={state.results[banner1].release_date}
          vote_count={state.results[banner1].vote_count}
          stars={state.results[banner1].vote_average}
        />
      ) : null}
      {!searchTerm && state.results[banner2] ? (
        <BannerImage
          clickable={true}
          movieId={state.results[banner2].id}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[banner2].backdrop_path}`}
          title={state.results[banner2].original_title}
          text={state.results[banner2].overview}
          release_date={state.results[banner2].release_date}
          vote_count={state.results[banner2].vote_count}
          stars={state.results[banner2].vote_average}
        />
      ) : null}
      <Searchbar setSearchTerm={setSearchTerm}/>
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map(
          movie => (
          <Thumbnail key={movie.id}
            clickable={true}
            image={
              movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`: NoImage
            }
            movieId={movie.id}
          />
          ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadinMore(true)}/>
      )}

    </>
  );
};

export default Home;
