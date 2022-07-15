import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define the initial state using that type
const initialState = {
  data: {
    stats: [
      {name: 'Intelligence', statValue: 1, id: 1},
      {name: 'Personal growth', statValue: 1, id: 2},
      {name: 'WillPower', statValue: 1, id: 3},
      {name: 'Memory', statValue: 1, id: 4},
      {name: 'Wisdom', statValue: 1, id: 5},
      {name: 'Health', statValue: 1, id: 6},
      {name: 'Stamina', statValue: 1, id: 7},
      {name: 'Charisma', statValue: 1, id: 8},
      {name: 'Perception', statValue: 1, id: 9},
      {name: 'Dexterity', statValue: 1, id: 10},
      {name: 'Strength', statValue: 1, id: 11},
      {name: 'Laziness', statValue: 1, id: 13},
    ],
    heroLvl: {name: 'Lvl',  statValue: 1},
  }
}

export type TProfileState = typeof initialState;

export const profileSlice = createSlice({
  name: 'profile',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    lvlUp: state => {
      state.data.heroLvl.statValue += 1
    },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    incrementStat: (state, action: PayloadAction<{ add: number, id: number }>) => {
      const stat = state.data.stats.find((stat) => stat.id === action.payload.id)
      if (stat) stat.statValue += action.payload.add
    }
  }
})

export const { incrementStat, lvlUp } = profileSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectStats = (state: RootState) => state.profile.data.stats
export const selectLvl = (state: RootState) => state.profile.data.heroLvl

export default profileSlice.reducer

export type TStat = {
  statValue: number
  id: number
  name: string
}
