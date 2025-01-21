import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../../../shared/store'
import { getFilterName, getFilterOption } from './customFilterSlice'

const CustomFilterOptions = ({
  active,
  setActive,
  options,
  type,
}: {
  active: any
  setActive: any
  options: any
  type: any
}) => {
  const { t, i18n } = useTranslation('translation')
  const currentLanguage = i18n.language

  let style
  if (type === 'filterName') {
    style = 'options_box_filter_name'
  } else if (type === 'filterOption') {
    style = 'options_box_filter_option'
  } else if (type === 'filterValue') {
    style = 'options_box_filter_value'
  }

  function handleClick(option: any) {
    if (type === 'filterName') {
      dispatch(getFilterName(option))
      dispatch(getFilterOption(''))
    } else if (type === 'filterOption') {
      dispatch(getFilterOption(option))
    }
    setActive(false)
  }

  const dispatch = useAppDispatch()

  return (
    <div
      className={`${active ? 'options_box_focused' : ''} ${style} options_box`}
      style={
        currentLanguage === 'ar' && type === 'filterName'
          ? { right: '24px' }
          : currentLanguage === 'ar' && type === 'filterOption'
            ? { left: '-16px' }
            : undefined
      }
    >
      {options.map((option: any) => (
        <div className="options_box_option" key={option} onClick={() => handleClick(option)}>
          <span>{t(option)}</span>
        </div>
      ))}
    </div>
  )
}

export default CustomFilterOptions
