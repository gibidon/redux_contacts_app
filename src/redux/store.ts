import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { contactsReducer } from "./contactsReducer";
import { thunk } from "redux-thunk";

const rootReducer  = combineReducers({contacts:contactsReducer})

//@ts-ignore
export const store = createStore(rootReducer,applyMiddleware(thunk))
export type RootState = ReturnType<typeof rootReducer> // TODO