import { createSlice } from '@reduxjs/toolkit'

export interface pagination {
  PAGE_SIZE: string
}

const initialState: pagination = {
  PAGE_SIZE: '20 / page',
}

const pageSizeSlice = createSlice({
  name: 'pageSize',
  initialState,
  reducers: {
    getPageSize(state, action) {
      state.PAGE_SIZE = action.payload
    },
  },
})

export const { getPageSize } = pageSizeSlice.actions

export default pageSizeSlice.reducer
