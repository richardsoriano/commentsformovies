import React, { Component } from "react";
import Movie from "./Movie";
import { Consumer } from "../../context";

class Movies extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { movies } = value;

          return (
            <React.Fragment>
              <section id="search" className="py-2 mb-2 bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <a
                        href="/movie/add"
                        className="btn btn-primary btn-block"
                      >
                        <i className="fas fa-plus"></i> Add Movie
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href={`/search`} className="btn btn-info btn-block">
                        <i className="fas fa-search"></i>Search
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <div className="container">
                <div className="row">
                  <div className="col md-9">
                    <table className="table table-striped">
                      <thead className="thead-dark">
                        <th width="20%">Poster</th>
                        <th width="40%">Movie</th>
                        <th width="40%">Comments</th>
                      </thead>
                      <tbody>
                        {movies.map(movie => (
                          <Movie key={movie.id} movie={movie} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Movies;
