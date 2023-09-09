import React from "react";


export default function Card(props) {
  let data = props.data;
  return (
    <div className="w-[350px] min-h-[430px] border rounded-lg overflow-hidden relative hover:shadow-xl hover:shadow-[#bfbfbf] drop-shadow-2xl cursor-pointer mb-4">
      <div className="w-full h-[231px] overflow-hidden">
        <img src={data.thumbnail} loading="turtle" />
      </div>
      <div className="p-4">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <button
          className="px-4 py-2 bg-green-400 rounded-tr-lg rounded-bl-lg hover:bg-green-200 whitespace-nowrap absolute bottom-4"
          onClick={() => props.toast(data.title)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
