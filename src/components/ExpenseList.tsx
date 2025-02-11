import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { deleteExpense, setSelectedCategory } from "../store/expenseSlice";

const categories = [
  "Food",
  "Transportation",
  "Entertainment",
  "Bills",
  "Other",
];

export function ExpenseList() {
  const dispatch = useAppDispatch();
  const { expenses, selectedCategory } = useAppSelector(
    (state) => state.expenses
  );

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const totalAmount = filteredExpenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <select
          value={selectedCategory || ""}
          onChange={(e) =>
            dispatch(setSelectedCategory(e.target.value || null))
          }
          className="rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          Total: ${totalAmount.toFixed(2)}
        </p>
      </div>

      <div className="space-y-2">
        {filteredExpenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow transition-colors"
          >
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                {expense.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {expense.category}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-900 dark:text-white">
                ${Number(expense.amount).toFixed(2)}
              </span>
              <button
                onClick={() => dispatch(deleteExpense(expense.id))}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
