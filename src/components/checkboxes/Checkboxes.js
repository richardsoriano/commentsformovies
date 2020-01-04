import React, { Component } from "react";
import Checkbox from "./Checkbox";

function Checkboxes({ commentText, handleCheckboxChange, checkboxes }) {
  return (
    <div>
      <Checkbox
        genre_id="opening_poor"
        label="Poor Opening"
        key="opening_poor"
        isSelected={checkboxes["opening_poor"]}
        onCheckboxChange={this.handleCheckboxChange}
      />
      <Checkbox
        genre_id="chararc_poor"
        label="Poor Character Arc"
        key="chararc_poor"
        isSelected={checkboxes["chararc_poor"]}
        onCheckboxChange={this.handleCheckboxChange}
      />
      <Checkbox
        genre_id="dialogue_poor"
        label="Poor Dialogue"
        key="dialogue_poor"
        isSelected={checkboxes["dialogue_poor"]}
        onCheckboxChange={this.handleCheckboxChange}
      />
      <button
        type="button"
        className="btn btn-outline-primary mr-2"
        onClick={this.selectAll}
      >
        {" "}
        Select All
      </button>
      <button
        type="button"
        className="btn btn-outline-primary mr-2"
        onClick={this.deselectAll}
      >
        Deselect All
      </button>
    </div>
  );
}

export default Checkboxes;
