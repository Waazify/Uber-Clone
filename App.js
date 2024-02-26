import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <View style={styles.container}> */}
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={({
              headerShown: false
              })}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={({
                headerShown: false
              })}
            />
            
            {/* <HomeScreen/> */}
          </Stack.Navigator>
        </SafeAreaProvider>
        <StatusBar style="auto" />
      {/* </View> */}
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
