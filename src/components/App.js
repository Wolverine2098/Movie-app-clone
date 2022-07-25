import React from "react";
import { data } from "./data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";
import { render } from "@testing-library/react";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }
  render() {
    const { list } = this.props.store.getState();
    console.log("Render", this.props.store.getState());

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="List">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
