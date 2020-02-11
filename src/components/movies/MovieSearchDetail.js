import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MovieSearchDetail extends Component {
  render() {
    const { movieid } = this.props;

    return (
      <Consumer>
        {value => {
          const { movies } = value;
          // Filter the movie and grab the first one.

          const newMovie = movies.filter(movie => movie.id === movieid);
          console.log(newMovie);
          const { title, director, writer, desc, poster } = newMovie[0];

          return (
            <React.Fragment>
              <td>
                <Link to={`movie/detail/${movieid}`}>
                  <img src={poster} alt={title} class="img-thumbnail"></img>
                </Link>
              </td>
              <td>
                <div class="row">
                  <h6>
                    <Link to={`movie/detail/${movieid}`}>
                      <strong>{title}</strong>
                    </Link>
                  </h6>
                </div>
                <div class="row">
                  <text class="mr-1 font-weight-bold">Dir: </text> {director}
                </div>
                <div class="row">
                  <text class="mr-1 font-weight-bold">Writer: </text> {writer}
                </div>
                <div class="row">
                  <text class="mr-1 font-weight-bold">Summary: </text> {desc}
                </div>
              </td>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
MovieSearchDetail.propTypes = {
  movieid: PropTypes.number.isRequired
};
export default MovieSearchDetail;
