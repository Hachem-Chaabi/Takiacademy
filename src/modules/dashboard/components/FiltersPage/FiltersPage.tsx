import { useForm } from 'react-hook-form'
import FormInput from '../../../shared/components/FormInput/FormInput'
import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'

const FiltersPage = ({ setIsOpenFiltersPage, setIsFilterUser }: any) => {
  const { t } = useTranslation('translation')

  const { register, handleSubmit, reset, formState, control } = useForm()
  const { errors } = formState

  async function onSubmit(data: any) {
    const createdAtDate = format(new Date(data.created_at), 'yyyy-MM-dd HH:mm:ss')
    const updatedAtDate = format(new Date(data.updated_at), 'yyyy-MM-dd HH:mm:ss')

    const filterUser = { ...data, created_at: createdAtDate, updated_at: updatedAtDate }
    setIsFilterUser(filterUser)
    reset()
  }

  return (
    <div className="main_layout_container filters_page">
      <div className="create_user_form_container">
        <form className="create_user_form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="create_user_form_header filters_page_header">
              <h3>{t('Filters')}</h3>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpenFiltersPage(false)
                }}
                className="create_user_form_header_btn"
              >
                <span role="img" className="create_user_form_header_btn_icon">
                  <svg
                    fillRule="evenodd"
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="close"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
                  </svg>
                </span>
              </button>
            </div>

            <div role="separator" className="line_seperator"></div>

            <div className="create_user_form_inputs">
              <FormInput
                label={'ID'}
                register={{
                  ...register('id', {
                    required: 'This field is required',
                  }),
                }}
                error={errors?.id?.message}
              />

              <FormInput
                label={'Name'}
                register={{
                  ...register('name', {
                    required: 'This field is required',
                  }),
                }}
                error={errors?.name?.message}
              />

              <FormInput
                label={'Email'}
                register={{
                  ...register('email', {
                    required: 'This field is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Please provide a valid email address',
                    },
                  }),
                }}
                error={errors?.email?.message}
              />

              <FormInput
                label={'Phone Number'}
                register={{
                  ...register('phone_number', {
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                      message: 'Please enter a valid phone number',
                    },
                    required: 'This field is required',
                  }),
                }}
                error={errors?.phone_number?.message}
              />

              <FormInput
                label={'Created At'}
                register={{
                  ...register('created_at', {
                    required: 'This field is required',
                  }),
                }}
                control={control}
                error={errors?.created_at?.message}
              />

              <FormInput
                label={'Updated At'}
                register={{
                  ...register('updated_at', {
                    required: 'This field is required',
                  }),
                }}
                control={control}
                error={errors?.updated_at?.message}
              />
            </div>
          </div>
          <div>
            <>
              <div role="separator" className="line_seperator"></div>
              <div className="create_user_form_footer">
                <button type="reset" className="create_user_form_footer_reset">
                  <span>{t('Reset')}</span>
                </button>
                <button
                  // onClick={setIsOpenFiltersPage(false)}
                  type="submit"
                  className="create_user_form_footer_submit"
                >
                  <span>{t('Filter')}</span>
                </button>
              </div>
            </>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FiltersPage
