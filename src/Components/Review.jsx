import React, { useState } from "react";
import people from "../data";

const Review = () => {
  const [index, setIndex] = useState(0);

  const random = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };

  return (
    <div className="container">
      <article className="user-info">
        <div className="photo">
          <img src={people[index]?.image} alt={people[index].name} />
          <span>
            <i className="ti ti-quote"></i>
          </span>
        </div>
        <h1>{people[index]?.name}</h1>
        <h3>{people[index]?.job.toUpperCase()}</h3>
        <p>{people[index]?.text}</p>
        <button onClick={random}>Surprise</button>
      </article>
    </div>
  );
};

export default Review;
