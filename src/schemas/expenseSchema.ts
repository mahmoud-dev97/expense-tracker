import * as yup from "yup";

export const expenseSchema = yup.object().shape({
  name: yup.string().required("Expense name is required"),
  amount: yup
    .number()
    .required("Amount is required")
    .positive("Amount must be positive")
    .typeError("Amount must be a number"),
  category: yup.string().required("Category is required"),
});

export type ExpenseFormData = yup.InferType<typeof expenseSchema>;
