import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';
function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>todo app</Text>
    </View>
  );
}
export default Header;
