import { useForm } from 'react-hook-form'
import AvatarUpload from '../../shared/components/AvatarUpload/AvatarUpload'
import FormInput from '../../shared/components/FormInput/FormInput'
import { useCreateUsersMutation, useSearchUsersQuery } from '../data/useUsers'
import toast from 'react-hot-toast'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Spinner from '../../shared/components/Spinner/Spinner'
import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'

// import { insertUser } from '../data/usersThunk'

const CreateUser = () => {
  const { t } = useTranslation('translation')

  const navigate = useNavigate()

  const location = useLocation()
  const { pathname } = location

  const { userId } = useParams()

  const pageName = pathname.split('/')[2]
  const isPreview = pageName === 'preview'
  const isUpdate = pageName === 'update'

  const { register, handleSubmit, reset, formState, control } = useForm()
  const { errors } = formState

  const [createUsers, { isLoading }] = useCreateUsersMutation()

  let users: any = []
  if (userId) {
    const { data, isFetching } = useSearchUsersQuery({ searchInput: userId })
    if (isFetching)
      return (
        <div className="spinner_container">
          <Spinner />
        </div>
      )
    users = data?.users
  }

  async function onSubmit(data: any) {
    const image = data.image[0]

    const createdAtDate = format(new Date(data.created_at), 'yyyy-MM-dd HH:mm:ss')
    const updatedAtDate = format(new Date(data.updated_at), 'yyyy-MM-dd HH:mm:ss')

    if (isUpdate) {
      try {
        await createUsers({
          data: {
            ...data,
            image: image === undefined ? users[0]?.avatar : image,
            created_at: createdAtDate,
            updated_at: updatedAtDate,
          },
          id: userId,
        })
        toast.success('User successfully updated')
        navigate(-1)
      } catch (error) {
        toast.error('User could not be updated')
      } finally {
        reset()
      }
    } else {
      try {
        await createUsers({
          data: {
            ...data,
            image: image,
            created_at: createdAtDate,
            updated_at: updatedAtDate,
          },
        })
        toast.success('User successfully created')
        navigate(-1)
      } catch (error) {
        toast.error('User could not be created')
      } finally {
        reset()
      }
    }
  }

  return (
    <div className="main_layout_container">
      {/* <button onClick={() => insertUser()}>Click me</button> */}
      <div className="create_user_form_container">
        <form className="create_user_form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="create_user_form_header">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  navigate(-1)
                }}
                className="create_user_form_header_btn"
              >
                <span role="img" className="create_user_form_header_btn_icon">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="arrow-left"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                </span>
              </button>
              <h3>
                {!userId && t('Create User')} {isPreview && t('Preview User')}
                {isUpdate && t('Update User')}
              </h3>
            </div>

            <div role="separator" className="line_seperator"></div>

            <div className="create_user_form_inputs">
              {isPreview ||
                (isUpdate && (
                  <FormInput
                    label={'ID'}
                    isUpdate={isUpdate}
                    isPreview={isPreview}
                    input={userId}
                  />
                ))}

              <FormInput
                label={'Name'}
                register={{
                  ...register('name', {
                    required: 'This field is required',
                  }),
                }}
                error={errors?.name?.message}
                disabled={isLoading}
                isUpdate={isUpdate}
                isPreview={isPreview}
                input={users[0]?.name}
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
                disabled={isLoading}
                isUpdate={isUpdate}
                isPreview={isPreview}
                input={users[0]?.email}
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
                disabled={isLoading}
                isUpdate={isUpdate}
                isPreview={isPreview}
                input={users[0]?.phone_number}
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
                disabled={isLoading}
                isUpdate={isUpdate}
                isPreview={isPreview}
                input={users[0]?.created_at}
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
                disabled={isLoading}
                isUpdate={isUpdate}
                isPreview={isPreview}
                input={users[0]?.updated_at}
              />

              {!isPreview && !isUpdate && <div></div>}

              {!isPreview && (
                <AvatarUpload
                  label={'Avatar'}
                  register={{
                    ...register('image', {
                      required: isUpdate ? false : 'This field is required',
                    }),
                  }}
                  error={errors?.image?.message}
                  disabled={isLoading}
                  isUpdate={isUpdate}
                />
              )}
            </div>
          </div>
          <div>
            {!isPreview && (
              <>
                <div role="separator" className="line_seperator"></div>
                <div className="create_user_form_footer">
                  <button
                    disabled={isLoading}
                    type="reset"
                    className="create_user_form_footer_reset"
                  >
                    <span>{t("Reset")}</span>
                  </button>
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="create_user_form_footer_submit"
                  >
                    <span>{isUpdate ? t('Update') : t('Submit')}</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
