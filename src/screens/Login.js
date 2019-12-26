import
    React,
    { Component } 
from "react";

import
    {
        ScrollView,
        StyleSheet,
        Text,
        View
    }
from 'react-native';

import
  Icon
from 'react-native-vector-icons/FontAwesome';

const facebook = (
    <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
    >
        Login with Facebook
    </Icon.Button>
);

export default class Login extends Component{
    render(){
        return(
            <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={alert("testing")}
                style = {style.Icons}
            >
                Login with Facebook
            </Icon.Button>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    Icons: {
        flex: 1,
        alignSelf: 'center',

    }
})