import React, { Component } from 'react';
import {
    AppRegistry, Platform, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity
} from 'react-native';


export default class Component2 extends Component {

    onPress() {

    }
    onPress2() {

    }


    render() {

        return (
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}> Hello from component 2  </Text>
                </View>
                <View style={styles.container}>
                    <TouchableHighlight
                        onPress={this.onPress}
                        style={styles.v1}
                        underlayColor="blue"
                    >
                        <View>
                            <Text> View 1 </Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableOpacity
                        style={styles.v2}
                        onPress={this.onPress2}
                    >
                        <View >
                            <Text> View 2 </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.v3}>
                        <Text style={styles.myText}> View 3 </Text>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    myText: {
        color: 'white'
    },
    container: {
        flexDirection: 'row',
        height: 100
    },
    v1: {
        flex: 1,
        backgroundColor: 'red'
    },
    v2: {
        flex: 1,
        backgroundColor: 'green'
    },
    v3: {
        flex: 1,
        backgroundColor: 'black'
    },

});

AppRegistry.registerComponent('Component2', () => Component2);