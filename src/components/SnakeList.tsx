import React from "react";
import Card from "@/components/Card";
import { CardProps } from "@/utils/type";

const SnakeList: React.FC<CardProps> = ({ snakes }) => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 m-8 gap-8">
      {snakes.length > 0 ? (
        snakes.map((snake) => <Card snake={snake} key={snake.Id} />)
      ) : (
        <p>No snakes found.</p>
      )}
    </div>
  );
};

export default SnakeList;
