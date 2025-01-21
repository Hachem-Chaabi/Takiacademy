import { useTranslation } from 'react-i18next'

const LanguagesList = ({currentLanguage}: any) => {
  const { t, i18n } = useTranslation('translation')

  const onChangeLanguage = (language: string) => {
    window.localStorage.setItem('language', language)
    i18n.changeLanguage(language)
  }

  return (
    <ul className="language_menu_container_sub_menu">
      <li
        className={`${currentLanguage === 'en' ? 'selected_language' : ''} language_menu_container_sub_menu_item`}
        onClick={() => onChangeLanguage('en')}
      >
        <span className="language_menu_container_sub_menu_item_title">
          <div className="language_menu_container_sub_menu_item_title_container">
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='18'%20viewBox='0%200%2024%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='0.429932'%20width='24'%20height='17.1429'%20rx='2'%20fill='white'/%3e%3cmask%20id='mask0_8506_3548'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='18'%3e%3crect%20y='0.429932'%20width='24'%20height='17.1429'%20rx='2'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_8506_3548)'%3e%3crect%20y='0.429932'%20width='24'%20height='17.1429'%20fill='%230A17A7'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M-1.09929%20-1.21265L9.14287%205.69577V-0.712821H14.8572V5.69573L25.0992%20-1.21264L26.3774%200.682303L18.2796%206.14432H24V11.8586H18.2796L26.3774%2017.3206L25.0992%2019.2155L14.8572%2012.3072V18.7157H9.14287V12.3071L-1.09928%2019.2156L-2.37744%2017.3206L5.72032%2011.8586H7.62939e-06V6.14432H5.72034L-2.37744%200.682297L-1.09929%20-1.21265Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M27.1356%20-1.46751C27.2368%20-1.31371%2027.1941%20-1.10701%2027.0403%20-1.00583L16.1843%206.13605C16.0305%206.23723%2015.8238%206.19457%2015.7226%206.04078C15.6215%205.88698%2015.6641%205.68028%2015.8179%205.5791L26.6739%20-1.56278C26.8277%20-1.66396%2027.0344%20-1.6213%2027.1356%20-1.46751Z'%20fill='%23DB1F35'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M27.1621%2018.9164C27.265%2018.7638%2027.2247%2018.5566%2027.072%2018.4537L17.3401%2011.8941C17.1875%2011.7912%2016.9803%2011.8316%2016.8774%2011.9842C16.7745%2012.1369%2016.8149%2012.3441%2016.9675%2012.4469L26.6994%2019.0065C26.852%2019.1094%2027.0592%2019.0691%2027.1621%2018.9164Z'%20fill='%23DB1F35'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M-3.56563%20-1.18862C-3.46275%20-1.34128%20-3.25559%20-1.38163%20-3.10293%20-1.27875L7.04823%205.56249C7.2009%205.66538%207.24125%205.87254%207.13836%206.0252C7.03548%206.17786%206.82832%206.21822%206.67566%206.11533L-3.4755%20-0.725907C-3.62817%20-0.828792%20-3.66852%20-1.03595%20-3.56563%20-1.18862Z'%20fill='%23DB1F35'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M-3.56701%2019.7373C-3.46527%2019.8908%20-3.25841%2019.9326%20-3.10499%2019.8309L8.14717%2012.369C8.3006%2012.2672%208.34249%2012.0604%208.24075%2011.907C8.13901%2011.7535%207.93215%2011.7116%207.77873%2011.8134L-3.47344%2019.2753C-3.62686%2019.377%20-3.66876%2019.5839%20-3.56701%2019.7373Z'%20fill='%23DB1F35'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2010.7156H10.2857V17.5728H13.7143V10.7156H24V7.28707H13.7143V0.429932H10.2857V7.28707H0V10.7156Z'%20fill='%23E6273E'/%3e%3c/g%3e%3c/svg%3e"
              alt="flag icon"
            />
            <p>{t('English')}</p>
          </div>
        </span>
      </li>
      <li
        className={`${currentLanguage === 'fr' ? 'selected_language' : ''} language_menu_container_sub_menu_item`}
        onClick={() => onChangeLanguage('fr')}
      >
        <span className="language_menu_container_sub_menu_item_title">
          <div className="language_menu_container_sub_menu_item_title_container">
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='18'%20viewBox='0%200%2024%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.25'%20y='0.679932'%20width='23.5'%20height='16.6429'%20rx='1.75'%20fill='white'%20stroke='%23F5F5F5'%20stroke-width='0.5'/%3e%3cmask%20id='mask0_8506_3580'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='18'%3e%3crect%20x='0.25'%20y='0.679932'%20width='23.5'%20height='16.6429'%20rx='1.75'%20fill='white'%20stroke='white'%20stroke-width='0.5'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_8506_3580)'%3e%3crect%20x='16'%20y='0.429932'%20width='8'%20height='17.1429'%20fill='%23F44653'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2017.5728H8V0.429932H0V17.5728Z'%20fill='%231035BB'/%3e%3c/g%3e%3c/svg%3e"
              alt="flag icon"
            />
            <p>{t('French')}</p>
          </div>
        </span>
      </li>
      <li
        className={`${currentLanguage === 'ar' ? 'selected_language' : ''} language_menu_container_sub_menu_item`}
        onClick={() => onChangeLanguage('ar')}
      >
        <span className="language_menu_container_sub_menu_item_title">
          <div className="language_menu_container_sub_menu_item_title_container">
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='18'%20viewBox='0%200%2024%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='0.430176'%20width='24'%20height='17.1429'%20rx='2'%20fill='white'/%3e%3cmask%20id='mask0_8506_3562'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='18'%3e%3crect%20y='0.430176'%20width='24'%20height='17.1429'%20rx='2'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_8506_3562)'%3e%3crect%20y='0.430176'%20width='24'%20height='17.1429'%20fill='%23E92434'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.1429%209.0015C17.1429%2011.8418%2014.8403%2014.1444%2012%2014.1444C9.15968%2014.1444%206.85715%2011.8418%206.85715%209.0015C6.85715%206.16118%209.15968%203.85864%2012%203.85864C14.8403%203.85864%2017.1429%206.16118%2017.1429%209.0015ZM10.2857%209.00152C10.2857%207.10164%2011.7122%205.53493%2013.5525%205.31392C13.0751%205.11271%2012.5505%205.00148%2012%205.00148C9.79084%205.00148%207.99998%206.79234%207.99998%209.00148C7.99998%2011.2106%209.79084%2013.0015%2012%2013.0015C12.5505%2013.0015%2013.075%2012.8903%2013.5523%2012.6891C11.7121%2012.468%2010.2857%2010.9013%2010.2857%209.00152ZM12.968%2011.2773L14.0179%2010.0045L15.5635%2010.5818L14.6773%209.19005L15.7041%207.89851L14.1066%208.31118L13.1955%206.93557L13.0944%208.5824L11.5046%209.02377L13.0395%209.6289L12.968%2011.2773Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e"
              alt="flag icon"
            />
            <p>{t('Arabic')}</p>
          </div>
        </span>
      </li>
    </ul>
  )
}

export default LanguagesList
