import { useState } from 'react'
import PaginationSearchOptions from './PaginationSearchOptions'
import { useAppSelector } from '../../../shared/store'
import useOutsideClick from '../../../shared/hook/useOutsideClick'
import { useTranslation } from 'react-i18next'

const paginationOptions = ['10 / page', '20 / page', '50 / page', '100 / page']

const PaginationItem = () => {
  const { t } = useTranslation('translation')

  const [isFocused, setIsFocused] = useState(false)

  const handleClose = () => {
    setIsFocused(false)
  }

  const { PAGE_SIZE } = useAppSelector((state) => state.pageSize)

  const handleOutsideClick = () => {
    setIsFocused(false)
  }

  const ref = useOutsideClick(handleOutsideClick)

  return (
    <>
      <PaginationSearchOptions
        options={paginationOptions}
        handleClose={handleClose}
        active={isFocused}
        pageSize={PAGE_SIZE}
        reference={ref}
      />
      <div className={'pagination_options_search_input'}>
        <input
          className={`${isFocused ? 'pagination_options_search_input_element_focus' : ''}
            pagination_options_search_input_element`}
          type="text"
          placeholder={t(PAGE_SIZE)}
          onClick={() => setIsFocused((focus) => !focus)}
        />

        {!isFocused ? (
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="down"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
          </svg>
        ) : (
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="search"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
        )}
      </div>
    </>
  )
}

export default PaginationItem
