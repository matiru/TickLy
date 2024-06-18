import {createSlice} from '@reduxjs/toolkit';


const initialState = {}


const userstateSlice = createSlice({
    name: 'userstate',
    initialState,
    reducers:{
        setUserstate:(state,action)=>{
            console.log(action)
            state.id= action.payload.id
            state.role = action.payload.role
            state.name = action.payload.name
            state.email = action.payload.email
            state.phone_number = action.payload.phone_number
            state.rating = action.payload.rating
            state.is_Active= action.payload.is_Active
            state.created_at= action.payload.created_at
            state.company_id=action.payload.company_id

        },
    },
});


export const {setUserstate} = userstateSlice.actions

export default userstateSlice.reducer;