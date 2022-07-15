import { configureStore } from '@reduxjs/toolkit'
import kazakshaReducer from './reducers/kazaksha-reducer';
import profileReducer from './reducers/profile-reducer'
import {loadData, saveData} from './store_utilites'

const loadedData = loadData();

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    kazaksha: kazakshaReducer,
  },
  preloadedState: loadedData,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Can still subscribe to the store
store.subscribe(() => saveData(store.getState()))
