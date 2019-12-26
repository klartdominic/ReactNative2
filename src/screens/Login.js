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




export default class Login extends Component{

    
    loginWithFacebook(){
        alert("tesing");
    };

    render(){
        const facebook = (
            <Icon.Button 
                name = "facebook" 
                backgroundColor = "#3b5998"
                onPress={this.loginWithFacebook}>
                <Text style={style.Icons}>
                    Login with Facebook
                </Text>
            </Icon.Button>
        );
        return(

            <View style = {style.container}>
                {facebook}
            </View>
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
        alignContent: 'center',
        justifyContent: 'center'
    },
    Icons: {
        padding: 5,
  	    borderRadius: 5,
    }
})