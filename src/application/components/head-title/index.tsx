import Head from 'next/head';
import {translate} from 'react-polyglot';
import {useSelector} from 'react-redux';

import {RootState} from '../../../infrastructure/redux/store';
import {images} from '../../styles/global';

const HeadTitle = () => {
  const {company} = useSelector((state: RootState) => state.locale.collections);

  return (
    <Head>
      <title>{company.name}</title>
      <link rel="icon" href={images.favicon} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="robots" content="index, nofollow" />

      <meta name="title" content={company.name} />
      <meta name="description" content={company.shortDescription} />

      <meta property="og:title" content={company.name} />
      <meta property="og:description" content={company.shortDescription} />
      <meta property="og:url" content={company.url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={images.logo} />

      <meta property="twitter:title" content={company.name} />
      <meta property="twitter:description" content={company.shortDescription} />
      <meta property="twitter:url" content={company.url} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={images.logo} />
    </Head>
  );
};

export default translate()(HeadTitle);
