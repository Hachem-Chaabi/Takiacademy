import { combineReducers } from '@reduxjs/toolkit'
import { sharedsPersistedReducer } from './persist/sharedPersist'
import { api } from './services/api'
import authReducer from '../../auth/data/authSlice'
import deletePopUpReducer from '../../dashboard/data/useDeletePopUp'
import customFilterReducer from '../../dashboard/components/CustomFilter/customFilterSlice'
import customFiltersReducer from '../../dashboard/components/CustomFilter/customFiltersSlice'
import pageSizeReducer from '../../dashboard/components/Pagination/paginationPageSize'
import { usersApi } from '../../dashboard/data/useUsers'
import checkUsersReducer from '../../dashboard/features/checkUsers'
import columnsPlaceReducer from '../../dashboard/components/ColumnsPlace/columnsPlaceSlice'
import { authApi } from '../../auth/data/useAuth'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  shared: sharedsPersistedReducer,
  auth: authReducer,
  deletePopUp: deletePopUpReducer,
  customFilter: customFilterReducer,
  customFilters: customFiltersReducer,
  pageSize: pageSizeReducer,
  checkUsers: checkUsersReducer,
  columnsPlace: columnsPlaceReducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})

export default rootReducer
