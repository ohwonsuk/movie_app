import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovives = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    // { movies(from state): movies(from axios) } 이름 같아서 movies 하나만 써도 됨
  };
  componentDidMount() {
    this.getMovives();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        <div>
          {isLoading ? (
            <div class="loader">
              <span class="loader__text">Loading...</span>
            </div>
          ) : (
            movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })
          )}
        </div>
      </section>
    );
  }
}

export default App;
