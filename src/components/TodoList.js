import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoList = ({ todos, toggleTodo }) => (
    <View style={{ padding: 20 }}>
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text style={{
                    fontSize: 24,
                    textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}>{todo.text}</Text>
            </TouchableOpacity>
        )}
    </View>
)

//Developed by Soban Arshad
  //sobanarshad85@gmail.com
  //+92 303 4645 060
  //https://www.facebook.com/sobanarshad85
  //https://www.twitter.com/sobanarshad85
  //https://www.github.com/sobanarshad85
  //https://www.linkedin.com/in/sobanarshad85

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});