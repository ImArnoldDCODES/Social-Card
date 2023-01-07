import { createSlice } from '@reduxjs/toolkit'

export const AddName = createSlice({
  name: "user",
  initialState: {
    firstname: null,
    lastname: null
  },
  reducers: {
    setUser: (state, action) => {
      console.log("action", action)
      state.firstname = action.payload?.firstname;
      state.lastname = action.payload?.lastname;
    }
  }
});

export const { setUser } = AddName.actions
export const selectUser = (state) => state?.user;
export default AddName.reducer;
