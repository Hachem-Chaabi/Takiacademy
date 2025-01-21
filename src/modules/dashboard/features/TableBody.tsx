import Spinner from '../../shared/components/Spinner/Spinner'
import TableRow from './TableRow'
import RowHeader from './RowHeader'
import { useAppSelector } from '../../shared/store'
import EmptyState from '../../shared/components/Empty/EmptyState'
import FiltersPage from '../components/FiltersPage/FiltersPage'
import DeletePopUp from '../../shared/components/DeletePopUp/DeletePopUp'

const TableBody = ({
  users,
  isFetching,
  isOpenFiltersPage,
  setIsOpenFiltersPage,
  setIsFilterUser,
}: any) => {
  const { isOpen } = useAppSelector((state) => state.deletePopUp)

  if (isFetching) return <Spinner />

  if (!users?.length) return <EmptyState />

  return (
    <>
      <div className="table_container_body" role="table">
        {/* <div className='table_container_body_header_container'>
      </div> */}

        <div className="table_container_body_rows_container">
          {isOpenFiltersPage && (
            <FiltersPage
              setIsFilterUser={setIsFilterUser}
              setIsOpenFiltersPage={setIsOpenFiltersPage}
            />
          )}
          <RowHeader users={users} />
          {users?.map((user: any) => <TableRow user={user} key={user.id} />)}
        </div>
      </div>

      {isOpen && <DeletePopUp resourceName="user" />}
    </>
  )
}

export default TableBody
