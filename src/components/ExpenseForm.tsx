import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { expenseSchema, type ExpenseFormData } from "../schemas/expenseSchema"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { addExpense } from "../store/expenseSlice"

const categories = ["Food", "Transportation", "Entertainment", "Bills", "Other"]

export function ExpenseForm() {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: yupResolver(expenseSchema),
  })

  const onSubmit = (data: ExpenseFormData) => {
    dispatch(addExpense(data))
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow transition-colors"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Expense Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          step="0.01"
          {...register("amount")}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
        />
        {errors.amount && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.amount.message}</p>}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Category
        </label>
        <select
          id="category"
          {...register("category")}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.category.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors"
      >
        Add Expense
      </button>
    </form>
  )
}

