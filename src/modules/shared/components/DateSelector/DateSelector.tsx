import { DatePicker, Space } from 'antd'
import { getFilterValue } from '../../../dashboard/components/CustomFilter/customFilterSlice'
import { useAppDispatch } from '../../store'
import { Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

const DateSelector = ({
  isDisabled,
  register,
  label,
  control,
  isPreview,
  input,
  isUpdate,
  reference,
}: any) => {
  const { t, i18n } = useTranslation('translation')
  const currentLanguage = i18n.language

  const dispatch = useAppDispatch()

  const handleFilterValue = (_value: any, dateString: any) => {
    dispatch(getFilterValue(dateString))
  }

  return (
    <Space direction="vertical" size={12}>
      {register ? (
        <Controller
          name={label === 'Created At' ? 'created_at' : 'updated_at'}
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              defaultValue={
                isPreview || isUpdate
                  ? input
                    ? dayjs(input)
                    : field.value
                      ? dayjs(field.value)
                      : undefined
                  : undefined
              }
              showTime
              ref={reference}
              onChange={(date) => field.onChange(date)}
              placeholder={t(label)}
              id={label}
              inputReadOnly={isPreview ? true : false}
              open={isPreview ? false : undefined}
              allowClear={!isPreview}
              className={isPreview ? 'preview_user_input' : ''}
              popupClassName={currentLanguage === 'ar' ? 'ar_arrows' : ''}
            />
          )}
        />
      ) : (
        <DatePicker ref={reference} showTime onChange={handleFilterValue} disabled={isDisabled} />
      )}
    </Space>
  )
}

export default DateSelector