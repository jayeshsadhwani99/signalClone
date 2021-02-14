import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                navigation.replace('Home');
            }
        });

        return unsubscribe;
    }, [])

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Image source={{
                uri: 'https://img.icons8.com/color/452/signal-app.png',
            }}
            style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer} >
                <Input
                 placeholder="Email" 
                 autoFocus 
                 type="email" 
                 value={email} 
                 onChangeText={ (text) => setEmail(text) } 
                />
                <Input 
                placeholder="Password" 
                type="password" 
                value={password}
                secureTextEntry 
                onChangeText={ (text) => setPassword(text) }
                />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title='Login' />
            <Button 
            containerStyle={styles.button} 
            onPress={()=> navigation.navigate('Register')} 
            type="outline" 
            title='Register' 
            />
            <View style={{height: 100}} />
        </KeyboardAvoidingView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})