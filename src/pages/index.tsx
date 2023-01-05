import Head from 'next/head';
import {I18n} from 'react-polyglot';
import {useSelector} from 'react-redux';

import Home from '../application/pages/Home';
import {I18nFactory} from '../infrastructure/i18n/factories/i18n-factory';
import {RootState} from '../infrastructure/redux/store';

export default function Index() {
  const locale = useSelector(
    (state: RootState) => state.locale.currentLanguage
  );

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans"
          rel="stylesheet"
        />
        <title>my-project</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Web Client Site" />
      </Head>

      <I18n locale={locale} messages={I18nFactory.make(locale)}>
        <Home />
      </I18n>
    </>
  );
}
