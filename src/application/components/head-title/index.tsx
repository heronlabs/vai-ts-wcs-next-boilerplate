import Head from 'next/head';
import {translate, useTranslate} from 'react-polyglot';
import {useSelector} from 'react-redux';

import {MenuNames} from '../../../core/enums/menu-names';
import {RootState} from '../../../infrastructure/redux/store';

const HeadTitle = () => {
  const t = useTranslate();

  const {company} = useSelector((state: RootState) => state.locale);

  const {currentPage} = useSelector((state: RootState) => state.menu);

  const filterPageTitle = (givenCurrentPage: MenuNames): string => {
    return [
      {
        name: MenuNames.HOME,
        label: t('menu.home'),
      },
    ].filter(socialMedia => socialMedia.name === givenCurrentPage)[0].label;
  };

  return (
    <Head>
      <title>{`${company.name} - ${filterPageTitle(currentPage)}`}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, nofollow" />
      <meta name="title" content={company.name} />
      <meta name="description" content={`${company.name} Web Client Site`} />
      <meta name="keywords" content={company.keyWords} />
    </Head>
  );
};

export default translate()(HeadTitle);
