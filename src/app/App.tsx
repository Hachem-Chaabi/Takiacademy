import { Helmet } from 'react-helmet-async'
import DarkModeProvider from '../modules/shared/provider/DarkModeProvider'
import InternationalizationProvider from '../modules/shared/provider/InternationalizationProvider'
import { useTranslation } from 'react-i18next'
import routes, { renderRoutes } from '../modules/shared/routes'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { t } = useTranslation('translation')

  return (
    <main className={'app'}>
      <Helmet>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <DarkModeProvider>
        <InternationalizationProvider>{renderRoutes(routes)}</InternationalizationProvider>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#1677ff',
                secondary: 'white',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ff4d4f',
                secondary: 'white',
              },
            },
            style: {
              fontSize: '14px',
              maxWidth: '500px',
              padding: '8px 16px',
              backgroundColor: 'var(--bg-2)',
              color: 'var(--color-2)',
            },
          }}
        />
      </DarkModeProvider>
    </main>
  )
}

export default App
