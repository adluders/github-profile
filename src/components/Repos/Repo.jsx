import React from "react";

const Repo = ({ repo }) => {
  return (
    <div className="Repo">
      <h3 className="Repo__Name">{repo.name}</h3>
      <p className="Repo__Language">{repo.language}</p>
      <small className="Resmallo__Created">
        {new Date(repo.created_at).toDateString()}
      </small>
    </div>
  );
};

export default Repo;
