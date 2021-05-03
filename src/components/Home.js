import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movies/movieSlice';

function Home() {
  const dispatch = useDispatch();

  // useEffect:
  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      // set new movies using reducer
      dispatch(setMovies(tempMovies));
    });
  }, []);

  return (
    <Conatiner>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Conatiner>
  );
}

export default Home;

// too much scripting; I don't think it's very efficient
const Conatiner = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  &:after {
  }
`;
