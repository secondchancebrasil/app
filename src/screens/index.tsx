import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// import { Container } from './styles';

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Index;