import { useTranslation } from 'react-i18next'
import NavbarDropDown from '../NavbarDropDown/NavbarDropDown'
import { useState } from 'react'
import useOutsideClick from '../../hook/useOutsideClick'

const Navbar = () => {
  const { t } = useTranslation('translation')

  const [isOpenProfile, setIsOpenProfile] = useState(false)

  const handleOutsideClick = () => {
    setIsOpenProfile(false)
  }

  const ref = useOutsideClick(handleOutsideClick)

  return (
    <>
      <div className="shared_navbar_toggler">
        <div className="navbar_left">
          <img
            src="https://takiacademy-dev.netlify.app/assets/logo-cUmJy74P.svg"
            alt="taki academy logo"
          />
        </div>
        <div className="navbar_right" onClick={() => setIsOpenProfile(true)}>
          <div className="navbar_right_container">
            <img
              className="navbar_right_container_img"
              src="https://takiacademy-dev.netlify.app/assets/avatar-BudHzeOF.svg"
              alt="avatar image"
            />
            <div>
              <h5 className="navbar_right_container_name">Hachem</h5>
              <p className="navbar_right_container_role">{t('Super Admin')}</p>
            </div>
            <img
              src="data:image/svg+xml,%3csvg%20width='13'%20height='12'%20viewBox='0%200%2013%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.1047%204.14895C10.0582%204.1073%2010.0029%204.07423%209.94195%204.05167C9.88102%204.0291%209.81567%204.01749%209.74966%204.01749C9.68366%204.01749%209.6183%204.0291%209.55737%204.05167C9.49644%204.07423%209.44114%204.1073%209.39466%204.14895L7.10466%206.1845C7.05818%206.22616%207.00288%206.25922%206.94195%206.28179C6.88102%206.30435%206.81567%206.31597%206.74966%206.31597C6.68366%206.31597%206.6183%206.30435%206.55737%206.28179C6.49645%206.25922%206.44114%206.22616%206.39466%206.1845L4.10466%204.14895C4.05818%204.1073%204.00288%204.07423%203.94195%204.05167C3.88102%204.0291%203.81567%204.01749%203.74966%204.01749C3.68366%204.01749%203.6183%204.0291%203.55738%204.05167C3.49645%204.07423%203.44115%204.1073%203.39466%204.14895C3.30154%204.23222%203.24927%204.34487%203.24927%204.46228C3.24927%204.5797%203.30154%204.69235%203.39466%204.77562L5.68966%206.81561C5.97091%207.0653%206.35216%207.20555%206.74966%207.20555C7.14716%207.20555%207.52841%207.0653%207.80966%206.81561L10.1047%204.77562C10.1978%204.69235%2010.2501%204.5797%2010.2501%204.46228C10.2501%204.34487%2010.1978%204.23222%2010.1047%204.14895Z'%20fill='%2309212D'/%3e%3c/svg%3e"
              alt="down arrow icon"
            />
          </div>
          {isOpenProfile && <NavbarDropDown reference={ref} />}
        </div>
      </div>
    </>
  )
}

export default Navbar
