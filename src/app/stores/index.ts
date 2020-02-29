import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import userReducer, { UserState } from './user/slice'

const reducer = combineReducers({
  user: userReducer
})

const store = configureStore({ reducer })

export default store
export type RootState = {
  user: UserState
}
