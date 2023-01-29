import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenAccount} from '../screens/ScreenAccount';
import {ScreenExplore} from '../screens/ScreenExplore';
import {ScreenMyCourse} from '../screens/ScreenMyCourse';
import {ScreenWishList} from '../screens/ScreenWishlist';
import Icon from 'react-native-vector-icons/Ionicons';
export const TabBottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Explore"
        component={ScreenExplore}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string;
            if (focused) {
              iconName = 'compass-sharp';
            } else {
              iconName = 'compass-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#05a8b7',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="MyCourse"
        component={ScreenMyCourse}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string;
            if (focused) {
              iconName = 'play-circle-sharp';
            } else {
              iconName = 'play-circle-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#05a8b7',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="WishList"
        component={ScreenWishList}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string;
            if (focused) {
              iconName = 'heart-sharp';
            } else {
              iconName = 'heart-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#05a8b7',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={ScreenAccount}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string;
            if (focused) {
              iconName = 'person-sharp';
            } else {
              iconName = 'person-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#05a8b7',
          tabBarInactiveTintColor: 'grey',
        }}
      />
    </Tab.Navigator>
  );
};
