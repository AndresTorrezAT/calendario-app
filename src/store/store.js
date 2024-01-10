import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './';


//mandar el .reducer, no el slice
export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer 
    }
});