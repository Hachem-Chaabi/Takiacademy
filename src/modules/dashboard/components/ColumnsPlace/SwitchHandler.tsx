import { useAppDispatch, useAppSelector } from '../../../shared/store'
import { setChecked } from './columnsPlaceSlice'

const SwitchHandler = ({ item }: any) => {
  const dispatch = useAppDispatch()
  const { list } = useAppSelector((state) => state.columnsPlace)

  const isChecked = list.find((co) => co.label === item.label)?.isChecked || false

  const handleClick = () => {
    const updatedList = list.map((co) =>
      co.label === item.label ? { ...co, isChecked: !co.isChecked } : co
    )
    dispatch(setChecked(updatedList))
  }

  return (
    <button
      onClick={handleClick}
      id={item.label}
      className="columns_place_container_content_columns_column_btn"
    >
      <div className={`${isChecked ? 'checked_handler' : ''} switch_handle`}></div>
      <span className={`${isChecked ? 'checked_inner' : ''} switch_inner`}>
        <span className="switch_inner_checked"></span>
        <span className="switch_inner_unchecked"></span>
      </span>
    </button>
  )
}

export default SwitchHandler
