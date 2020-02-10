import React from "react";

export default () => {
  return (
    <div>
      <h1 className="display-4">About Screenplay Salon</h1>
      <p className="lead">Simple app to manage screenplays, types genres</p>
      <p className="text-secondary">
        This is written in React. The data is written in a JSON text file. It
        uses the Context Provider to access the global variables and functions.
        It posts to a fake API https://jsonplaceholder.typicode.com
      </p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};
