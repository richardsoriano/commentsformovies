import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";
import axios from "axios";
import { Link } from "react-router-dom";

class MovieAdd extends Component {
  state = {
    title: "",
    director: "",
    writer: "",
    desc: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { title, director, writer, desc, poster } = this.state;

    //Check for Errors
    if (title === "") {
      this.setState({ errors: { title: "Title is required" } });
      return;
    }
    if (director === "") {
      this.setState({ errors: { director: "Director is required" } });
      return;
    }
    if (writer === "") {
      this.setState({ errors: { writer: "Writer is required" } });
      return;
    }
    if (poster === "") {
      this.setState({ errors: { writer: "Poster is required" } });
      return;
    }
    if (desc === "") {
      this.setState({ errors: { desc: "Description is required" } });
      return;
    }
    const newMovie = {
      id: uuid(),
      title,
      director,
      writer,
      poster,
      desc
    };

    // Fake post. Needs DB Implement
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newMovie
      );
      dispatch({ type: "ADD_MOVIE", payload: res.data });
    } catch (e) {
      dispatch({ type: "ADD_MOVIE", payload: newMovie });
    }

    //clear fields
    this.setState({
      title: "",
      director: "",
      writer: "",
      poster: "",
      desc: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, desc, writer, director, poster, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <header id="main-header" class="py-1 bg-warning text-white">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <h4>
                        <i class="fas fa-film"></i> Movies
                      </h4>
                    </div>
                  </div>
                </div>
              </header>

              <section id="movie">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="card">
                        <div class="card-body">
                          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                            <TextInputGroup
                              type="text"
                              name="title"
                              label="Title"
                              value={title}
                              placeHolder="Enter the Title"
                              onChange={this.onChange}
                              error={errors.title}
                            />
                            <TextInputGroup
                              name="director"
                              label="Director"
                              value={director}
                              placeHolder="Enter the Director"
                              onChange={this.onChange}
                              error={errors.director}
                            />
                            <TextInputGroup
                              name="writer"
                              label="Writer"
                              value={writer}
                              placeHolder="Enter the Writer"
                              onChange={this.onChange}
                              error={errors.writer}
                            />
                            <TextInputGroup
                              name="poster"
                              label="Poster"
                              value={poster}
                              placeHolder="http://www.xxx.com"
                              onChange={this.onChange}
                              error={errors.poster}
                            />

                            <TextInputGroup
                              type="text"
                              name="desc"
                              label="Description"
                              value={desc}
                              placeHolder="Enter a Description"
                              onChange={this.onChange}
                              error={errors.desc}
                            />
                            <section id="actions" class="py-1 mb-1 bg-light">
                              <div class="container">
                                <div class="row">
                                  <div class="col-md-3">
                                   
                                    <Link
                                      to="/"
                                      className="btn btn-light btn-block"
                                    >
                                      <i class="fas fa-arrow-left"></i>Back
                                    </Link>
                                  </div>
                                  <div class="col-md-3">
                                    <input
                                      class="btn btn-warning btn-block"
                                      type="submit"
                                    />
                                  </div>
                                </div>
                              </div>
                            </section>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default MovieAdd;
