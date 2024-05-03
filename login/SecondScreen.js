import React, { useState } from 'react';
import { Text, Image, View, TextInput, Button } from 'react-native';
import UserProfile from '../assets/logo.png';
import styles from '../styles/stylesSheets';

const SecondScreen = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

    const calcIMC = () => {
        const pesoKg = parseFloat(peso) * 1000;
        const alturaM = parseFloat(altura) / 100;
        const imc = pesoKg / (alturaM * alturaM);

        setImc(imc.toFixed(2)); 
    };

  return (
    <View style={styles.container}>
      <Image source={UserProfile} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcIMC} />
            {imc !== null && (
                <Text style={styles.calculo}>Seu IMC é: {imc}</Text>
            )}
    </View>
  );
};


export default SecondScreen;
