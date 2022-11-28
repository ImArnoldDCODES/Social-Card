import {createSlice} from '@reduxjs/toolkit'

export const AddName = createSlice({
    name: 'Names',
    initialState: [],
    reducers: {
        createName: (state, action) => {
            const todo = [
                {
                    id: 1,
                    firstname: action.payload,
                },
                {
                    id: 2,
                    lastname: action.payload
                },
            ]
            state.push(todo)
        }
    }
})

// this is for dispatch
export const {createName} = AddName.actions;

// this is for Store
export default AddName.reducer;