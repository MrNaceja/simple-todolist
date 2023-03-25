import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b090a',
        padding:20,
        gap:15
    },
    header: {
        
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight:'900'        
    },
    titleDesc: {
        color: '#e6e6e6b4',
        fontSize: 18   
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 10
    },
    input: {
        flex:1,
        backgroundColor: '#161a1d',
        borderRadius:5,
        padding:10,
        color: '#e6e6e6b4'
    },
    button: {
        backgroundColor: '#0096c7',
        height: 60,
        width:60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5
    },
    buttonText: {
        color: '#fff',
        fontSize: 26
    },
    tasksList: {
        gap: 5,
    }
})