import {translate, useTranslate} from 'react-polyglot';
import {useSelector} from 'react-redux';

import {RootState} from '../../../infrastructure/redux/store';
import * as S from './style';

const Home = () => {
  const t = useTranslate();

  const {company} = useSelector((state: RootState) => state.locale);

  return (
    <S.Content>
      <div className="min-h-screen flex flex-col items-center justify-center text-2xl">
        <S.ProjectName>
          {`${t('languages.portuguese')} - ${company.name}`}
        </S.ProjectName>
      </div>
    </S.Content>
  );
};

export default translate()(Home);
