import { Text, TouchableHighlight, View, Alert } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";

interface PropsTask {
    modelTask: ModelTask,
    remove: (taskToRemove : ModelTask) => void
}

export interface ModelTask {
    id: number,
    name: string
}

export default function Task({ modelTask, remove } : PropsTask) {

    function onPressDelete() {
        remove(modelTask)
    }
    
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskName}>{modelTask.name}</Text>
            <TouchableHighlight style={styles.taskButtonDelete} onPress={onPressDelete}>
                <Feather name="trash-2" size={18} color="#cb0b0a" />
            </TouchableHighlight>
        </View>
    )
}