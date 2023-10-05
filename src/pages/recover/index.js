import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, CheckBox } from 'react-native';
import { stylesGeral } from '../styleGeral.js';
import { styles } from './styles.js';
import { useState } from 'react';

export default function app() {
    return (
        <View style={stylesGeral.container}>
            <View>
                <Image
                    source={require('./imgs/logo.png')}
                    style={styles.imagem}
                />
                <Text style={[stylesGeral.texto, stylesGeral.titulo]}>
                    Esqueci minha senha:
                </Text>
            </View>
            <View>
                <View style={stylesGeral.esquerda}>
                    <Text style={[stylesGeral.texto]}>Digite o seu nome:</Text>
                    <TextInput
                        style={stylesGeral.inputLogin}
                        placeholder='Nome'
                    />
                </View>
                <View style={stylesGeral.esquerda}>
                    <Text style={[stylesGeral.texto]}>Digite o seu CPF:</Text>
                    <TextInput
                        style={stylesGeral.inputLogin}
                        placeholder='CPF'
                        keyboardType="numeric"
                    />
                </View>
                <View style={stylesGeral.esquerda}>
                    <Text style={[stylesGeral.texto]}>Digite o seu E-mail:</Text>
                    <TextInput
                        style={stylesGeral.inputLogin}
                        placeholder='E-mail'
                    />
                </View>
                <View>
                    <TouchableOpacity style={[stylesGeral.btn, stylesGeral.center]}>
                        <Text>
                            Enviar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}