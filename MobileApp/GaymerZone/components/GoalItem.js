import {StyleSheet, Text, View, Pressable} from 'react-native'

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{color: '#dddddd'}}
        onPress={props.onDeleteGoal.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalTextItem}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5E0ACC'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalTextItem:
  {
    color: 'white',
    padding: 8,
  }
});