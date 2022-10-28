import React, { FunctionComponent } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

interface IScreen {
  children: React.ReactNode;
}

const Screen: FunctionComponent<IScreen> = ({ children }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.containerStyle}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  containerStyle: {
    padding: 16,
  },
});
