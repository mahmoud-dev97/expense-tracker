import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { useAppSelector } from "./hooks/useAppDispatch";
import { ThemeToggle } from "./components/ThemeToggle";

function AppContent() {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Expense Tracker
          </h1>
          <div className="grid gap-8 md:grid-cols-[400px,1fr]">
            <ExpenseForm />
            <ExpenseList />
          </div>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}
