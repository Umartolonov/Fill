import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenHomeTV from "./ScreenHomeTV";
import ScreenHomeCinema from "./ScreenHomeCinema";

const Tab = createMaterialTopTabNavigator();
class  HomeTVandHomeCinemal extends React.Component {
  render() {
    return (
      <>
        <Tab.Navigator>
          <Tab.Screen name={`ScreenHomeTV`} component={ScreenHomeTV}/>
          <Tab.Screen name={`ScreenHomeCinema`} component={ScreenHomeCinema}/>
        </Tab.Navigator>
      </>
    );
  }
}
export default HomeTVandHomeCinemal;
