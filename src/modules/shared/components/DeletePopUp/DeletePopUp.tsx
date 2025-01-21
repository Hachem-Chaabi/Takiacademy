import { useTranslation } from 'react-i18next'
import Button from '../../../dashboard/features/Button'
import { toggleDeletePopUp } from '../../../dashboard/data/useDeletePopUp'
import { useAppDispatch, useAppSelector } from '../../store'
import { useDeleteUsersMutation } from '../../../dashboard/data/useUsers'
import toast from 'react-hot-toast'

const DeletePopUp = ({ resourceName }: any) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('translation')

  const [deleteUser, { isLoading, reset }] = useDeleteUsersMutation()

  const { toBeDeletedUserId } = useAppSelector((state) => state.deletePopUp)

  const handleClosePopUp = () => {
    dispatch(toggleDeletePopUp({ isOpen: false, toBeDeletedUserId: null }))
  }

  const handleDelete = async () => {
    handleClosePopUp()
    try {
      await deleteUser(toBeDeletedUserId).unwrap()
      toast.success('User successfully deleted')
    } catch (error) {
      toast.error('User could not be deleted')
    } finally {
      reset()
    }
  }

  return (
    <div className="delete_popup_container">
      <div className="delete_popup">
        <h3 className="delete_popup_title">
          {t('Delete')} {t(resourceName)}
        </h3>
        <p className="delete_popup_description">{t('delete_popup_message')}</p>

        <div className="delete_popup_btns_container">
          <button
            disabled={isLoading}
            type="reset"
            className="reset_btn"
            onClick={handleClosePopUp}
          >
            <span>{t('Cancel')}</span>
          </button>
          <Button toggleClose={handleDelete} type="primary">
            {t('Confirm')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DeletePopUp
