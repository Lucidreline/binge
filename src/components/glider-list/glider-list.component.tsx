import React from 'react';

import GliderImage from '../glider-image/glider-image.component';

import './glider-list.styles.scss';

interface Iprops {
  results: IResult[];
  title: string;
  [key: string]: any;
}

interface IResult {
  poster_path: string;
  id: number;
  [key: string]: any;
}

class GliderList extends React.Component<Iprops> {
  render() {
    return (
      <div className='glider-list'>
        <h2 className='title'>{this.props.title}</h2>
        <div className='list-contain'>
          {this.props.results.map(({ poster_path }, index) => (
            <GliderImage key={index} poster_path={poster_path} />
          ))}
        </div>
      </div>
    );
  }
}

export default GliderList;
