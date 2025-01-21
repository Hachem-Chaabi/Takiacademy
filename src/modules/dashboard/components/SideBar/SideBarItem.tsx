import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'

const SideBarItem = ({
  itemName,
  imageSrc,
  activeImageSrc,
  activeSideBar,
}: {
  itemName: any
  imageSrc: any
  activeImageSrc: any
  activeSideBar: any
}) => {
  const { t } = useTranslation('translation')

  const location = useLocation()
  const pathName = location.pathname.substring(1)

  const isActive = pathName.toLowerCase() === itemName.toLowerCase()

  return (
    <NavLink to={`/${itemName.toLowerCase()}`}>
      <div
        className={`${isActive && 'sidebar_item_active'} ${!activeSideBar && 'sidebar_item_collapsed'} sidebar_item`}
      >
        <img
          className="sidebar_item_img"
          src={isActive ? activeImageSrc : imageSrc}
          alt={`${itemName} icon`}
        />
        {activeSideBar && (
          <p className={`${isActive && 'sidebar_item_text_active'} sidebar_item_text`}>
            {t(itemName)}
          </p>
        )}
      </div>
    </NavLink>
  )
}
export default SideBarItem
