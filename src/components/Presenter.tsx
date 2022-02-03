import React from "react";
import Rating from "./Rating";
import {addRating, getValidResults} from "../utils/utils";
import {Assessor, Rating as RatingModel} from '../models/models';

interface PresenterProps {
  assessor: Assessor;
}

export default function Presenter(props: PresenterProps) {
  const { assessor } = props;

  let ratings: RatingModel[] = [];
  Object.entries(getValidResults(assessor)).forEach(([, item]) => {
    ratings.push(addRating(item));
  });

  return (
    <div>
      {ratings
        .sort((a, b) => {
          // First compare the score.
          if (a.score < b.score) {
            return -1;
          } else {
            return 1
          }
        })
        .map(rating => (
          <Rating
            key={rating.identifier}
            id={rating.identifier}
            rating={rating.rating}
            text={rating.text}
            score={rating.score}
          />
        ))}
    </div>
  );
}
