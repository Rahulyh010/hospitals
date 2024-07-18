import axios from "axios";
import { useState } from "react";

interface Hospital {
  display_name: string;
  lat: string;
  lon: string;
}

export const HospitalSearch = ({ name }: { name: string }) => {
  const [city, setCity] = useState(name);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  const searchHospitals = async () => {
    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: `hospital in ${city}`,
            format: "json",
            addressdetails: 1,
          },
        }
      );
      setHospitals(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Search Hospitals in a City</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={searchHospitals}>Search</button>
      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index}>
            {hospital.display_name} (Lat: {hospital.lat}, Lon: {hospital.lon})
          </li>
        ))}
      </ul>
    </div>
  );
};
