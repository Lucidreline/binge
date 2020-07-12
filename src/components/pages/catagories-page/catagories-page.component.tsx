import React, { Component } from 'react';

import env from '../../../env';
import GliderList from '../../glider-list/glider-list.component';

interface IProps {}
interface IState {
  genreList: IGenre[];
}
interface IShow {
  name: string;
  id: number;
  poster_path: string;
  [id: string]: any;
}
interface IGenre {
  id: number;
  name: string;
  showList: IShow[];
}
interface IResponce {
  results: IShow[];
  [key: string]: any;
}

let genres: IGenre[] = [
  {
    id: 16,
    name: 'Animation',
    showList: [],
  },
  {
    id: 35,
    name: 'Comedy',
    showList: [],
  },
  {
    id: 80,
    name: 'Crime',
    showList: [],
  },
  {
    id: 18,
    name: 'Drama',
    showList: [],
  },
  {
    id: 10764,
    name: 'Reality',
    showList: [],
  },
  {
    id: 10765,
    name: 'Sci-Fi & Fantasy',
    showList: [],
  },
  {
    id: 37,
    name: 'Western',
    showList: [],
  },
];

class CatagoriesPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      genreList: genres,
    };
  }

  async componentWillMount() {
    let tempState = this.state;
    for (let i = 0; i < tempState.genreList.length; i++) {
      await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${env.TMDB_KEY}&with_genres=${tempState.genreList[i].id}`
      )
        .then((res) => res.json())
        .then(
          (resJson: IResponce) =>
            (tempState.genreList[i].showList = resJson.results)
        );
      this.setState(tempState);
    }
  }

  render() {
    console.log(this.state.genreList[0].showList);
    return (
      <div className='catagories-page'>
        {this.state.genreList.map((genre, index) => (
          <GliderList title={genre.name} key={index} results={genre.showList} />
        ))}
      </div>
    );
  }
}

export default CatagoriesPage;
