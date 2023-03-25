import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import Task, { ModelTask } from "../../components/Task";

export default function Home() {
    const tasks : ModelTask[] = [
        {id: 1, name: 'Eduardo'},
        {id: 2, name: 'Narcizo'},
        {id: 3, name: 'Neto'},
        {id: 4, name: 'Toriani'},
        {id: 5, name: 'Luana'},
        {id: 6, name: 'Silva'},
        {id: 7, name: 'Karsten'},
        {id: 8, name: 'React'},
        {id: 9, name: 'Native'}
    ]
    
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
            <FlatList 
                data={tasks}
                showsVerticalScrollIndicator={false}
                contentContainerStyle ={styles.tasksList}
                keyExtractor={task => task.id.toString()}
                renderItem ={({item: task}) => (
                    <Task taskName={task.name}/>
                )}
            />
        </View>
    )
}