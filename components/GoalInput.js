import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
  
function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState("");
    const DL = "GoalInput.js";

    function goalInputHandler(enteredText) {
      setEnteredGoalText(enteredText);
      //console.log(DL + "  > goalInputHandler");
    } 
    function addGoalHandler(){
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
      //console.log(DL + "  > AddGoalHandler");
    } 

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require("../assets/image/goal.png")} />
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} />
            </View>
          </View>
        </View>
      </Modal>
    );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "95%",
    padding: 15,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    height: 100,
    width: 100
  }
});