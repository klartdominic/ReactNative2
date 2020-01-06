import
    React,
    { Component } 
from "react";

import Icon from 'react-native-vector-icons/FontAwesome';

import
    {
        SafeAreaView,
        ScrollView,
        StyleSheet,
        Text,
        View,
        StatusBar,
        TextInput,
    }
from 'react-native';

import Facebook from './facebook.js'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {text: ''};
    }
    render(){
        return(
            <SafeAreaView>
            <ScrollView>
                <View style = {style.container}>
                    <TextInput 
                        style={style.textinput}
                        inlineImageLeft = "search_icon"
                        placeholder="Username/Email" 
                        // onChangeText={(text) => this.setState({text})}
                    >
                    </TextInput>
                    <TextInput 
                        style = {style.textinput}
                        inlineImageLeft = 'lock_icon'
                        placeholder = "Password"
                    >
                    </TextInput>
                </View>
                <View style = {style.container}>
                    <Facebook/>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texts:{
        textAlign: 'right',
    },
    textinput:{
        width: 300,
        textAlign: 'left',
        borderWidth: 1,
    },
})