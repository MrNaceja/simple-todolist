import { Text, TouchableHighlight, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";

interface PropsTask {
    taskName: string
}

export default function Task({taskName} : PropsTask) {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskName}>{taskName}</Text>
            <TouchableHighlight style={styles.taskButtonDelete}>
                <Feather name="trash-2" size={18} color="#fff" />
            </TouchableHighlight>
        </View>
    )
}