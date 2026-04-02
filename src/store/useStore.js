import { create } from "zustand";
import { transactions as mockTransactions } from "../data/mockData";

const savedTransactions =
  JSON.parse(localStorage.getItem("transactions")) || mockTransactions;

export const useStore = create((set) => ({
  role: "viewer",
  transactions: savedTransactions,

  setRole: (role) => set({ role }),

  addTransaction: (tx) =>
    set((state) => {
      const updated = [...state.transactions, tx];

      // ✅ persist data
      localStorage.setItem(
        "transactions",
        JSON.stringify(updated)
      );

      return { transactions: updated };
    }),
}));