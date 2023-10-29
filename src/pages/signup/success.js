import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, CheckBox } from 'react-native';
import { stylesGeral } from '../styleGeral.js';
import { styles } from './styles.js';
import { useState } from 'react';
import Button from '../componentes/button';
import TxtInput from '../componentes/input';
import Txt from '../componentes/text';

export default function app({ navigation }) {

    function openLogin() {
        navigation.navigate('Login');
    }

    return (
        <View style={stylesGeral.container}>
        
            <View >
                <View style={{ marginBottom: '100%', alignItems: 'center' }}>
                    <Txt
                        type='titulo'
                        texto='Sucesso' />

                    <Txt
                        type='subTitulo'
                        texto='Sua conta foi cadastrada com sucesso!' />
                    <Txt
                        type='subTitulo'
                        texto='Volte a tela inicial para terminar o seu login' />

                </View>
                <View style={{ alignItems: 'center' }}>
                    <Button
                        onPress={openLogin}
                        text='Voltar a tela inicial'
                        type='primary' />
                </View>
            </View>
        </View>
    );
}