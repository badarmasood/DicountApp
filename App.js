import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [getText, setText] = React.useState(0);
  const [getDisText, setDisText] = React.useState(0);

  const [Save, setSave] = React.useState(0);
  const [FinalPrice, setFinalPrice] = React.useState(0);

  let Discount = () => {
    setSave((getText * getDisText) / 100);
  };

  let SaveAmount = () => {
    setFinalPrice(getText - Save);
  };

  return (
    <View style={styles.container}>
      <View style={styles.playersInfo}>
        <Text style={styles.playersText}>DISCOUNT APP</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(getText) => setText(getText)}
        placeholder="Enter the Price"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={(getDisText) => setDisText(getDisText)}
        placeholder="Discount %"
        keyboardType="numeric"
      />

      <Text style={styles.text}>You Save : {Save} </Text>

      <Text style={styles.text}>Final Price : {FinalPrice} </Text>

      <TouchableOpacity style={styles.button} onPress={Discount}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Apply Discount
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={SaveAmount}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Final Price
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: "2%",
  },
  input: {
    height: 50,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 2,
    padding: 10,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#51Af75",
    padding: 10,
    justifyContent: "center",
    height: 50,
    borderWidth: 1,
  },
  playersInfo: {
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "10%",
    // paddingTop: "5%",
    // paddingBottom: "5%",

    // marginBottom: "1%",
  },
  playersText: {
    fontSize: 24,
    fontWeight: `bold`,
    color: "white",
  },
  text: {
    marginTop: 5,
    padding: 15,
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
