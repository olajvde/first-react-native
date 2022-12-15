import { StatusBar } from "expo-status-bar";
import { StyleSheet,   View} from "react-native";
import CarItem from "./components/CarItem";
import CarsList from "./components/CarsList";
import Header from "./components/Header";




export default function App() {
  return (
    <View style={styles.container}>

<Header />
    <CarsList /> 
{/* 
      <CarItem
        name={"Model 3"}
        tagline={"Order Online For"}
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/Model3.jpeg")}
      /> */}

 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  //CONTINUE FROM 1:14:48
});
