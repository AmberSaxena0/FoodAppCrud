import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Navigator from './src/Navigator';
import {Provider} from 'react-redux';

import store from './src/stores/store';
import {COLORS} from './src/utils/constants';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
