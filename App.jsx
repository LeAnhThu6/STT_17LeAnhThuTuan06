const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { A, B } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="A"
        >
          <Stack.Screen name="A" component={A} />
          <Stack.Screen name="B" component={B} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
