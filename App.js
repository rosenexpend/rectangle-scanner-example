import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DocumentScannerScreen from './components/DocumentScanner';
import RectangleScannerScreen from './components/RectangleScanner';
import HomeScreen from './components/Home';
import ImageCropper from './components/ImageCropper';
import ImageEditor from './components/ImageEditor';
import ImageViewer from './components/ImageViewer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOption={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Document Scanner') {
              iconName = focused ? 'ios-camera' : 'ios-reverse-camera';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Document Scanner" component={DocumentScannerScreen} />
        <Tab.Screen
          name="Rectangle Scanner"
          component={RectangleScannerScreen}
        />
        <Tab.Screen name="Image Cropper" component={ImageCropper} />
        <Tab.Screen name="Image Viewer" component={ImageViewer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
