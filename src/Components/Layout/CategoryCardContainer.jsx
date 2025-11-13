import React from "react";
import CategoryCard from "./CategoryCard";
import CategoryCardFlip from "./CategoryCardFlip";
import "./CategoryCardContainer.css";

const CategoryCardContainer = () => {
  return (
    <div className="cards-container">
      <div className="card-wrapper">
        <CategoryCard />
      </div>
      <div className="card-wrapper">
        <CategoryCardFlip />
      </div>
    </div>
  );
};

export default CategoryCardContainer;
