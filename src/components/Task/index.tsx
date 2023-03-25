import { Text, TouchableHighlight, View, Alert } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";

interface PropsTask {
    taskName: string,
}

export type ModelTask = {
    id: number,
    name: string
}

export default function Task({taskName} : PropsTask) {

    function onPressDelete() {
        Alert.alert('Deletar Tarefa', 'Você tem certeza desta ação?', [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Sucesso!', `Tarefa ${taskName} deletada`)
            },
            {
                text: 'Não',
            }
        ])
    }
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskName}>{taskName}</Text>
            <TouchableHighlight style={styles.taskButtonDelete} onPress={onPressDelete}>
                <Feather name="trash-2" size={18} color="#cb0b0a" />
            </TouchableHighlight>
        </View>
    )
}