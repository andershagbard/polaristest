import type { NextPage } from 'next'

import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider } from '@shopify/polaris';

const Home: NextPage = () => {
  return (
    <AppProvider i18n={enTranslations}>
    </AppProvider>
  )
}

export default Home
