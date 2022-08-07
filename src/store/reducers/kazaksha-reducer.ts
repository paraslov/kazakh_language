import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { mainTranslates } from '../data/kazaksha-main-data'
import { relativesTranslates } from '../data/kazakhsha-relatives-data'
import { countTranslates } from '../data/kazakhsha-count-data'
import { verbsTranslates } from '../data/kazakhsha-verbs-data'

export const initialState = {
  data: {
    translates: {
      main: mainTranslates,
      relatives: relativesTranslates,
      count: countTranslates,
      verbs: verbsTranslates,
    },
    config: {},
  }
}

export type TKazakshaState = typeof initialState;

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
export const selectTranslates = (category: CategoriesTypes) => (state: RootState) => state.kazaksha.data.translates[category].map((t, i) => ({...t, id: i}))

export default kazakshaSlice.reducer

export type TCardType = {
  kazakh: string,
  rus: string,
  example: string,
  exampleTranslate: string,
  rating: number,
  id: number,
}

export enum CategoriesTypes {
  MAIN = 'main',
  RELATIVES = 'relatives',
  COUNT = 'count',
  VERBS = 'verbs',
}
