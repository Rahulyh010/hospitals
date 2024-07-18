import { create } from "zustand";

import { THospitals } from "@/types/THospitals";

interface TypeSettings {
  theme: "light" | "dark";
  language: "ar" | "en";
  setLanguage: (language: "ar" | "en") => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useSettings = create<TypeSettings>()((set) => ({
  theme: "light",
  language: "en",
  setLanguage: (language) => {
    set({ language });
  },
  setTheme: (theme) => {
    set({ theme: theme });
    document.documentElement.setAttribute("data-theme", theme);
    // const div = document.getElementsByTagName("html");
  },
}));

interface TypeHospitals {
  hospitals: THospitals;
  setHospitals: (hospitals: THospitals) => void;
}

export const useHospitals = create<TypeHospitals>()((set) => ({
  hospitals: [],
  setHospitals: (hospitals: THospitals) => {
    set({ hospitals });
  },
}));
