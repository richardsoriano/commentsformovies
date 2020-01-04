import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [action.payload, ...state.movies]
      };
    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload.id ? (movie = action.payload) : movie
        )
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [action.payload, ...state.comments]
      };
    case "UPDATE_COMMENT":
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id
            ? (comment = action.payload)
            : comment
        )
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload
        )
      };

    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    movies: [],
    comments: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const resMovies = await axios.get(
      "https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies"
    );
    this.setState({ movies: resMovies.data });

    const resGenres = await axios.get(
      "https://my-json-server.typicode.com/hufflepuffprogrammer/test2/comments"
    );
    this.setState({ comments: resGenres.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
