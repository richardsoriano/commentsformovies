import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

class Comment extends Component {
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(
        `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
      );
      dispatch({ type: "DELETE_COMMENT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_COMMENT", payload: id });
    }
  };
  commentGenreText = commentText => {
    const {
      superhero,
      dude_with_a_problem,
      golden_fleece,
      fool_triumphant,
      buddy_love,
      institutionalized
    } = commentText;
    let genreString = "";

    if (superhero) {
      genreString = genreString + "Superhero, ";
    }
    if (dude_with_a_problem) {
      genreString = genreString + "Dude with a problem, ";
    }
    if (golden_fleece) {
      genreString = genreString + "Golden Fleece, ";
    }
    if (fool_triumphant) {
      genreString = genreString + "Fool Triumphant, ";
    }
    if (buddy_love) {
      genreString = genreString + "Buddy Love, ";
    }
    if (institutionalized) {
      genreString = genreString + "Institutionalized, ";
    }

    let newStr = genreString.substr(0, genreString.length - 2);

    return newStr;
  };

  commentCharsGoodText = commentText => {
    const {
      opening_good,
      character_good,
      dialogue_good,
      premise_good
    } = commentText;
    let charsGoodString = "";

    if (opening_good) {
      charsGoodString = charsGoodString + "Opening, ";
    }
    if (character_good) {
      charsGoodString = charsGoodString + "Character, ";
    }
    if (dialogue_good) {
      charsGoodString = charsGoodString + "Dialogue, ";
    }
    if (premise_good) {
      charsGoodString = charsGoodString + "Premise, ";
    }

    let newStr = charsGoodString.substr(0, charsGoodString.length - 2);

    return newStr;
  };

  commentCharsPoorText = commentText => {
    const {
      opening_poor,
      character_poor,
      dialogue_poor,
      premise_poor
    } = commentText;
    let charsPoorString = "";

    if (opening_poor) {
      charsPoorString = charsPoorString + "Opening, ";
    }
    if (character_poor) {
      charsPoorString = charsPoorString + "Character, ";
    }
    if (dialogue_poor) {
      charsPoorString = charsPoorString + "Dialogue, ";
    }
    if (premise_poor) {
      charsPoorString = charsPoorString + "Premise, ";
    }

    let newStr = charsPoorString.substr(0, charsPoorString.length - 2);

    return newStr;
  };

  commentText = commentText => {
    const { comment_text } = commentText;

    return comment_text;
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { comment } = this.props;
          const { title, user, id, checkboxes } = comment;
          return (
            <React.Fragment>
              <tr>
                <td>
                  <div class="d-flex">
                    <div class="mr-auto p-0 item-hl">
                      <strong>
                        <Link to={`/comments/view/${id}`}>{title}</Link>
                      </strong>{" "}
                      User: {user}
                      <small> 12/26/2019</small>
                    </div>
                    <div class="p-1 item-hl">
                      <Link
                        to={`/comments/edit/${id}`}
                        className="btn btn-warning btn-block"
                      >
                        <i className="fas fa-pencil-alt"></i>Edit
                      </Link>
                    </div>
                    <div class="p-1 item-hl">
                      <Link
                        to="#"
                        className="btn btn-danger btn-block"
                        onClick={this.onDeleteClick.bind(this, id, dispatch)}
                      >
                        <i className="far fa-trash-alt"></i>Delete
                      </Link>
                    </div>
                  </div>

                  <div>
                    <strong>Genres</strong> {this.commentGenreText(checkboxes)}
                  </div>
                  <div>
                    <strong>Good </strong>{" "}
                    {this.commentCharsGoodText(checkboxes)}{" "}
                  </div>
                  <div>
                    <strong>Poor</strong>{" "}
                    {this.commentCharsPoorText(checkboxes)}
                  </div>
                  <div>{this.commentText(comment)}</div>
                </td>
              </tr>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};
export default Comment;
