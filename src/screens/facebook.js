import
    React,
    { Component } 
from "react";

import Icon from 'react-native-vector-icons/FontAwesome';

import
    {
        ScrollView,
        StyleSheet,
        Text,
        View
    }
from 'react-native';

export default class Facebook extends Component{
    loginWithFacebook(){
        alert("tesing");
    };
    render(){
        return(
            <Icon.Button 
                name = "facebook" 
                backgroundColor = "#3b5998"
                onPress={this.loginWithFacebook}>
                <Text style = {style.text}>
                    Login with Facebook
                </Text>
            </Icon.Button>
        );
    }
}

// export default class Facebook extends Component{
//     loginWithFacebook(){
//         alert("tesing");
//     };
//     render(){
//         return(
//             <View style = {style.container}>
//                 {facebook}
//             </View>
//         );
//     }
// }

// const facebook = (
//     <Icon.Button 
//         name = "facebook" 
//         backgroundColor = "#3b5998"
//         onPress={this.loginWithFacebook}>
//         <Text>
//             Login with Facebook
//         </Text>
//     </Icon.Button>
// );

const style = StyleSheet.create({
    Icons: {
        padding: 5,
  	    borderRadius: 5,
        color: 'white',
    },
    text: {
        color: 'white',
        
    },
})