import React from 'react';
import HomeTVandHomeCinemal from "./HomeTVandHomeCinemal";
import MoreDetails from "./MoreDetails";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

class  Home extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={`HomeTVandHomeCinemal`} component={HomeTVandHomeCinemal} options={{title: `Главная`}}/>
          <Stack.Screen name={`MoreDetails`} component={MoreDetails}/>
        </Stack.Navigator>
      </>
    );
  }
}
export default Home;
