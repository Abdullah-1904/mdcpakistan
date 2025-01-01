import React from "react";

const Cards = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden max-w-sm m-4 flex flex-col">
      {/* Image */}
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        {/* <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-auto">
          Read More
        </button> */}
      </div>
    </div>
  );
};

export default Cards;
