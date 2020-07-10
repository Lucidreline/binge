import React, { Component } from 'react';

import env from '../../../env';
import GliderList from '../../glider-list/glider-list.component';

interface IProps {}

interface IState {
  trendingMovies: IResult[];
  trendingShows: IResult[];
}

interface IResult {
  poster_path: string;
  id: number;
  [key: string]: any;
}

interface IResponce {
  [key: string]: any;
  results: IResult[];
}

class HomePage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      trendingMovies: [],
      trendingShows: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${env.TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((resJson: IResponce) => {
        this.setState({ trendingMovies: resJson.results });
      });
    fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${env.TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((resJson: IResponce) => {
        this.setState({ trendingShows: resJson.results });
      });
  }

  render() {
    return (
      <div className='home-page'>
        <GliderList title='Shows' results={this.state.trendingShows} />
        <GliderList title='Movies' results={this.state.trendingMovies} />
      </div>
    );
  }
}

export default HomePage;
