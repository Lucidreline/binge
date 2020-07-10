import React from 'react';

// Glider.js
import Glider from './glider-library/glider.js';
import './glider-library/glider.css';

import GliderImage from '../glider-image/glider-image.component';

import './glider-list.styles.scss';

interface Iprops {
  results: IResult[];
  [key: string]: any;
}

interface IResult {
  poster_path: string;
  id: number;
  [key: string]: any;
}

class GliderList extends React.Component<Iprops> {
  componentDidMount() {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 5,
      slidesToScroll: 5,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next',
      },
    });
  }

  render() {
    return (
      <div className='glider-list'>
        <div className='glider-contain'>
          <div className='glider'>
            {this.props.results.map(({ poster_path }, index) => (
              <GliderImage key={index} poster_path={poster_path} />
            ))}
          </div>
          <button aria-label='Previous' className='glider-prev'>
            «
          </button>
          <button aria-label='Next' className='glider-next'>
            »
          </button>
          <div role='tablist' className='dots'></div>
        </div>
      </div>
    );
  }
}

export default GliderList;
