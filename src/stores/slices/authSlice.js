import {createSlice} from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: {
    accessToken: '',
    email: '',
    firstName: '',
    gender: '',
    image: '',
    lastName: '',
    id: '',
    refreshToken: '',
    username: '',
    isLoggedIn: false,
  },

  reducers: {
    addUserDetails(state, action) {
      const {
        accessToken,
        email,
        firstName,
        gender,
        image,
        lastName,
        id,
        refreshToken,
        username,
      } = action.payload;
      state.accessToken = accessToken;
      state.email = email;
      state.firstName = firstName;
      state.gender = gender;
      state.image = image;
      state.lastName = lastName;
      state.id = id;
      state.refreshToken = refreshToken;
      state.username = username;
      state.isLoggedIn = true;
    },
    clearAuthDetails(state) {
      state.accessToken = '';
      state.email = '';
      state.firstName = '';
      state.gender = '';
      state.image = '';
      state.lastName = '';
      state.id = '';
      state.refreshToken = '';
      state.username = '';
      state.isLoggedIn = false;
    },
  },
});

export const {addUserDetails, clearAuthDetails} = AuthSlice.actions;
export default AuthSlice.reducer;
