import { StyleSheet, View, Text, Pressable } from 'react-native';
const DL = "GoalItem.js"

function GoalItem(props){
    //console.log(DL + "  > goalItem");
    return (
      <View style={styles.goalItem}>
        <Pressable
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.index+1}{". "}{props.text}</Text>
        </Pressable>
      </View>
    );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 7,
    borderRadius: 7,
    borderWidth: 5,
    borderColor: 'blue',
  },
  goalText: {
    padding: 7
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: 'red',
  }
});