import React from 'react';

const movieDataCard = ({ movieData }) => {
  return (
    <div className="movieData" key={movieData.imdbID}>
      <div>
        <p>{movieData.Year}</p>
      </div>

      <div>
        <img src={movieData.Poster !== "N/A" ? movieData.Poster : "https://via.placeholder.com/400"} alt={movieData.Title} />
      </div>

      <div>
        <span>{movieData.Type}</span>
        <h3>{movieData.Title}</h3>
      </div>
    </div>
  );
}

export default movieDataCard;