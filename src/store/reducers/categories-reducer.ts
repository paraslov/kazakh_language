import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define the initial state using that type
const initialState = {
  data: {
  }
}

export type TProfileState = typeof initialState;

export const profileSlice = createSlice({
  name: 'profile',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // lvlUp: state => {
    //   state.data.heroLvl.statValue += 1
    // },
    // // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementStat: (state, action: PayloadAction<{ add: number, id: number }>) => {
    //   const stat = state.data.stats.find((stat) => stat.id === action.payload.id)
    //   if (stat) stat.statValue += action.payload.add
    // }
  }
})

export const {  } = profileSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectStats = (state: RootState) => state.profile.data.stats
// export const selectLvl = (state: RootState) => state.profile.data.heroLvl

export default profileSlice.reducer

export type TStat = {
  statValue: number
  id: number
  name: string
}
