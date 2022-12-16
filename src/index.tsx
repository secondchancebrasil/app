import React from 'react';

import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import Routes from './routes';
import {AppContext} from './contexts';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppContext>
        <Routes />
      </AppContext>
    </ApplicationProvider>
  );
};

export default App;
