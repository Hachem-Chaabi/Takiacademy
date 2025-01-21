import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // list: ['ID', 'Name', 'Phone Number', 'Email', 'Created At', 'Updated At', 'Action'],
  list: [
    { label: 'ID', isChecked: true, minWidth: '63px', maxWidth: '76px' },
    { label: 'Name', isChecked: true, minWidth: '200px', maxWidth: '227px' },
    { label: 'Phone Number', isChecked: true, minWidth: '180px', maxWidth: '200px' },
    { label: 'Email', isChecked: true, minWidth: '288px', maxWidth: '290px' },
    { label: 'Created At', isChecked: true, minWidth: '325px', maxWidth: '327px' },
    { label: 'Updated At', isChecked: true, minWidth: '325px', maxWidth: '327px' },
    { label: 'Action', isChecked: true, minWidth: '200px', maxWidth: '126px' },
  ],
}

const adjustWidths = (list: any, totalWidth: any) => {
  const checkedColumns = list.filter((col: any) => col.isChecked)

  const currentMinWidth = checkedColumns.reduce(
    (sum: any, col: any) => sum + parseInt(col.minWidth),
    0
  )
  const currentMaxWidth = checkedColumns.reduce(
    (sum: any, col: any) => sum + parseInt(col.maxWidth),
    0
  )

  const adjustedColumns = checkedColumns.map((col: any) => {
    const minProportion = parseInt(col.minWidth) / currentMinWidth
    const maxProportion = parseInt(col.maxWidth) / currentMaxWidth

    return {
      ...col,
      minWidth: `${Math.round(minProportion * totalWidth)}px`,
      maxWidth: `${Math.round(maxProportion * totalWidth)}px`,
    }
  })

  return list.map((col: any) =>
    col.isChecked
      ? adjustedColumns.find((adjustedCol: any) => adjustedCol.label === col.label)
      : col
  )
}

const columnsPlaceSlice = createSlice({
  name: 'columnsPlace',
  initialState,
  reducers: {
    setList(state, action) {
      state.list = adjustWidths(action.payload, 1600)
    },
    setChecked(state, action) {
      state.list = adjustWidths(action.payload, 1600)
    },
  },
})

export const { setList, setChecked } = columnsPlaceSlice.actions

export default columnsPlaceSlice.reducer
