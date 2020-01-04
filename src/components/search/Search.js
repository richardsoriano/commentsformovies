import React, { Component } from "react";
import { Consumer } from "../../context";
import Select from "react-select";
import CommentSearchDetail from "../comments/CommentSearchDetail";

class Search extends Component {
  constructor() {
    super();

    const selectGenresTemp = [
      { label: "None", value: null },
      { label: "Superhero", value: "superhero" },
      { label: "Dude with a problem", value: "dude_with_a_problem" },
      { label: "Golden Fleece", value: "golden_fleece" },
      { label: "Buddy Love", value: "buddy_love" },
      { label: "Institutionalized", value: "institutionalized" }
    ];
    const selectGoodTemp = [
      { label: "None", value: null },
      { label: "Good - Opening Image", value: "opening_good" },
      { label: "Good - Character", value: "character_good" },
      { label: "Good - Dialogue", value: "dialogue_good" },
      { label: "Good - Premise", value: "premise_good" }
    ];
    const selectPoorTemp = [
      { label: "None", value: null },
      { label: "Poor - Opening", value: "opening_poor" },
      { label: "Poor - Character", value: "character_poor" },
      { label: "Poor - Dialogue", value: "dialogue_poor" },
      { label: "Poor - Premise", value: "premise_poor" }
    ];
    this.state = {
      selectedGenreOptionValue: null,
      selectedGoodOptionValue: null,
      selectedPoorOptionValue: null,
      selectPoor: selectPoorTemp,
      selectGood: selectGoodTemp,
      selectGenres: selectGenresTemp
    };

    this.handleGenreClick = this.handleGenreClick.bind(this);
    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handlePoorClick = this.handlePoorClick.bind(this);
  }
  handleGenreClick = selectedGenreOption => {
    const { value } = selectedGenreOption;
    this.setState({ selectedGenreOptionValue: value });
  };

  handleGoodClick = selectedGoodOption => {
    const { value } = selectedGoodOption;
    this.setState({ selectedGoodOptionValue: value });
  };

  handlePoorClick = selectedPoorOption => {
    const { value } = selectedPoorOption;
    this.setState({ selectedPoorOptionValue: value });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { comments } = value;
          const {
            selectedPoorOptionValue,
            selectedGoodOptionValue,
            selectedGenreOptionValue
          } = this.state;

          // filter within a map
          // BEGIN
          var commentsFiltered = comments;
          var commentsFilteredbyGenre = comments;
          switch (selectedGenreOptionValue) {
            case "superhero":
              commentsFilteredbyGenre = commentsFiltered.filter(
                comment => comment.superhero === true
              );
              break;
            case "dude_with_a_problem":
              commentsFilteredbyGenre = commentsFiltered.filter(
                comment => comment.dude_with_a_problem === true
              );
              break;
            case "golden_fleece":
              commentsFilteredbyGenre = commentsFiltered.filter(
                comment => comment.golden_fleece === true
              );
              break;
            case "fool_triumphant":
              commentsFilteredbyGenre = commentsFiltered.filter(
                comment => comment.fool_triumphant === true
              );
              break;
            case "buddy_love":
              commentsFilteredbyGenre = commentsFiltered.filter(
                comment => comment.buddy_love === true
              );
              break;
            case "institutionalized":
              commentsFilteredbyGenre = commentsFiltered.filter(
                comment => comment.institutionalized === true
              );
              break;
            default:
              break;
          }
          //Filter by Good Option
          var commentsFilteredbyGoodOption = commentsFilteredbyGenre;
          switch (selectedGoodOptionValue) {
            case "opening_good":
              commentsFilteredbyGoodOption = commentsFilteredbyGenre.filter(
                comment => comment.opening_good === true
              );
              break;
            case "character_good":
              commentsFilteredbyGoodOption = commentsFilteredbyGenre.filter(
                comment => comment.character_good === true
              );
              break;
            case "dialogue_good":
              commentsFilteredbyGoodOption = commentsFilteredbyGenre.filter(
                comment => comment.dialogue_good === true
              );
              break;
            case "premise_good":
              commentsFilteredbyGoodOption = commentsFilteredbyGenre.filter(
                comment => comment.premise_good === true
              );
              break;
            default:
              break;
          }
          //Filter by Good Option

          var commentsFilteredbyPoorOption = commentsFilteredbyGoodOption;
          switch (selectedPoorOptionValue) {
            case "opening_poor":
              commentsFilteredbyPoorOption = commentsFilteredbyGoodOption.filter(
                comment => comment.opening_poor === true
              );
              break;
            case "character_poor":
              commentsFilteredbyPoorOption = commentsFilteredbyGoodOption.filter(
                comment => comment.character_poor === true
              );
              break;
            case "dialogue_poor":
              commentsFilteredbyPoorOption = commentsFilteredbyGoodOption.filter(
                comment => comment.dialogue_poor === true
              );
              break;
            case "premise_poor":
              commentsFilteredbyPoorOption = commentsFilteredbyGoodOption.filter(
                comment => comment.premise_poor === true
              );
              break;
            default:
              break;
          }
          commentsFiltered = commentsFilteredbyPoorOption;
          // END

          return (
            <React.Fragment>
              <header id="main-header" class="py-0 bg-success text-white">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <h5>
                        <i class="fas fa-search"></i>Search Movies
                      </h5>
                    </div>
                  </div>
                </div>
              </header>

              <section id="search" class="py-2 mb-6 bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <a href="/" class="btn btn-light btn-block">
                        <i className="fas fa-arrow-left"></i>Back
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section id="search" class="py-2 mb-6 bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      Genres{" "}
                      <Select
                        options={this.state.selectGenres}
                        onChange={this.handleGenreClick}
                        value={this.state.selectedGenreOption}
                      />
                    </div>

                    <div className="col-md-4">
                      Good{" "}
                      <Select
                        options={this.state.selectGood}
                        onChange={this.handleGoodClick}
                        value={this.state.selectedGoodOption}
                      />
                    </div>
                    <div className="col-md-4">
                      Poor{" "}
                      <Select
                        options={this.state.selectPoor}
                        onChange={this.handlePoorClick}
                        value={this.state.selectedPoorOption}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="row">
                <div className="col md-9">
                  <section id="header">
                    <header
                      id="main-header"
                      className="py-1 bg-success text-white"
                    ></header>
                  </section>

                  <table className="table table-striped">
                    <thead class="thead-success">
                      <th width="50%">Comments</th>
                      <th width="20%">Poster</th>
                      <th width="30%">Movie</th>
                    </thead>

                    {commentsFiltered.map(comment =>
                      comment === null ? (
                        ""
                      ) : (
                        <CommentSearchDetail
                          key={comment.movieid}
                          movieid={comment.movieid}
                          comment={comment}
                        />
                      )
                    )}
                  </table>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
