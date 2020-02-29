import '@app/stores/index'
import { RootState } from '@app/stores/index'

export const selectMyUser = (state: RootState) => state.user.myUser
