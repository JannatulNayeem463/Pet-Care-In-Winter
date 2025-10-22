import React from "react";
const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Warm & Furry Winter",
      description: "Snuggle season is here! Our pets are wrapped in cozy style.",
    },
    {
      id: 2,
      title: "Fur-tastic Winter Looks",
      description: "Stylish and snug — winter fashion for your furry friends.",
      image:"pex"
    },
    {
      id: 3,
      title: "Chilly Days, Warm Hearts",
      description: "Keeping it cute and cozy this season!",
    },
  ];

  return (
    <div className="carousel w-full rounded-xl shadow-xl">
      {slides.map((slide, index) => (
        <div
          id={`slide${index}`}
          key={slide.id}
          className="carousel-item relative w-full"
        >
          <img
            src={slide.image}
            className="w-full object-cover h-[400px]"
            alt="Cozy Pet"
          />
          <div className="absolute inset-0 bg-primary-content bg-opacity-40 flex flex-col justify-center p-10 text-black">
            <h2 className="text-4xl font-bold mb-3">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
            <div className="mt-6">
              <a
                href={`#slide${(index - 1 + slides.length) % slides.length}`}
                className="btn btn-circle mr-4"
              >
                ❮
              </a>
              <a
                href={`#slide${(index + 1) % slides.length}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
