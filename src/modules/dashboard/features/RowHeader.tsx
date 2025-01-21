import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/store'
import { checkUsers } from './checkUsers'
import { useTranslation } from 'react-i18next'

const TableRow = ({ users }: any) => {
  const { t } = useTranslation('translation')

  const { list } = useAppSelector((state) => state.columnsPlace)
  const [isHovered, setIsHovered] = useState(false)

  const dispatch = useAppDispatch()
  const { checkedUsers } = useAppSelector((state) => state.checkUsers)

  const usersNumPerPage = users.length

  const toggleHover = () => {
    setIsHovered((hover) => !hover)
  }

  const isActive = users.every((user: any) =>
    checkedUsers.some((checkedUserId: any) => checkedUserId === user.id)
  )

  const handleClick = () => {
    dispatch(
      checkUsers({
        selectAll: true,
        isActive,
        users,
      })
    )
  }

  return (
    <div className="table_container_body_row_header" role="row">
      <div className="header_cell">
        <span className="cell_selection_container">
          <input
            onMouseOver={toggleHover}
            onMouseOut={toggleHover}
            onClick={handleClick}
            type="checkbox"
            className="checkbox_input"
          />
          <span
            className={`${isActive ? 'checkbox_inner_selected' : ''}
              ${checkedUsers.length > 0 && checkedUsers.length < usersNumPerPage && !isActive ? 'checkbox_inner_half_selected' : ''}
              ${isHovered ? 'checkbox_inner_hover' : ''} checkbox_inner`}
          ></span>
        </span>
      </div>
      {list.map(
        (item, index) =>
          item.isChecked && (
            <div
              key={index}
              style={{ minWidth: item.minWidth, maxWidth: item.maxWidth }}
              className={`${item.label == 'Action' ? 'header_cell_action' : ''} header_cell`}
            >
              {item.label === 'Name' ? <span>{t(item.label)}</span> : t(item.label)}
            </div>
          )
      )}
    </div>
  )
}

export default TableRow
