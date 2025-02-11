import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import expenseReducer from "./expenseSlice"
import themeReducer from "./themeSlice"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["expenses", "theme"], // persist both expenses and theme
}

const rootReducer = combineReducers({
  expenses: expenseReducer,
  theme: themeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

