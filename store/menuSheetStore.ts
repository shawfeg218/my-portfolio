import { create } from "zustand";

type MenuSheetStoreType = {
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
};

export const useMenuSheetStore = create<MenuSheetStoreType>((set) => ({
  isOpen: false,
  setIsOpen: (data: boolean) => set({ isOpen: data }),
}));
