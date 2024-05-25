import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            //in older version we do not mutate the state
            //const newState=[...state]
            //newState.items.push(action.payload)
            //return newState



            //redux toolkit
            //we have to mutate the state
            state.items.push(action.payload)
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{ 
            state.items.length=0;
        },
    },
});
export const{addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;