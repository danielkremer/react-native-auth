import { Amplify } from 'aws-amplify';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import config from './src/aws-exports';
import AuthProvider from './src/components/global/AuthProvider';
import Navigation from './src/navigation/Navigation';
import { persistor, store } from './src/store/store';

Amplify.configure(config);

const App = () => {
  // Auth.signOut();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc',
    borderRadius: 10,
  },
});

export default App;
