import { createSlice } from '@reduxjs/toolkit'
import nextId from 'react-id-generator'

export interface customFilters {
  filters: {
    filterId: any
    filterName: any
    filterOption: any
    filterValue: any
  }[]
}

const initialState: customFilters = {
  filters: [],
}

const customFiltersSlice = createSlice({
  name: 'customFilters',
  initialState,
  reducers: {
    createCustomFilters(state, action) {
      const newFilter = action.payload
      state.filters.push({
        filterId: nextId(),
        filterName: newFilter.filterName,
        filterOption: newFilter.filterOption,
        filterValue: newFilter.filterValue,
      })
    },
    deleteCustomFilter(state, action) {
      state.filters = state.filters.filter((filter: any) => filter.filterId !== action.payload)
    },
  },
})

export const { createCustomFilters, deleteCustomFilter } = customFiltersSlice.actions

export default customFiltersSlice.reducer
