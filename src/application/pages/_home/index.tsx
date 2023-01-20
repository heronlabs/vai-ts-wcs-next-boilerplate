import {translate, useTranslate} from 'react-polyglot';

import * as S from './style';

const Home = () => {
  const t = useTranslate();

  return (
    <S.Content>
      <div className="min-h-screen flex flex-col items-center justify-center text-2xl">
        <S.ProjectName>{t('welcome.title')}</S.ProjectName>
      </div>
    </S.Content>
  );
};

export default translate()(Home);
