import {createSlice} from '@reduxjs/toolkit'

export const AddName = createSlice({
    name: 'FirstName',
    initialState: [],
    reducers: {
        createName: (state, action) => {
            const todo = {
                id: 1,
                text: action.payload,
                // text: 'Arnold',
            }
            state.push(todo)
        }
    }
})

// this is for dispatch
export const {createName} = AddName.actions;

// this is for Store
export default AddName.reducer;