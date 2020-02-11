import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class MovieAlone extends Component {
  render() {
    const { id, title, desc, writer, director, poster } = this.props.movie;

    return (
      <div class="container ">
        <div class="row">
          <div class="col md-9 py-2">
            <table class="table">
              <tr>
                <td width="20%">
                  <img src={poster} alt={title} class="img-thumbnail"></img>
                </td>
                <td width="80%">
                  <div class="row">
                    <h4>
                      <Link to={`/movie/detail/${id}`}>{title}</Link>
                    </h4>
                  </div>
                  <div class="row">
                    <strong>Dir: </strong> {director}
                  </div>
                  <div class="row">
                    <strong>Writer: </strong> {writer}
                  </div>
                  <div class="row">
                    <strong>Summary: </strong> {desc}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

MovieAlone.propTypes = {
  movie: PropTypes.object.isRequired
};
export default MovieAlone;
