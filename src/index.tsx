import React from 'react';
import {StatusBar} from 'react-native';

import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
// import {useFonts} from 'expo-font';

import Routes from './routes';
import {AppContext} from './contexts';

const App = () => {
  // const [isFontsLoaded] = useFonts({
  //   'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
  // });

  // if (!isFontsLoaded) {
  //   return null;
  // }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <AppContext>
        <Routes />
      </AppContext>
    </ApplicationProvider>
  );
};

export default App;
