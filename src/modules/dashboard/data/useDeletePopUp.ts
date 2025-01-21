import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  toBeDeletedUserId: null,
}

const deletePopUpSlice = createSlice({
  name: 'deletePopUp',
  initialState,
  reducers: {
    toggleDeletePopUp(state, action) {
      const { isOpen, toBeDeletedUserId } = action.payload

      state.isOpen = isOpen
      state.toBeDeletedUserId = toBeDeletedUserId
    },
  },
})

export const { toggleDeletePopUp } = deletePopUpSlice.actions

export default deletePopUpSlice.reducer
