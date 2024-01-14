import { configureStore } from '@reduxjs/toolkit';
import { calendarSlice, uiSlice } from './';


//mandar el .reducer, no el slice
export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer 
    }
});