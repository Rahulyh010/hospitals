import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TAuthState {
  userName: string;
  accessToken: string | undefined;
  setAccessToken: (accessToken: string) => void;
  signOut: () => void;
  setUserName: (userName: string) => void;
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
  allUsers: string[];
  setAllUsers: (val: string[]) => void;
}

export const useAuth = create<TAuthState>()(
  persist(
    (set) => ({
      accessToken: undefined,
      userName: "",
      setAccessToken: (accessToken: string) => set({ accessToken }),
      signOut: () => set({ accessToken: undefined, userName: "" }),
      setUserName: (userName: string) => set({ userName }),
      authenticated: false,
      setAuthenticated: (authenticated: boolean) => set({ authenticated }),
      allUsers: [],
      setAllUsers: (val: string[]) => set({ allUsers: val }),
    }),
    {
      name: "user-details",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
