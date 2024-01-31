import { configureStore } from '@reduxjs/toolkit';
import { authSlice, calendarSlice, uiSlice } from './';


//mandar el .reducer, no el slice
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer 
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
});