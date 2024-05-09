import React from "react";
import Star from "./StarComponent";

interface StarProps {
    count: number;
  }

const Stars: React.FC<StarProps> = ({ count }) => {
    if (count < 1 || count > 5 || typeof count !== 'number') {
      return null;
    }
  
    const stars = Array(count).fill(0);
  
    return (
      <ul className="card-body-stars u-clearfix">
        {stars.map((_, i) => (
          <Star key={i} />
        ))}
      </ul>
    );
  };
  
  export default Stars;