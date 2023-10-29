import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, CheckBox } from 'react-native';
import { stylesGeral } from '../styleGeral.js';
import { styles } from './styles.js';
import { useState } from 'react';
import Button from '../componentes/button';
import TxtInput from '../componentes/input';
import Txt from '../componentes/text';

export default function app({ navigation }) {

    function openSuccess() {
        navigation.navigate('SuccessRecover');
      }

    return (
        <View style={stylesGeral.container}>
            <View>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.imagem}
                />
                <Text style={[stylesGeral.texto, stylesGeral.titulo]}>
                    Esqueci minha senha:
                </Text>
            </View>
            <View>
                <View style={stylesGeral.esquerda}>
                    <Text style={[stylesGeral.texto]}>Digite o seu nome:</Text>
                    <TxtInput
                        type="primary"
                        text='Nome'
                    />
                </View>
                <View style={stylesGeral.esquerda}>
                    <Text style={[stylesGeral.texto]}>Digite o seu CPF:</Text>
                    <TxtInput 
                        type="primary"
                        text='CPF'
                        keyboardType="numeric"
                    />
                </View>
                <View style={stylesGeral.esquerda}>
                    <Text style={[stylesGeral.texto]}>Digite o seu E-mail:</Text>
                    <TxtInput
                        type="primary"
                        text='E-mail'
                    />
                </View>
                <View style={{alignItems: 'center'}}>
                    <Button
                    onPress={openSuccess}
                        text="Enviar"
                        type="primary" />
                </View>
            </View>
        </View>
    );
}