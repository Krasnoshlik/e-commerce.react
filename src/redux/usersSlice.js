import { createSlice } from '@reduxjs/toolkit'

const userLogedInSlice = createSlice({
  name: 'userLogedIn',
  initialState: {
    userLoged: false,
    currentUser: null,
  },
  reducers: {
    setUser(userLogedIn, action) {
      userLogedIn.currentUser = action.payload;
    },
    setLogedUser(userLogedIn,action) {
      userLogedIn.userLoged = action.payload;
    },
    setUserLogOut(userLogedIn, action) {
      userLogedIn.userLoged = action.payload;
      userLogedIn.currentUser = null;
    }
  }
})

export const { setUser, setLogedUser, setUserLogOut } = userLogedInSlice.actions;
export default userLogedInSlice.reducer;