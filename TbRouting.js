import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './TbFrequentUsage/TbRefNavigation';
import DzHome from './TbMainScreens/TbHome';
import DzSP from './TbMainScreens/TbSP';
import DzCart from './TbMainScreens/TbCart';
import DzFav from './TbMainScreens/TbFav';
import DzContact from './TbMainScreens/TbContact';
import DzConfirmOrder from './TbMainScreens/TbConfirmOrder';
import DzSearch from './TbMainScreens/TbSearch';
const Stack = createStackNavigator();

function Routes(props) {
  return (
    <NavigationContainer
      ref={(ref) => {
        Navigator.InitializeRefNavigation(ref);
      }}>
      <Stack.Navigator
        initialRouteName="DzHome"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="DzHome" component={DzHome} />
        <Stack.Screen name="DzSP" component={DzSP} />
        <Stack.Screen name="DzFav" component={DzFav} />
        <Stack.Screen name="DzCart" component={DzCart} />
        <Stack.Screen name="DzContact" component={DzContact} />
        <Stack.Screen name="DzConfirmOrder" component={DzConfirmOrder} />
        <Stack.Screen name="DzSearch" component={DzSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
