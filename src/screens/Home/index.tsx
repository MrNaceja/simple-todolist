import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import Task, { ModelTask } from "../../components/Task";
import { useState } from "react";

export default function Home() {
    const [tasks, setTasks] = useState<ModelTask[]>([])
    const [taskName, setTaskName] = useState('')

    function addTask(taskToAdd: ModelTask) {
        setTasks(prevTasks => [...prevTasks, taskToAdd])
        setTaskName('')
        Alert.alert('Sucesso!', 'Tarefa adicionada')
    }

    function removeTask(taskToRemove: ModelTask) {
        Alert.alert('Deletar Tarefa', 'Você tem certeza desta ação?', [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskToRemove.id))
                    Alert.alert('Sucesso!', `Tarefa deletada`)
                }
            },
            {
                text: 'Não',
            }
        ])
    }

    function onPressAddTask() {
        const newId = (tasks.length > 0 ? tasks[tasks.length - 1].id : 0) + 1;
        const newTask : ModelTask = {id: newId, name: taskName}
        addTask(newTask)
    }

    const buttonAddTaskIsDisabled = taskName.length == 0;
    
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
                    value={taskName}
                    onChangeText={setTaskName}
                />
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={onPressAddTask} 
                    disabled={buttonAddTaskIsDisabled}
                >
                    <Feather name="plus-circle" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
            <FlatList 
                data={tasks}
                showsVerticalScrollIndicator={false}
                contentContainerStyle = {tasks.length > 0 ? styles.tasksList : styles.tasksListEmpty}
                keyExtractor={(task) => task.id.toString()}
                renderItem ={({item: task}) => (
                    <Task modelTask={task} remove={removeTask}/>
                )}
                ListEmptyComponent={(
                    <Text style={styles.noTasks}>Você ainda não possui tarefas :(</Text>
                )}
            />
        </View>
    )
}