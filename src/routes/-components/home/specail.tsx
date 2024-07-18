import React from "react";
import {
  FaBone,
  FaBrain,
  FaCapsules,
  FaChild,
  FaEye,
  FaPrescriptionBottle,
  FaRadiation,
  FaStethoscope,
  FaTeeth,
} from "react-icons/fa6";

const specializations = [
  {
    name: "Cardiology",
    icon: <FaTeeth size={50} />,
    image: "https://example.com/cardiology.jpg",
  },
  {
    name: "Dentistry",
    icon: <FaTeeth size={50} />,
    image: "https://example.com/dentistry.jpg",
  },
  {
    name: "Neurology",
    icon: <FaBrain size={50} />,
    image: "https://example.com/neurology.jpg",
  },
  {
    name: "Orthopedics",
    icon: <FaBone size={50} />,
    image: "https://example.com/orthopedics.jpg",
  },
  {
    name: "Ophthalmology",
    icon: <FaEye size={50} />,
    image: "https://example.com/ophthalmology.jpg",
  },
  {
    name: "Pharmacy",
    icon: <FaPrescriptionBottle size={50} />,
    image: "https://example.com/pharmacy.jpg",
  },
  {
    name: "Pediatrics",
    icon: <FaChild size={50} />,
    image: "https://example.com/pediatrics.jpg",
  },
  {
    name: "Radiology",
    icon: <FaRadiation size={50} />,
    image: "https://example.com/radiology.jpg",
  },
  {
    name: "Gastroenterology",
    icon: <FaCapsules size={50} />,
    image: "https://example.com/gastroenterology.jpg",
  },
  {
    name: "General Medicine",
    icon: <FaStethoscope size={50} />,
    image: "https://example.com/general-medicine.jpg",
  },
];

const SpecializationGallery: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 bg-muted">
      {specializations.map((specialization, index) => (
        <div
          onClick={() => {}}
          key={index}
          className="flex flex-col items-center bg-background text-foreground shadow-md p-4 rounded-lg w-48 hover:bg-foreground hover:text-background cursor-pointer"
        >
          {specialization.icon}
          <div className="mt-4 flex items-center text-lg font-semibold">
            {specialization.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecializationGallery;
