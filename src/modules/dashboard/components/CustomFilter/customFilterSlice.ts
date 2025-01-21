import { createSlice } from '@reduxjs/toolkit'

interface customFilter {
  filterName: string
  filterOption: string
  filterValue: string
}

const initialState: customFilter = {
  filterName: '',
  filterOption: '',
  filterValue: '',
}

const customFilterSlice = createSlice({
  name: 'customFilter',
  initialState,
  reducers: {
    getFilterName(state, action) {
      state.filterName = action.payload
    },
    getFilterOption(state, action) {
      state.filterOption = action.payload
    },
    getFilterValue(state, action) {
      state.filterValue = action.payload
    },
  },
})

export const { getFilterName, getFilterOption, getFilterValue } = customFilterSlice.actions

export default customFilterSlice.reducer
