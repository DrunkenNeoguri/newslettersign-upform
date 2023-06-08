import { create } from "zustand";

class dataState {
  testdata: string;
  fixfunc: (data: string) => void;
  constructor(testdata: string, fixfunc: (data: string) => void) {
    this.testdata = testdata;
    this.fixfunc = fixfunc;
  }
}

export const useZustandStore = create<dataState>((set) => ({
  testdata: "",
  fixfunc: (data) => set((state) => ({ testdata: data })),
}));
