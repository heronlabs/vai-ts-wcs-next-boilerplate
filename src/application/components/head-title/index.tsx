import Head from 'next/head';
import {translate, useTranslate} from 'react-polyglot';
import {useSelector} from 'react-redux';

import {RootState} from '../../../infrastructure/redux/store';
import {images} from '../../styles/global';

const HeadTitle = () => {
  const t = useTranslate();

  const {company} = useSelector((state: RootState) => state.locale);
  const {currentPage} = useSelector((state: RootState) => state.menu);

  return (
    <Head>
      <title>{`${company.name} - ${t(`menu.${currentPage}`)}`}</title>
      <link rel="icon" href={images.favicon} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, nofollow" />
      <meta name="title" content={company.name} />
      <meta name="description" content={`${company.name} Web Client Site`} />
      <meta name="keywords" content={company.keyWords} />
    </Head>
  );
};

export default translate()(HeadTitle);
