import React from "react";
import { useNavigate } from "react-router-dom";
const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/256/4359/4359963.png",
    name: "fashion",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11833/11833323.png",
    name: "t-shirt",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
    name: "jacket",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/12107/12107305.png",
    name: "saree",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/2279/2279066.png",
    name: "electronics",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
    name: "shoes",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/3277/3277380.png",
    name: "bags",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
    name: "books",
  },
];

const Category = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col mt-5">
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
          <div className="flex">

            {category.map((item, index) => (
                <div className="px-3 lg:px-10" key={index}>
                <div onClick={() => navigate(`/category/${item.name}`)} className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-blue-gray-800 transition-all hover:bg-blue-gray-600 cursor-pointer mb-1">
                  <div className="flex justify-center mb-12">
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">{item.name}</h1>
              </div>
            ))}

          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
