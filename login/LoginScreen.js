import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import SecondScreen from './SecondScreen'
import LogoIoasys from '../assets/logo-ioasys1.png';
import styles from '../styles/stylesSheets';

const LoginScreen = () => {
    const navigation = useNavigation(); // Obtenha o objeto de navegação

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const goSecondScreen = () => {
        navigation.navigate('SecondScreen'); // Navegue para a próxima tela
    };

    return (
        <View style={styles.container}>
            <Image source={LogoIoasys} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Seja bem vind@!</Text>
                <Text style={styles.subtitle}>Calculadora IMC</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="senha"
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button}>
                <Button title="ENTRAR" onPress={goSecondScreen} style={styles.buttonText} />
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;