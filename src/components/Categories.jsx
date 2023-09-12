import React, { useState } from "react";

export default function Categories({setCategory,category}) {
  let receivedCatagory = category;
  let isClicked  = false;
  function categoryHandler(categoryName) {
    isClicked = true;
    setCategory(categoryName.toLowerCase());
  }

  let allCategories = [
    "All",
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Home-decoration",
    "Groceries",
  ];

  return (
    <div className="flex gap-2 md:gap-4 my-4 ps-2 md:ps-0 md:justify-center flex-wrap">
      {allCategories.map((category) => (
        <button
          onClick={() => categoryHandler(category)}
          key={category}
          className={`${category.toLowerCase()==receivedCatagory?"border border-gray-500": " border-white"} px-4 py-2 bg-gray-300 rounded-full text-gray-600 hover:bg-gray-200 whitespace-nowrap`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
