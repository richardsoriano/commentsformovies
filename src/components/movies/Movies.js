import React, { Component } from "react";
import Movie from "./Movie";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";

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
                      <Link
                        to="/movie/add"
                        className="btn btn-primary btn-block"
                      >
                        {" "}
                        <i class="fas fa-plus"></i> Add Movie
                      </Link>
                    </div>
                    <div className="col-md-3">
                      <Link to="/search" className="btn btn-success btn-block">
                        <i className="fas fa-search"></i>Search
                      </Link>
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
