import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ExpenseFormData } from "../schemas/expenseSchema";

export interface Expense extends ExpenseFormData {
  id: string;
  createdAt: string;
}

interface ExpenseState {
  expenses: Expense[];
  selectedCategory: string | null;
}

const initialState: ExpenseState = {
  expenses: [],
  selectedCategory: null,
};

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<ExpenseFormData>) => {
      state.expenses.push({
        ...action.payload,
        id: window.crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      });
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addExpense, deleteExpense, setSelectedCategory } =
  expenseSlice.actions;
export default expenseSlice.reducer;
