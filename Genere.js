import React from 'react';
import GenreSerialandGenreFilm from "./GenreSerialandGenreFilm"
import MoreDetails from "./MoreDetails";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenGenreFilm2 from "./ScreenGenreFilm2";

const Stack = createStackNavigator();
class  Genere extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={`GenreSerialandGenreFilm`} component={GenreSerialandGenreFilm} options={{title: `Жанры`}}/>
          <Stack.Screen name={`MoreDetails`} component={MoreDetails}/>
          <Stack.Screen name={`ScreenGenreFilm2`} component={ScreenGenreFilm2}/>
        </Stack.Navigator>
      </>
    );
  }
}
export default Genere;
