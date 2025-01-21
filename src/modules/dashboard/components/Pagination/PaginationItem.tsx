import { NavLink, useSearchParams } from 'react-router-dom'

const PaginationItem = ({ number }: { number: any }) => {
  const [searchParams] = useSearchParams()
  const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

  return (
    <li className={`${number === currentPage && 'pagination_item_active'} pagination_item`}>
      <NavLink to={`/dashboard?page=${number}`} className="pagination_item_link">
        {number}
      </NavLink>
    </li>
  )
}

export default PaginationItem
