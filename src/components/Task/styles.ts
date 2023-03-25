import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#161a1d',
        paddingLeft: 10,
        borderRadius:5,
        height: 60,
        flexDirection: 'row',
        alignItems:"center",
        overflow: 'hidden',
    },
    taskName: {
        color: '#e6e6e6b4',
        flex: 1,
    },
    taskButtonDelete: {
        backgroundColor: '#62010c80',
        alignItems: 'center',
        height: '100%',
        width: 60,
        justifyContent: 'center',
    },
    taskButtonDeleteText: {
        color:'#fff',
        fontSize: 26
    }
})