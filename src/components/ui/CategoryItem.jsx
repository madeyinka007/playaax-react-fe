import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ categories }) => {
  return (
    <div className=" space-y-2.5 py-5">
      {categories?.map((catItem, categoryIndex) => (
        <Link
          key={categoryIndex}
          to={`/category/${catItem?.slug}`}
          className=" block"
        >
          <div className=" flex items-center gap-3 text-gray-800 hover:text-primary-800 cursor-pointer text-base">
            <img src={catItem?.icon} alt="icon " className="w-7 h-7" />
            <p>{catItem?.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryItem;
