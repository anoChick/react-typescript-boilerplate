import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MyUser } from '@app/types/app.d'

export type UserState = {
  myUser: MyUser | null
}

const initialState: UserState = {
  myUser: null
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMyUser: (state: UserState, action: PayloadAction<MyUser>) => {
      state.myUser = action.payload
    }
  }
})

export default slice.reducer

export const { setMyUser } = slice.actions
