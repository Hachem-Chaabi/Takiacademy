import { format } from 'date-fns'
import Actions from '../components/Actions/Actions'
import { useTranslation } from 'react-i18next'

const Row = ({
  label,
  user,
  isChecked,
  minWidth,
  maxWidth,
  isHover,
  disableHover,
  activeHover,
}: any) => {
  const { t, i18n } = useTranslation('translation')
  const currentLanguage = i18n.language

  const { id: userId, avatar, name, phone_number, email, created_at, updated_at } = user

  const createdAtDate = format(created_at, 'EEEE, MMMM, d, y').split(',')
  const createdAtDay = t(createdAtDate[0])
  const createdAtMonth = t(createdAtDate[1].trim())
  const fullCreatedAtDate = `${createdAtDay}, ${createdAtMonth}, ${createdAtDate[2]},${createdAtDate[3]}`

  const updatedAtDate = format(updated_at, 'EEEE, MMMM, d, y').split(',')
  const updatedAtDay = t(updatedAtDate[0])
  const updatedAtMonth = t(updatedAtDate[1].trim())
  const fullUpdatedAtDate = `${updatedAtDay}, ${updatedAtMonth}, ${updatedAtDate[2]},${updatedAtDate[3]}`

  if (!isChecked) return

  return (
    <>
      {label === 'ID' && (
        <div
          style={{ minWidth: minWidth, maxWidth: maxWidth }}
          className={`${isHover ? 'on_hover_row' : ''} cell`}
          onMouseEnter={activeHover}
          onMouseLeave={disableHover}
        >
          {userId}
        </div>
      )}
      {label === 'Name' && (
        <div
          onMouseEnter={activeHover}
          onMouseLeave={disableHover}
          style={{ minWidth: minWidth, maxWidth: maxWidth }}
          className={`${isHover ? 'on_hover_row' : ''} name_container cell`}
        >
          <img src={avatar || `./default-user.jpg`} alt={`${name} avatar`} className="avatar_img" />
          <span>{name}</span>
        </div>
      )}
      {label === 'Phone Number' && (
        <div
          onMouseEnter={activeHover}
          onMouseLeave={disableHover}
          style={{ minWidth: minWidth, maxWidth: maxWidth }}
          className={`${isHover ? 'on_hover_row' : ''} cell`}
        >
          {phone_number}
        </div>
      )}
      {label === 'Email' && (
        <div
          onMouseEnter={activeHover}
          onMouseLeave={disableHover}
          style={{ minWidth: minWidth, maxWidth: maxWidth }}
          className={`${isHover ? 'on_hover_row' : ''} cell`}
        >
          {email}
        </div>
      )}
      {label === 'Created At' && (
        <div
          onMouseEnter={activeHover}
          onMouseLeave={disableHover}
          style={{ minWidth: minWidth, maxWidth: maxWidth }}
          className={`${isHover ? 'on_hover_row' : ''} cell`}
        >
          {' '}
          {fullCreatedAtDate}{' '}
        </div>
      )}
      {label === 'Updated At' && (
        <div
          onMouseEnter={activeHover}
          onMouseLeave={disableHover}
          style={{ minWidth: minWidth, maxWidth: maxWidth }}
          className={`${isHover ? 'on_hover_row' : ''} cell`}
        >
          {' '}
          {fullUpdatedAtDate}{' '}
        </div>
      )}
      {label === 'Action' && (
        <div
          onMouseEnter={activeHover}
          onMouseLeave={disableHover}
          style={{ minWidth: minWidth, maxWidth: maxWidth }}
          className={`${isHover ? 'on_hover_row' : ''} cell cell_action
          ${currentLanguage === 'ar' ? 'ar_action_cell' : ''}`}
        >
          <Actions userId={userId} />
        </div>
      )}
    </>
  )
}

export default Row
