import React, { FunctionComponent } from 'react';

import HeaderWrapper from 'components/common/HeaderWrapper';
import Banner from 'components/Banner';

const Home: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <Banner />
    </HeaderWrapper>
  );
};

export default Home;
