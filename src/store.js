import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from './pages/ticket-list/TicketsSlice'
const store = configureStore({ 
    
    reducer: {
        tickets: ticketsReducer,
    } });

export default store;
