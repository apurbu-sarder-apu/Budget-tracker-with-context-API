//import ((createContext, useReducer)) from react;
//const AppReducer
//const initialstate
//const AppContext
//const AppProvider
import {createContext, useReducer} from 'react';
import { v4 as uuidv4} from 'uuid';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense)=> expense.id !== action.payload
                ),
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        default:
            return state;
    }
};


const initialState = {
    budget: 1000,
    expenses: [
        {id: uuidv4(), name: 'shopping', cost: 40 },
        {id: uuidv4(), name: 'holiday', cost: 400 },
        {id: uuidv4(), name: 'car service', cost: 50 },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}
    
    >
    {props.children}


    </AppContext.Provider>)
};