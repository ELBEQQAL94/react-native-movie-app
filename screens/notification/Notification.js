// Libs
import React from 'react';

// React Native Components
import {View, Text, StyleSheet} from 'react-native';

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Notification;
