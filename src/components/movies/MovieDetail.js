import React, { Component } from "react";
import { Consumer } from "../../context";
import MovieDetailText from "./MovieDetailText";
import PropTypes from "prop-types";
import axios from "axios";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      writer: "",
      director: "",
      errors: {}
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
    );

    const movie = res.data;

    this.setState({
      movieID: movie.id,
      title: movie.title,
      desc: movie.desc,
      writer: movie.writer,
      director: movie.director
    });
  }

  onDeleteClick = async (id, dispatch) => {
    // try {
    //   await axios.delete(
    //     `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
    //   );
    //dispatch({ type: "DELETE_MOVIE", payload: id });
    // } catch (e) {
    //   dispatch({ type: "DELETE_MOVIE", payload: id });
    // }
    dispatch({ type: "DELETE_MOVIE", payload: id });
    this.props.history.push("/");
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Consumer>
        {value => {
          const { movieID } = this.state;
          const { movies, dispatch } = value;
          const moviesPerMovieID = movies.filter(
            movie => Number(movie.id) === Number(movieID)
          );
          return (
            <div>
              <header id="main-header" class="py-0 bg-success text-white">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1>
                        <i className="fas fa-film"></i> Movie
                      </h1>
                    </div>
                  </div>
                </div>
              </header>

              <section id="search" class="py-2 mb-6 bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <a href="/" class="btn btn-light btn-block">
                        <i className="fas fa-arrow-left"></i> Back
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href={`/movie/edit/${movieID}`}
                        className="btn btn-warning btn-block"
                      >
                        <i className="fas fa-pencil-alt"></i>Edit
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="#"
                        className="btn btn-danger btn-block "
                        onClick={this.onDeleteClick.bind(
                          this,
                          movieID,
                          dispatch
                        )}
                      >
                        <i className="far fa-trash-alt"></i>No Delete
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href={`/movie/add/`}
                        className="btn btn-success btn-block"
                      >
                        <i className="fas fa-plus"></i>Add
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section id="movie">
                <table className="table">
                  {moviesPerMovieID.map(movie => (
                    <MovieDetailText key={movie.id} movie={movie} />
                  ))}
                </table>
              </section>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
MovieDetail.propTypes = {
  id: PropTypes.number.isRequired
};
export default MovieDetail;
