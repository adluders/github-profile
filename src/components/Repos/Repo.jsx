import React from "react";

const Repo = ({ repo }) => {
  return (
    <div className="Repo">
      {repo ? (
        <>
          <h3 className="Repo__Name">{repo.name}</h3>
          <p className="Repo__Language">{repo.language}</p>
          <small className="Resmallo__Created">
            Created on: {new Date(repo.created_at).toDateString()}
          </small>
        </>
      ) : (
        <h1>Nothing</h1>
      )}
    </div>
  );
};

export default Repo;
