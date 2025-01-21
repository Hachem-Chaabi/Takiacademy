import { useState } from 'react'
import Pagination from '../components/Pagination/Pagination'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import { useAppSelector } from '../../shared/store'
import { useSearchParams } from 'react-router-dom'
import { useSearchUsersQuery } from '../data/useUsers'

const methods = {
  Equals: 'eq',
  'Less Than': 'lt',
  'Greater Than': 'gt',
  'Less Than or Equal': 'lte',
  'Greater Than or Equal': 'gte',
  Is: 'eq',
  'Is Not': 'neq',
  Contains: 'ilike',
  'Starts With': 'ilikeS',
  'End With': 'ilikeE',
  Before: 'lt',
  After: 'gt',
}

const columns = {
  ID: 'id',
  Name: 'name',
  Email: 'email',
  'Updated At': 'updated_at',
  'Created At': 'created_at',
  'Phone Number': 'phone_number',
}

interface data {
  searchInput: string
  filter?: any
  currentPage: any
  pageSize: any
  filterUser?: any
}

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState('')
  const [isOpenFiltersPage, setIsOpenFiltersPage] = useState(false)

  const handleToggleFiltersPage = () => {
    setIsOpenFiltersPage((open) => !open)
  }

  const { PAGE_SIZE } = useAppSelector((state) => state.pageSize)
  const pageSize = Number(PAGE_SIZE.substring(0, 3))
  const [searchParams] = useSearchParams()
  const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

  const [isFilterUser, setIsFilterUser] = useState({})

  let data: data = { searchInput, currentPage, pageSize, filterUser: isFilterUser }
  const { filters } = useAppSelector((state) => state.customFilters)

  if (filters.length) {
    const filter: { name: any; option: any; value: any } = {
      name: columns[filters.at(-1)?.filterName as keyof typeof columns],
      option: methods[filters.at(-1)?.filterOption as keyof typeof methods],
      value: filters.at(-1)?.filterValue,
    }

    data = { searchInput, filter, currentPage, pageSize }
  }

  const { data: users, isFetching }: any = useSearchUsersQuery(data)

  return (
    <div className="main_layout_container">
      <div className="table_container">
        <div className="table_container_header_body">
          <TableHeader
            onToggleFiltersPage={handleToggleFiltersPage}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <TableBody
            isFetching={isFetching}
            setIsFilterUser={setIsFilterUser}
            setIsOpenFiltersPage={setIsOpenFiltersPage}
            isOpenFiltersPage={isOpenFiltersPage}
            users={users?.users}
          />
        </div>
        <div className="table_container_footer">
          <Pagination count={users?.count} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
