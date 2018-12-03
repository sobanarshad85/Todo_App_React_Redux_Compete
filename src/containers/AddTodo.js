/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
class AddTodo extends Component<Props> {
    state = {
        text: ''
    }

    addTodo = (text) => {
        //redux store
        this.props.dispatch({ type: 'ADD_TODO', text })
        this.setState({ text: '' })
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Eg. Create New Video"
                    style={{
                        borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea',
                        height: 50, flex: 1, padding: 5,
                    }}
                />

                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={{
                        height: 50, backgroundColor: '#eaeaea',
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text>icon</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

export default connect()(AddTodo)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
