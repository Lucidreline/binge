import React from 'react';

import './glider-image.styles.scss';

interface Props {
  poster_path: string;
  [key: string]: any;
}

const GliderImage: React.FC<Props> = ({ poster_path }) => {
  return (
    <div className='glider-image'>
      <div
        className='image'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster_path})`,
        }}
      ></div>
    </div>
  );
};

export default GliderImage;
