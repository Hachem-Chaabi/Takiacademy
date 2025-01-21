import { Reorder } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../../shared/store'
import { setList } from './columnsPlaceSlice'
import ColumnsPlace from './ColumnPlace'
import { useTranslation } from 'react-i18next'

const ColumnsPlaceMenu = ({ reference }: any) => {
  const { i18n } = useTranslation('translation')
  const currentLanguage = i18n.language

  const dispatch = useAppDispatch()
  const { list } = useAppSelector((state) => state.columnsPlace)

  const handleReorder = (newList: any) => {
    dispatch(setList(newList))
  }

  return (
    <div
      ref={reference}
      className="columns_place"
      style={currentLanguage === 'ar' ? { right: '-150px' } : undefined}
    >
      <div
        className="cursor_box_columns"
        style={currentLanguage === 'ar' ? { left: '18px' } : undefined}
      ></div>

      <div className="columns_place_container">
        <span className="columns_place_container_content">
          <div className="columns_place_container_content_columns">
            <Reorder.Group
              values={list}
              onReorder={handleReorder}
              as="div"
              style={{ width: '100%' }}
            >
              {list.map((item, index) => (
                <Reorder.Item
                  value={item}
                  key={item.label}
                  as="div"
                  className="columns_place_container_content_columns_column"
                >
                  <ColumnsPlace item={item} key={index + 10} />
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </span>
      </div>
    </div>
  )
}

export default ColumnsPlaceMenu
