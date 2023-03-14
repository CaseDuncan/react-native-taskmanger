import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Today's Tasks</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:"#fff"
    }
})