import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, CheckBox } from 'react-native';
import { stylesGeral } from '../styleGeral.js';
import { styles } from './styles.js';
import { useState } from 'react';
import Button from '../componentes/button';
import TxtInput from '../componentes/input';
import text from '../componentes/text';

export default function app() {
    return (
        <View style={stylesGeral.container}>
            <View>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.imagem}
                />
                <Txt 
                type = 'titulo'
                texto = 'Sucesso'/>
            </View>
        </View>
    );
}