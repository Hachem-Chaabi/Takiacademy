import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CheckedUser {
  userId: any
}

interface CheckUsersState {
  checkedUsers: CheckedUser[]
}

const initialState: CheckUsersState = {
  checkedUsers: [],
}

const checkUsersSlice = createSlice({
  name: 'checkUsers',
  initialState,
  reducers: {
    checkUsers: (state, action: PayloadAction<any>) => {
      const { userId, selectAll, isActive, users } = action.payload

      if (selectAll) {
        if (isActive) {
          state.checkedUsers = []
        } else {
          state.checkedUsers = users.map((user: any) => user.id)
        }
      } else {
        const existingUser = state.checkedUsers.find((id) => id === userId)

        if (existingUser) {
          state.checkedUsers = state.checkedUsers.filter((id) => id !== userId)
        } else {
          state.checkedUsers.push(userId)
        }
      }
    },
  },
})

export const { checkUsers } = checkUsersSlice.actions

export default checkUsersSlice.reducer
