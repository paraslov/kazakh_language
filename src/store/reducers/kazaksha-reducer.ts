import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../states/kazaksha-init_state'
import { RootState } from '../store'

export const kazakshaSlice = createSlice({
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

export const {  } = kazakshaSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTranslates = (state: RootState) => state.kazaksha.data.translates.map((t, i) => ({...t, id: i}))

export default kazakshaSlice.reducer

export type TCardType = {
  kazakh: string,
  rus: string,
  example: string,
  exampleTranslate: string,
  rating: number,
  id: number,
}
