import {useRouter} from 'next/router';
import {useEffect} from 'react';

import Loader from '../application/components/loader';

export default function Custom404Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  });

  return (
    <Loader>
      <></>
    </Loader>
  );
}
