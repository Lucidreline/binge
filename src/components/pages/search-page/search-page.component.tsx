import React, { Component } from 'react';

import env from '../../../env';
import GliderList from '../../glider-list/glider-list.component';

import './search-page.styles.scss';

interface IProps {}

interface IState {
  searchField: string;
  showResults: IShowResult[];
}

interface IShowResult {
  name: string;
  poster_path: string;
  id: number;
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
      showResults: [],
    };
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const searchField = this.formatSearch(e.currentTarget.value);
    this.setState({ searchField }, () => {
      this.addShowResultsToState();
    });
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
        <input
          className='search-bar'
          type='text'
          onChange={this.handleChange}
          placeholder='Search'
        />
        <GliderList title='' results={this.state.showResults} />
      </div>
    );
  }
}

export default SearchPage;
