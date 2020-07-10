import React, { Component } from 'react';
import env from '../../../env';
import GliderList from '../../glider-list/glider-list.component';

interface IProps {}

interface IState {
  searchField: string;
  movieResults: IMovieResult[];
  showResults: IShowResult[];
}

interface IMovieResult {
  title: string;
  poster_path: string;
  id: number;
  [key: string]: any;
}

interface IShowResult {
  name: string;
  poster_path: string;
  id: number;
  [key: string]: any;
}

interface IMovieResponce {
  results: IMovieResult[];
  [key: string]: any;
}

interface IShowResponce {
  results: IShowResult[];
  [key: string]: any;
}

class SearchPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchField: ' ',
      movieResults: [],
      showResults: [],
    };
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const searchField = this.formatSearch(e.currentTarget.value);
    this.setState({ searchField }, () => {
      this.addShowResultsToState();
      this.addMovieResultsToState();
    });
  };

  addMovieResultsToState = (): void => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${env.TMDB_KEY}&language=en-US&page=1&query=${this.state.searchField}&include_adult=false`
    )
      .then((res) => res.json())
      .then((resJson: IMovieResponce) =>
        this.setState({ movieResults: resJson.results })
      );
  };

  addShowResultsToState = (): void => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${env.TMDB_KEY}&language=en-US&page=1&query=${this.state.searchField}&include_adult=false`
    )
      .then((res) => res.json())
      .then((resJson: IShowResponce) =>
        this.setState({ showResults: resJson.results })
      );
  };

  formatSearch = (input: string): string => {
    if (input === '') {
      return ' ';
    } else {
      return input.replace(new RegExp(' ', 'g'), '%20');
    }
  };

  render() {
    return (
      <div className='search-page'>
        <input type='text' onChange={this.handleChange} placeholder='Search' />
        <GliderList title='' results={this.state.movieResults} />
        <GliderList title='' results={this.state.showResults} />
      </div>
    );
  }
}

export default SearchPage;
