import React from 'react';

import Routes from './routes';
import {AppContext} from './contexts';

const App = () => {
  return (
    <AppContext>
      <Routes />
    </AppContext>
  );
};

export default App;
