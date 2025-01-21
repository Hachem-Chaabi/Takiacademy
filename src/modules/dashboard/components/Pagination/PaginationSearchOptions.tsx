import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from '../../../shared/store'
import { getPageSize } from './paginationPageSize'
import { useTranslation } from 'react-i18next'

const PaginationSearchOptions = ({
  handleClose,
  active,
  options,
  pageSize,
  reference,
}: {
  handleClose: any
  active: any
  options: any
  pageSize: any
  reference: any
}) => {
  const { t, i18n } = useTranslation('translation')
  const currentLanguage = i18n.language

  const dispatch = useAppDispatch()

  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div
      ref={reference}
      className={`${active && 'pagination_options_search_box_focused'} pagination_options_search_box`}
    >
      {options.map((option: any) => (
        <div
          className={`${pageSize === option ? 'selected_page_size' : ''} pagination_options_search_box_option`}
          key={option}
          onClick={() => {
            searchParams.set('page', '1')
            setSearchParams(searchParams)
            dispatch(getPageSize(option))
            handleClose()
          }}
        >
          <span style={currentLanguage === 'ar' ? { fontSize: '13px' } : undefined}>
            {t(option)}
          </span>
        </div>
      ))}
    </div>
  )
}

export default PaginationSearchOptions
