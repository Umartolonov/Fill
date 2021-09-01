import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ScreenSerial from "./ScreenSerial";
import MoreDetails from "./MoreDetails";

const Stack = createStackNavigator();

class Serial extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={`ScreenSerial`} component={ScreenSerial} options={{title: `Сериалы`}}/>
          <Stack.Screen name={`MoreDetails`} component={MoreDetails}/>
        </Stack.Navigator>
      </>
    );
  }
}
export default Serial;
