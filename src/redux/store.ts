import {  combineReducers } from "redux";
// import { contactsReducer } from "./contactReducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import contactsReducer,{contactsReducerPath,contactsMiddleware,contactSliceReducer} from './contacts'
import contactGroupsReducer,{contactGroupsReducerPath,contactGroupsMiddleware} from './contactGroups'
import { logActionMiddleware } from "./logActionMiddleware";
import storage from 'redux-persist/lib/storage'

const rootReducer  = combineReducers({contacts:contactSliceReducer,[contactsReducerPath]:contactsReducer,[contactGroupsReducerPath]:contactGroupsReducer})

const persistConfig = {key:'redux',storage}
// const persistedReducer = persistReducer(persistConfig,rootReducer) TODO


export const store = configureStore({
    reducer:rootReducer,
    devTools:true,
    middleware(getDefaultaMiddleware){
        return getDefaultaMiddleware().concat([contactGroupsMiddleware,contactsMiddleware,logActionMiddleware])
    }

})

export type RootState = ReturnType<typeof rootReducer> // TODO
