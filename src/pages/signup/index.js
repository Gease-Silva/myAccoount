import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, CheckBox } from 'react-native';
import { stylesGeral } from '../styleGeral.js';
import { useState } from 'react';

export default function app() {
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
                <View style={stylesGeral.esquerda}>
                    <Text style={[stylesGeral.texto]}>Digite uma senha:</Text>
                    <TextInput
                        style={stylesGeral.inputLogin}
                        placeholder='Senha'
                        keyboardType="visible-password"
                    />
                </View>
                <View style={stylesGeral.esquerda}>
                    <Text style={[stylesGeral.texto]}>Confirme sua senha:</Text>
                    <TextInput
                        style={stylesGeral.inputLogin}
                        placeholder='Senha'
                        keyboardType="visible-password"
                    />
                </View>
                <View>
                    <TouchableOpacity style={[stylesGeral.btn , stylesGeral.center]}>
                        <Text>
                            Cadastrar-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}