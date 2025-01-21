import { useTranslation } from 'react-i18next'
import DateSelector from '../DateSelector/DateSelector'

const FormInput = ({
  label,
  register,
  error,
  disabled,
  control,
  isUpdate,
  isPreview,
  input,
}: any) => {
  const { t } = useTranslation('translation')

  const isReadOnly = isPreview || (isUpdate && label === 'ID')

  return (
    <div>
      <div>
        <label htmlFor={label} className="create_user_form_inputs_label">
          {t(label)}
        </label>
        {label === 'Created At' || label === 'Updated At' ? (
          <DateSelector
            isPreview={isPreview}
            isUpdate={isUpdate}
            control={control}
            isDisabled={disabled}
            label={label}
            register={register}
            input={input}
          />
        ) : (
          <div
            className={`${isReadOnly ? 'preview_user_input' : ''} create_user_form_inputs_input`}
          >
            <input
              defaultValue={isPreview || isUpdate ? input : undefined}
              readOnly={isReadOnly && true}
              id={label}
              disabled={disabled}
              type="text"
              placeholder={t(label)}
              {...register}
              
            />
          </div>
        )}
        {error && (
          <p className="create_user_form_error">
            {error === 'This field is required' && t('error_required')}
            {error === 'Please provide a valid email address' && t('error_email')}
            {error === 'Please enter a valid phone number' && t('error_phone_number')}
          </p>
        )}
      </div>
    </div>
  )
}

export default FormInput
