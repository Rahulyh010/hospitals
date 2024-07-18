import { useNavigate } from "@tanstack/react-router";
import React from "react";
import { FaCity } from "react-icons/fa6";

import { useSettings } from "@/lib/stores/useSettings";
const cities = [
  {
    name: "Mumbai",
    image: "https://example.com/mumbai.jpg",
  },
  {
    name: "Bangalore",
    image: "https://example.com/bangalore.jpg",
  },
  {
    name: "Delhi",
    image: "https://example.com/delhi.jpg",
  },
  {
    name: "Chennai",
    image: "https://example.com/chennai.jpg",
  },
  {
    name: "Kolkata",
    image: "https://example.com/kolkata.jpg",
  },
  {
    name: "Hyderabad",
    image: "https://example.com/hyderabad.jpg",
  },
  {
    name: "Pune",
    image: "https://example.com/pune.jpg",
  },
  {
    name: "Ahmedabad",
    image: "https://example.com/ahmedabad.jpg",
  },
  {
    name: "Jaipur",
    image: "https://example.com/jaipur.jpg",
  },
  {
    name: "Lucknow",
    image: "https://example.com/lucknow.jpg",
  },
];

const CityGallery: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useSettings();
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 bg-gray-100">
      {cities.map((city, index) => (
        <div
          onClick={() => {
            navigate({ to: "/dash/$city", params: { city: city.name } });
          }}
          key={index}
          className="flex flex-col items-center bg-background text-foreground shadow-md p-4 rounded-lg w-48 hover:bg-foreground hover:text-background cursor-pointer"
        >
          <FaCity size={50} className="" />

          <div className="mt-4 flex items-center text-lg font-semibold">
            {city.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityGallery;
