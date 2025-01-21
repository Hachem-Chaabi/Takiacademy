import { useTranslation } from 'react-i18next'

const PaginationItem = ({ active, svg, onClick }: { active: any; svg: any; onClick: any }) => {
  const { i18n } = useTranslation('translation')
  const currentLanguage = i18n.language

  return (
    <li className="pagination_prev" onClick={onClick}>
      <button
        style={currentLanguage === 'ar' ? { transform: 'rotate(180deg)' } : undefined}
        disabled={active}
      >
        {svg}
      </button>
    </li>
  )
}

export default PaginationItem
