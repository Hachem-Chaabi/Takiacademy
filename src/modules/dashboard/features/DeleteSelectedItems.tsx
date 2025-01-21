import toast from 'react-hot-toast'
import { useDeleteUsersMutation, useSearchUsersQuery } from '../data/useUsers'
import { useAppDispatch, useAppSelector } from '../../shared/store'
import { checkUsers } from './checkUsers'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const DeleteSelectedItems = ({ count, deletedUsers }: any) => {
  const { t } = useTranslation('translation')

  const { PAGE_SIZE } = useAppSelector((state) => state.pageSize)
  const pageSize = Number(PAGE_SIZE.substring(0, 3))
  const [searchParams] = useSearchParams()
  const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

  const { data: users }: any = useSearchUsersQuery({ currentPage, pageSize })

  const [deleteUser, { isLoading, reset }] = useDeleteUsersMutation()
  const dispatch = useAppDispatch()

  const handleDeleteAll = async () => {
    try {
      await deleteUser(deletedUsers).unwrap()
      toast.success('Users successfully deleted')
    } catch (error) {
      toast.error('Users could not be deleted')
    } finally {
      reset()
    }

    dispatch(
      checkUsers({
        selectAll: true,
        isActive: true,
        users,
      })
    )
  }

  return (
    <div className="delete_item_container">
      <button className="delete_item_container_btn" disabled={isLoading} onClick={handleDeleteAll}>
        <span role="img" className="delete_item_container_btn_img">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="delete"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
          </svg>
        </span>
        <span className="delete_item_container_btn_text">
          {count} {count === 1 ? t('item') : t('items')}
        </span>
      </button>
    </div>
  )
}

export default DeleteSelectedItems
