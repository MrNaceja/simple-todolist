import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Task from '../../components/Task/index';
import { Feather } from "@expo/vector-icons";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Lista de Tarefas
                </Text>
                <Text style={styles.titleDesc}>
                    Simples lista de tarefas do dia à dia
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder={'digite uma tarefa'}
                    placeholderTextColor='#5c6b73'
                />
                <TouchableOpacity style={styles.button}>
                    <Feather name="plus-circle" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.tasksList}>
                <Task taskName="teste"/>
                <Task taskName="teste"/>
                <Task taskName="teste"/>
            </View>
        </View>
    )
}