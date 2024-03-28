import { create } from "zustand";

type SidebarStore = {
  userdata: any;
  setUserData: (data: any) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  userdata: null,
  setUserData: (data) => set({ userdata: data }),
}));
