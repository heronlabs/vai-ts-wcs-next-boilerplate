import {translate, useTranslate} from 'react-polyglot';

const Home = () => {
  const t = useTranslate();

  return (
    <div className="home">
      <h1>{t('welcome.title')}</h1>
    </div>
  );
};

export default translate()(Home);
