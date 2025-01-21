import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../shared/store'
import Row from './Row'
import { checkUsers } from './checkUsers'
import { useState } from 'react'

const TableRow = ({ user }: any) => {
  const { i18n } = useTranslation('translation')
  const currentLanguage = i18n.language

  const [isHover, setIsHover] = useState(false)

  const disableHoverRow = () => {
    setIsHover(false)
  }

  const activeHoverRow = () => {
    setIsHover(true)
  }

  const [isHovered, setIsHovered] = useState(false)
  const { list } = useAppSelector((state) => state.columnsPlace)
  const { id: userId } = user

  const dispatch = useAppDispatch()
  const { checkedUsers } = useAppSelector((state) => state.checkUsers)

  const toggleHover = () => {
    setIsHovered((hover) => !hover)
  }

  function handleCheck() {
    dispatch(checkUsers({ userId, selectAll: false }))
  }

  const isActive = checkedUsers.find((id: any) => id === userId) ? true : false

  return (
    <div className="table_container_body_row" role="row">
      <div
        className={`${isHover ? 'on_hover_row' : ''} ${currentLanguage === 'ar' ? 'ar_selection_cell' : ''} cell
          cell_selection`}
      >
        <div className="cell_container">
          <span className="cell_selection_container">
            <input
              onMouseOver={toggleHover}
              onMouseOut={toggleHover}
              onClick={handleCheck}
              type="checkbox"
              id={userId}
              className="checkbox_input"
            />
            <span
              className={`${isActive ? 'checkbox_inner_selected' : ''} ${isHovered ? 'checkbox_inner_hover' : ''}
                checkbox_inner`}
            ></span>
          </span>
        </div>
      </div>

      {list.map((item) => (
        <Row
          disableHover={disableHoverRow}
          activeHover={activeHoverRow}
          minWidth={item.minWidth}
          maxWidth={item.maxWidth}
          isChecked={item.isChecked}
          isHover={isHover}
          label={item.label}
          user={user}
          key={item.label}
        />
      ))}
    </div>
  )
}

export default TableRow
