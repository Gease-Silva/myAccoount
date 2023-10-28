import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, CheckBox } from 'react-native';
import { stylesGeral } from '../styleGeral.js';
import { useState } from 'react';
import Button from '../componentes/button';
import TxtInput from '../componentes/input';

export default function app() {

    function openLogin() {
        navigation.navigate('Login');
    }

    return (
        <View style={stylesGeral.container}>
            <View>
                <Text style={[stylesGeral.texto, stylesGeral.titulo]}>
                    Cadastrar-se
                </Text>
                <Text style={stylesGeral.texto}>
                    Com o seu e-mail e senha.
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
                <View style={stylesGeral.esquerda}>
                    <Text style={[stylesGeral.texto]}>Digite uma senha:</Text>
                    <TxtInput
                        type="primary"
                        text='Senha'
                        keyboardType="visible-password"
                    />
                </View>
                <View style={stylesGeral.esquerda}>
                    <Text style={[stylesGeral.texto]}>Confirme sua senha:</Text>
                    <TxtInput
                        type="primary"
                        text='Senha'
                        keyboardType="visible-password"
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Button
                        onPress={openLogin}
                        text="Cadastrar-se"
                        type="primary" />
                </View>
            </View>
        </View>
    );
}
