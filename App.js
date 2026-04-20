import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { House, Plus, Settings2, User } from 'lucide-react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { StyleSheet } from 'react-native';



const Stack =createNativeStackNavigator();
const Tab=createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        tabBarActiveBackgroundColor: "#f7a62e",
       }}>
      
      <Tab.Screen
        name="Home"
        component={ HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => <House size={size} color={color} />,headerShown:  false,
        }}
      />

      <Tab.Screen
        name="AddExpense"
        component={ AddExpenseScreen}
        options={{
          tabBarIcon: ({ size, color }) => <Plus size={size} color={color} />,headerShown:  false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />,headerShown:  false,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={ SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => <Settings2 size={size} color={color} />,headerShown:  false,
        }}
      />
     
    </Tab.Navigator>
  );
}



export default function App()  {
  return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false,}}/>
          <Stack.Screen name="AddExpense" component={HomeTabs} options={{headerShown:  false,}}/>
          <Stack.Screen name="Profile" component={HomeTabs} options={{headerShown:  false,}}/>
          <Stack.Screen name="Settings" component={HomeTabs} options={{headerShown:   false,}}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  
});
