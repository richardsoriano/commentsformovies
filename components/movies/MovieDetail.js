import React, { Component } from "react";
import { Consumer } from "../../context";
import MovieDetailText from "./MovieDetailText";
import axios from "axios";
import { Link } from "react-router-dom";

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
              <header id="main-header" className="py-0 bg-success text-white">
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

              <section id="search" className="py-2 mb-6 bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <Link to="/" className="btn btn-light btn-block">
                        <i className="fas fa-arrow-left"></i>Back
                      </Link>
                    </div>
                    <div className="col-md-3">
                      <Link
                        to={`/movie/edit/${movieID}`}
                        className="btn btn-warning btn-block"
                      >
                        <i className="fas fa-pencil-alt"></i>Edit
                      </Link>
                    </div>
                    <div className="col-md-3">
                      <Link
                        to="#"
                        className="btn btn-danger btn-block"
                        onClick={this.onDeleteClick.bind(
                          this,
                          movieID,
                          dispatch
                        )}
                      >
                        <i className="far fa-trash-alt"></i>Delete
                      </Link>
                    </div>
                    <div className="col-md-3">
                      <a
                        href={`/comments/add/${movieID}`}
                        className="btn btn-success btn-block"
                      >
                        <i className="fas fa-plus"></i>Add Comment
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

export default MovieDetail;
