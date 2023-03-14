import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import React from 'react'

const Task = ({item, deleteTask}) => {
  return (
      <TouchableOpacity onPress={()=>deleteTask(item.key)}>
          <Text style={styles.item}>{ item.task }</Text>
    </TouchableOpacity>
  )
}

export default Task

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
    }
})