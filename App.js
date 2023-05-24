import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  View, 
  FlatList,
  Button 
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [p1Goals, setP1Goals] = useState([]);
  const DL = "App.js"
  
  function startAddGoalHandler(){
    setModalIsVisible(true);
    //console.log(DL + "  > startAddGoalHandler");
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
    //console.log(DL + "  > endAddGoalHandler");
  }
  function addGoalHandler(enteredGoalText) {
    //console.log(DL + "  > addGoalHandler start");
    setP1Goals((currentP1Goals) => [
      ...currentP1Goals, 
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      }
    ]);
    endAddGoalHandler();
    //console.log(DL + "  > addGoalHandler end");
  }
  function deleteGoalHandler(id){
    //console.log(DL + "  > deleteGoalHandler");
    setP1Goals((currentP1Goals) => {
      return currentP1Goals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="dark" ></StatusBar>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="blue"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={p1Goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  index ={itemData.index}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 4,
  },
});