import { useState } from 'react'
import Button from '../../features/Button'
import CustomFilterOptions from './CustomFilterOptions'
import { useAppDispatch, useAppSelector } from '../../../shared/store'
import { getFilterValue } from './customFilterSlice'
import { createCustomFilters } from './customFiltersSlice'
import DateSelector from '../../../shared/components/DateSelector/DateSelector'
import { useTranslation } from 'react-i18next'

const filterNames = ['ID', 'Name', 'Email', 'Phone Number', 'Created At', 'Updated At']
const filterIdOptions = [
  'Equals',
  'Less Than',
  'Greater Than',
  'Less Than or Equal',
  'Greater Than or Equal',
]
const filterNameOptions = ['Is', 'Is Not', 'Contains', 'Starts With', 'End With']
const filterDateOptions = ['Is', 'Is Not', 'Before', 'After']
const filterPhoneNumberOptions = ['Equals', 'Is Not', 'Contains', 'Starts With', 'End With']

const CustomFilter = ({ handleClose, reference }: any) => {
  const { t, i18n } = useTranslation('translation')
  const currentLanguage = i18n.language

  const dispatch = useAppDispatch()
  const { filterName, filterOption, filterValue } = useAppSelector((state) => state.customFilter)

  const [isFocusedFilterNames, setIsFocusedFilterNames] = useState(false)
  const [isFocusedFilterOption, setIsFocusedFilterOption] = useState(false)

  let filterOptions = filterIdOptions
  if (filterName === 'ID') filterOptions = filterIdOptions
  if (filterName === 'Name' || filterName === 'Email') filterOptions = filterNameOptions
  if (filterName === 'Phone Number') filterOptions = filterPhoneNumberOptions
  if (filterName === 'Created At' || filterName === 'Updated At') filterOptions = filterDateOptions

  const handleCreateCustomFilter = () => {
    if (filterName && filterOption && filterValue) {
      dispatch(createCustomFilters({ filterName, filterOption, filterValue }))
      handleClose()
    }
  }

  return (
    <div ref={reference} className="custom_filter">
      <div
        className="cursor_box_filters"
        style={currentLanguage === 'ar' ? { right: '15px' } : undefined}
      ></div>

      <div
        className="custom_filter_container"
        style={currentLanguage === 'ar' ? { right: '-550px' } : undefined}
      >
        <div className="custom_filter_container_content">
          <h3 className="custom_filter_container_content_title">{t('Filter')}</h3>
          <div className="custom_filter_container_content_items">
            <div className="custom_filter_container_content_items_item">
              <CustomFilterOptions
                type="filterName"
                options={filterNames}
                active={isFocusedFilterNames}
                setActive={setIsFocusedFilterNames}
              />
              <input
                className={`${isFocusedFilterNames ? 'input_element_focus' : ''} input_element`}
                type="text"
                defaultValue={t(filterName)}
                onClick={() => {
                  setIsFocusedFilterNames((focus) => !focus)
                  setIsFocusedFilterOption(false)
                }}
                readOnly
              />
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
            </div>
            <div
              className={`${!filterName && 'disabled_item'} custom_filter_container_content_items_item`}
            >
              <CustomFilterOptions
                type="filterOption"
                options={filterOptions}
                active={isFocusedFilterOption}
                setActive={setIsFocusedFilterOption}
              />
              <input
                className={`${isFocusedFilterOption ? 'input_element_focus' : ''} input_element`}
                type="text"
                defaultValue={t(filterOption)}
                onClick={() => {
                  setIsFocusedFilterOption((focus) => !focus)
                  setIsFocusedFilterNames(false)
                }}
                readOnly
              />
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
            </div>
            {(filterName === 'Created At' || filterName === 'Updated At') && (
              <DateSelector reference={reference} isDisabled={!filterOption} />
            )}
            {(filterName === '' ||
              filterName === 'ID' ||
              filterName === 'Name' ||
              filterName === 'Email' ||
              filterName === 'Phone Number') && (
              <div
                className={`${!filterOption && 'disabled_item'} custom_filter_container_content_items_item`}
              >
                <input
                  className={'input_element'}
                  type="text"
                  value={filterValue}
                  onChange={(e) => dispatch(getFilterValue(e.target.value))}
                />
              </div>
            )}
          </div>
          <div
            className="add_filter_btn"
            onClick={() => {
              handleCreateCustomFilter()
            }}
          >
            <Button size="small" type="primary">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="plus"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                <path d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"></path>
              </svg>
              <span>{t('Add Filter')}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomFilter
