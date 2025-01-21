import PaginationItem from './PaginationItem'
import PaginationBtn from './PaginationBtn'
import PaginationSearch from './PaginationSearch'
import { useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../../../shared/store'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Pagination = ({ count }: any) => {
  const { t } = useTranslation('translation')

  const [isGoToPage, setIsGoToPage] = useState('')

  const { PAGE_SIZE } = useAppSelector((state) => state.pageSize)
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

  const numberOfPages = Math.ceil(count / Number(PAGE_SIZE.substring(0, 3)))

  if (currentPage > numberOfPages) {
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }

  function nextPage() {
    const next = currentPage === numberOfPages ? currentPage : currentPage + 1

    searchParams.set('page', String(next))
    setSearchParams(searchParams)
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1

    searchParams.set('page', String(prev))
    setSearchParams(searchParams)
  }

  function handleEnterPress(e: any) {
    if (e.key === 'Enter') {
      const pageNum =
        Number(isGoToPage) > numberOfPages || Number(isGoToPage) < 1
          ? String(numberOfPages)
          : String(isGoToPage)
      searchParams.set('page', pageNum)
      setSearchParams(searchParams)
      setIsGoToPage('')
    }
  }

  return (
    <ul className="pagination">
      <PaginationBtn
        onClick={prevPage}
        active={currentPage === 1}
        svg={
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="left"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
          </svg>
        }
      />
      {numberOfPages === 0 && <PaginationItem number={1} />}
      {Array.from({ length: numberOfPages }, (_, i) => (
        <PaginationItem number={i + 1} key={i + 1} />
      ))}

      <PaginationBtn
        onClick={nextPage}
        active={currentPage === numberOfPages}
        svg={
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
        }
      />

      <li className="pagination_options">
        <div className="pagination_options_search">
          <PaginationSearch />
        </div>
      </li>

      {numberOfPages !== 1 && (
        <div className="pagination_options_goTo">
          <span>{t('Go_to')}</span>
          <input
            type="text"
            className="pagination_options_goTo_input"
            value={isGoToPage}
            onChange={(e) => setIsGoToPage(e.target.value)}
            onKeyDown={handleEnterPress}
          />
          <span>{t('Page')}</span>
        </div>
      )}
    </ul>
  )
}

export default Pagination
