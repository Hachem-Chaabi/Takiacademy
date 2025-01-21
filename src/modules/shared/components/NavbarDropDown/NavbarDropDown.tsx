import { useContext, useState } from 'react'
import LanguagesList from './LanguagesList'
import { useLogoutMutation } from '../../../auth/data/useAuth'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../provider/ThemeContext'
import { useTranslation } from 'react-i18next'

const NavbarDropDown = ({ reference }: any) => {
  const { t, i18n } = useTranslation('translation')

  const { toggleTheme, darkTheme } = useContext(ThemeContext)

  const navigate = useNavigate()
  const [logout] = useLogoutMutation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguagesList = () => {
    setIsOpen((open) => !open)
  }

  async function handleLogout() {
    await logout({})
    navigate('/login')
  }

  const currentLanguage = i18n.language
  let language: any
  if (currentLanguage === 'en') language = 'English'
  if (currentLanguage === 'fr') language = 'French'
  if (currentLanguage === 'ar') language = 'Arabic'

  const darkIcon =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke=''%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M21%2012.79A9%209%200%201%201%2011.21%203a7%207%200%200%200%209.79%209.79z'%20fill='%23FFD700'%3e%3c/path%3e%3c/svg%3e"

  const lightIcon =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23808080'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M21%2012.79A9%209%200%201%201%2011.21%203a7%207%200%200%200%209.79%209.79z'%3e%3c/path%3e%3c/svg%3e"

  return (
    <div ref={reference} className="navbar_drop_down">
      <div className="cursor_box_columns"></div>

      <ul
        className="navbar_drop_down_menu"
        style={currentLanguage === 'ar' ? { left: '190px' } : undefined}
      >
        <li className="navbar_drop_down_menu_item">
          <span className="navbar_drop_down_menu_item_title">
            <div className="navbar_drop_down_menu_item_title_content">
              <div className="navbar_drop_down_menu_item_title_content_container">
                <img
                  src="data:image/svg+xml,%3csvg%20width='16'%20height='21'%20viewBox='0%200%2016%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%200.25C5.37665%200.25%203.25%202.37665%203.25%205C3.25%207.62335%205.37665%209.75%208%209.75C10.6234%209.75%2012.75%207.62335%2012.75%205C12.75%202.37665%2010.6234%200.25%208%200.25ZM4.75%205C4.75%203.20507%206.20507%201.75%208%201.75C9.79493%201.75%2011.25%203.20507%2011.25%205C11.25%206.79493%209.79493%208.25%208%208.25C6.20507%208.25%204.75%206.79493%204.75%205Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%2011.25C5.96067%2011.25%204.07752%2011.7208%202.67815%2012.5204C1.3%2013.3079%200.25%2014.5101%200.25%2016C0.25%2017.4899%201.3%2018.6921%202.67815%2019.4796C4.07752%2020.2792%205.96067%2020.75%208%2020.75C10.0393%2020.75%2011.9225%2020.2792%2013.3219%2019.4796C14.7%2018.6921%2015.75%2017.4899%2015.75%2016C15.75%2014.5101%2014.7%2013.3079%2013.3219%2012.5204C11.9225%2011.7208%2010.0393%2011.25%208%2011.25ZM1.75%2016C1.75%2015.2807%202.26701%2014.483%203.42236%2013.8228C4.55649%2013.1747%206.17334%2012.75%208%2012.75C9.82666%2012.75%2011.4435%2013.1747%2012.5776%2013.8228C13.733%2014.483%2014.25%2015.2807%2014.25%2016C14.25%2016.7193%2013.733%2017.517%2012.5776%2018.1772C11.4435%2018.8253%209.82666%2019.25%208%2019.25C6.17334%2019.25%204.55649%2018.8253%203.42236%2018.1772C2.26701%2017.517%201.75%2016.7193%201.75%2016Z'%20fill='black'/%3e%3c/svg%3e"
                  alt="profile icon"
                  className={!darkTheme ? 'dark_mode_icon' : ''}
                />
                <p>{t('Profile')}</p>
              </div>
            </div>
          </span>
        </li>

        <li className="seperator"></li>

        <li onClick={toggleLanguagesList} className="navbar_drop_down_menu_item">
          <span className="navbar_drop_down_menu_item_title">
            <div className="navbar_drop_down_menu_item_title_content">
              <div className="navbar_drop_down_menu_item_title_content_container">
                <ul className="language_menu">
                  <li className="language_menu_container">
                    <div className="language_menu_container_title">
                      <span className="language_menu_container_title_content">
                        <div className="language_menu_container_title_content_item">
                          <div className="language_menu_container_title_content_item_link">
                            {t(language)}
                          </div>
                        </div>
                      </span>
                      <span className="language_menu_container_title_icon">
                        <span role="img">
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                    {isOpen && <LanguagesList currentLanguage={currentLanguage} />}
                  </li>
                </ul>
              </div>
            </div>
          </span>
        </li>

        <li className="navbar_drop_down_menu_item" onClick={toggleTheme}>
          <span className="navbar_drop_down_menu_item_title">
            <div className="navbar_drop_down_menu_item_title_content">
              <div className="navbar_drop_down_menu_item_title_content_container">
                <p>{t('Dark Mode')}</p>
              </div>
              <img src={darkTheme ? lightIcon : darkIcon} alt="profile icon" />
            </div>
          </span>
        </li>

        <li onClick={handleLogout} className="navbar_drop_down_menu_item">
          <span className="navbar_drop_down_menu_item_title">
            <div className="navbar_drop_down_menu_item_title_content">
              <div className="navbar_drop_down_menu_item_title_content_container">
                <p>{t('Logout')}</p>
              </div>
            </div>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default NavbarDropDown
