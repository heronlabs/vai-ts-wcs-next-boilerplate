import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Home from '../application/pages/home';
import {MenuNames} from '../core/enums/menu-names';
import {goToPage} from '../infrastructure/redux/slices/menu-slice';

export default function IndexPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(goToPage(MenuNames.HOME));
  });

  return <Home />;
}
