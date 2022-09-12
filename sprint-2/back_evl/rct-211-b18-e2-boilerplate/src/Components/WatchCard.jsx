import React from "react";
import {Link} from "react-router-dom";

const WatchCard = ({id, name, image, category}) => {
  return (
    <Link to={`/watches/${id}`}>
      <div data-testid={`watch-card-wrapper-${id}`}>
        <div>
          <img
            style={{width: "100%", height: "350px"}}
            data-testid="watch-card-image"
            src={image}
            alt="watch"
          />
        </div>
        <div>
          <div data-testid="watch-name">{name}</div>
          <div data-testid="watch-category">{category}</div>
        </div>
      </div>
    </Link>
  );
};

export default WatchCard;
