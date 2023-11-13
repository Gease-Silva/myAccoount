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
            <View>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.imagem}
                />
            </View>
            <View >
                <View style={{ marginBottom: '100%', alignItems: 'center' }}>
                    <Txt
                        type='titulo'
                        texto='Sucesso' />

                    <Txt
                        type='subTitulo'
                        texto='Foi enviado um e-mail para redefinir a sua senha' />

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