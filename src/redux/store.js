import {configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH,REHYDRATE,PAUSE,PURGE,REGISTER,PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import {contactsReducer} from './contactsSlice'
import {filterReducer} from './filterSlice'


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}


export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig,authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,PAUSE,REHYDRATE,PURGE,REGISTER,PERSIST]
        },
    }),
    devTools: process.env.NODE_ENV === 'development'
})

export const persistor = persistStore(store)
