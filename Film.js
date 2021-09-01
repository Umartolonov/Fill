import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ScreenFilm from "./ScreenFilm";
import MoreDetails from "./MoreDetails";

const Stack = createStackNavigator();

class FilmScreen extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={`ScreenFilm`} component={ScreenFilm} options={{title: `Фильмы`}}/>
          <Stack.Screen name={`MoreDetails`} component={MoreDetails} options={{headerShown: false,}}/>
        </Stack.Navigator>
      </>
    );
  }
}

export default FilmScreen;
