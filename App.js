import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from "./Home";
import Film from "./Film";
import Serial from "./Serial";
import Genere from "./Genere";

const Tab = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <>
        <PaperProvider>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name={`Home`} component={Home} options={{title: 'Главная', tabBarIcon: props => <Icon name={'home'} {...props}/>, headerShown: false, backgroundColor: `blue`}}/>
              <Tab.Screen name={`Film`} component={Film} options={{title: 'Фильмы', tabBarIcon: props => <Icon name={'movie'} {...props}/>, headerShown: false}}/>
              <Tab.Screen name={`Serial`} component={Serial} options={{title: 'Сериалы', tabBarIcon: props => <Icon name={'subscriptions'} {...props}/>, headerShown: false}}/>
              <Tab.Screen name={`Genere`} component={Genere} options={{title: 'Сериалы', tabBarIcon: props => <Icon name={'format-list-bulleted'} {...props}/>, headerShown: false}}/>
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </>
    );
  }
}
export default App;
