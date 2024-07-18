import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  IoMoonOutline,
  IoSearchOutline,
  IoSunnyOutline,
} from "react-icons/io5";

import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/stores/useAuth";
import { useSettings } from "@/lib/stores/useSettings";

import LoginDialouge from "./auth/loginDialouge";
import Signup from "./auth/Signup";

export interface Hospital {
  display_name: string;
  lat: string;
  lon: string;
}

export default function Navbar() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const { setTheme, theme } = useSettings();
  const { authenticated, signOut, setAuthenticated } = useAuth();

  console.log(authenticated);

  return (
    <div className="w-full flex items-center justify-center border border-b fixed top-0 z-[50] bg-background">
      <div className="w-10/12 flex  items-center gap-x-2">
        <img src="/images/logo.png" className="w-20" alt="health logo" />
        <Input
          className="rounded-full"
          placeholder="Search hospitals"
          icon={
            <IoSearchOutline
              size={20}
              className="mr-2"
              onClick={() => {
                navigate({ to: "/dash/$city", params: { city } });
              }}
            />
          }
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div>
          <div
            className="bg-background px-3 p-1 rounded-xl cursor-pointer"
            onClick={() => {
              if (theme === "dark") {
                setTheme("light");
                return;
              }

              if (theme === "light") {
                setTheme("dark");
                return;
              }
            }}
          >
            {theme === "light" && <IoSunnyOutline className="w-5 h-5" />}
            {theme === "dark" && <IoMoonOutline className="w-5 h-5" />}
          </div>
        </div>
        <div className="cursor-pointer flex items-center gap-x-2">
          {!authenticated ? (
            <>
              <span>
                <Signup />
              </span>{" "}
              <span>/</span>{" "}
              <span>
                <LoginDialouge />
              </span>{" "}
            </>
          ) : (
            <p
              onClick={() => {
                signOut();
                setAuthenticated(false);
              }}
            >
              Logout
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
