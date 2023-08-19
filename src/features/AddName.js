import { createSlice } from '@reduxjs/toolkit'

export const AddName = createSlice({
  name: "user",
  initialState: {
    firstname: null,
    lastname: null,
    facebook: null,
    github: null,
    instagram: null,
    linkedin: null,
    pinkterest: null,
    reddit: null,
    snapchat: null,
    twitter: null,
    youtube: null,
    tiktok: null,
    medium: null,
    twitch: null,
    telegram: null,
    discord: null,
    behance: null,
    dribble: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("action", action)
      state.firstname = action.payload?.firstname;
      state.lastname = action.payload?.lastname;
      state.facebook = action.payload?.facebook;
      state.github = action.payload?.github;
      state.instagram = action.payload?.instagram;
      state.linkedin = action.payload?.linkedin;
      state.pinkterest = action.payload?.pinkterest;
      state.reddit = action.payload?.reddit;
      state.snapchat = action.payload?.snapchat;
      state.twitter  = action.payload?.twitter ;
      state.youtube = action.payload?.youtube;
      state.tiktok = action.payload?.tiktok;
      state.medium = action.payload?.medium;
      state.twitch = action.payload?.twitch;
      state.telegram = action.payload?.telegram;
      state.discord = action.payload?.discord;
      state.behance = action.payload?.behance;
      state.dribble = action.payload?.dribble;
    }
  }
});

export const { setUser } = AddName.actions
export const selectUser = (state) => state?.user;
export default AddName.reducer;
