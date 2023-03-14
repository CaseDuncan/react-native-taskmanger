import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

const AddTasks = ({createTask}) => {

    const [data, setData] = useState('')
    const handleChange = (value) => {
        setData(value)
    }

    return (
        <View>
            <Text style={styles.text}>Add New Task</Text>
            <TextInput style={styles.input}
                placeholder='new task...'
                onChangeText={handleChange}
            />

            <Button onPress={()=>createTask(data)} title={'Submit' } color='coral' />
        </View>
    )
}

export default AddTasks


const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight:'bold'
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})