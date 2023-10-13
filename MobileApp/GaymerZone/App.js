import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';

import { LoginScreen } from './app/screens/login/login.screen';
import { theme } from './App.style';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler()
  {
    setModalIsVisible(true);
  }
  function addGoalHandler(enteredGoalText)
  {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  }
  function deleteGoalHandler(id)
  {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    console.log('delete');
  }

  return (
    <PaperProvider theme={theme}>
      <LoginScreen/>
    </PaperProvider>
  );

  return (
    <View style={styles.appContainer}>
      <Button title='Add new goal' color='#5E0ACC' onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          keyExtractor={(item, index) => {return item.id;}}
          renderItem={(itemData) => {return (<GoalItem 
                                                text={itemData.item.text}
                                                id={itemData.item.id}
                                                onDeleteGoal={deleteGoalHandler}/>);}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 40
  }
})

const styles2 = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  goalsContainer: {
    flex: 4
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    marginRight: 8,
    padding: 8
  }
});
