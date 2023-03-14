import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';
import AddTasks from './components/AddTasks';
export default function App() {

  const [tasks, setTasks] = useState([
    { task: "Buy Coffee", key: '1' },
    { task: "Finish React Project Module", key: '2' },
    { task: "Go to the gym", key: '3' }
  ])

  // create new task

  const createTask = (task) => {

    if (task.length > 3) {
      setTasks((previousTasks) => {
        return [
          { task: task, key: Math.random().toString() },
          ...previousTasks
        ]
      })
    } else {
      Alert.alert("task must contain more than three characters")
    }

  }

  // delete a task
  const deleteTask = (key) => {
    setTasks((previousTasks => {
      return previousTasks.filter(task => task.key != key)
    }))
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* form */}
          <AddTasks createTask={createTask} />
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <Task item={item} deleteTask={deleteTask} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  }
});
