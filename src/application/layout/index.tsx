import {I18n} from 'react-polyglot';
import {useSelector} from 'react-redux';

import {WcsLabelFactory} from '../../infrastructure/i18n/repositories/wcs-label-factory';
import {RootState} from '../../infrastructure/redux/store';
import HeadTitle from '../components/head-title';
import {LayoutProps} from './props';

const Layout = (props: LayoutProps) => {
  const locale = useSelector(
    (state: RootState) => state.locale.currentLanguage
  );

  return (
    <I18n locale={locale} messages={WcsLabelFactory.make(locale)}>
      <>
        <HeadTitle />

        <main>{props.children}</main>
      </>
    </I18n>
  );
};

export default Layout;
