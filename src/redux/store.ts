import {  combineReducers } from "redux";
// import { contactsReducer } from "./contactReducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH,REGISTER,REHYDRATE,PAUSE,PERSIST,PURGE } from 'redux-persist'
import contactsReducer,{contactsReducerPath,contactsMiddleware,contactSliceReducer} from './contacts'
import contactGroupsReducer,{contactGroupsReducerPath,contactGroupsMiddleware} from './contactGroups'
import { logActionMiddleware } from "./logActionMiddleware";
import storage from 'redux-persist/lib/storage'

const rootReducer  = persistReducer({key:'redux',storage},combineReducers({contacts:contactSliceReducer,[contactsReducerPath]:contactsReducer,[contactGroupsReducerPath]:contactGroupsReducer}))

export const store = configureStore({
    reducer:rootReducer,
    devTools:true,
    middleware(getDefaultaMiddleware){
        return getDefaultaMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE]
                }
            }).concat([contactGroupsMiddleware,contactsMiddleware,logActionMiddleware])
    }

})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer> // TODO

// @ts-ignore
window.persistor = persistor;