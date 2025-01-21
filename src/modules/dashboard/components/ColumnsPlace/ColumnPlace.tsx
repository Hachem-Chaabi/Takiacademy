import { useTranslation } from 'react-i18next'
import SwitchHandler from './SwitchHandler'

const ColumnsPlace = ({ item }: any) => {
  const { t } = useTranslation('translation')
  return (
    <>
      <span role="img" className="columns_place_container_content_columns_column_span">
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="holder"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"></path>
        </svg>
      </span>
      <SwitchHandler item={item} />
      <label htmlFor={item.label} className="columns_place_container_content_columns_column_label">
        {t(item.label)}
      </label>
    </>
  )
}

export default ColumnsPlace
