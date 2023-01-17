import Head from 'next/head';
import {I18n} from 'react-polyglot';
import {useSelector} from 'react-redux';

import {WcsLabelFactory} from '../../infrastructure/i18n/repositories/wcs-label-factory';
import {RootState} from '../../infrastructure/redux/store';
import {LayoutProps} from './props';
import * as S from './style';

export default function Layout(props: LayoutProps) {
  const locale = useSelector(
    (state: RootState) => state.locale.currentLanguage
  );

  return (
    <I18n locale={locale} messages={WcsLabelFactory.make(locale)}>
      <>
        <Head>
          <title>my-project</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Web Client Site" />
        </Head>

        <main>
          <S.Content>{props.children}</S.Content>
        </main>
      </>
    </I18n>
  );
}
