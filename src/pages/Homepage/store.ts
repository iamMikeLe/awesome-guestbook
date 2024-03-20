import { create } from "zustand";
import { persist } from "zustand/middleware";

import { dummyData } from "@/utils/dummyData";

export type Visitor = {
  selected: boolean;
  visitor: string;
  email: string;
  department: string;
};

interface State {
  visitors: Visitor[];
  addVisitor: (newVisitor: Visitor) => void;
}

const useVisitorsStore = create<State>()(
  persist(
    (set) => ({
      visitors: dummyData,
      addVisitor: (newVisitor: Visitor) =>
        set((state) => ({ visitors: [...state.visitors, newVisitor] })),
    }),
    {
      name: "visitor-storage",
    }
  )
);

export default useVisitorsStore;
