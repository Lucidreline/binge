import React, { Component } from 'react';

import env from '../../../env';
import GliderList from '../../glider-list/glider-list.component';

interface IProps {}

interface IState {
  showLists: IShowList[];
}

interface IShow {
  poster_path: string;
  id: number;
  [key: string]: any;
}

interface IResponce {
  [key: string]: any;
  results: IShow[];
}

interface IShowList {
  name: string;
  searchBy: string;
  shows: IShow[];
}

class HomePage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showLists: [
        {
          name: 'Popular',
          searchBy: 'popular',
          shows: [],
        },
        {
          name: 'Top Rated',
          searchBy: 'top_rated',
          shows: [],
        },
        {
          name: 'On Air Today',
          searchBy: 'airing_today',
          shows: [],
        },
        {
          name: 'On Air Right Now',
          searchBy: 'on_the_air',
          shows: [],
        },
      ],
    };
  }

  async componentDidMount() {
    let tempState = this.state;
    for (let i = 0; i < tempState.showLists.length; i++) {
      await fetch(
        `https://api.themoviedb.org/3/tv/${tempState.showLists[
          i
        ].searchBy.toLowerCase()}?api_key=${env.TMDB_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .then((resJson: IResponce) => {
          tempState.showLists[i].shows = resJson.results;
        });
      this.setState(tempState);
    }
  }

  render() {
    return (
      <div className='home-page'>
        {this.state.showLists.map((list, index) => (
          <GliderList title={list.name} results={list.shows} key={index} />
        ))}
      </div>
    );
  }
}

export default HomePage;
