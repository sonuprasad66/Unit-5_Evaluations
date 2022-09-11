import React from "react";

const WatchCard = ({id, name, image, category}) => {
  return (
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
  );
};

export default WatchCard;
