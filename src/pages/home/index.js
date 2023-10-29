import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, CheckBox, Touchable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { stylesGeral } from '../styleGeral.js';
import { useState } from 'react';
import Button from '../componentes/button';
import TxtInput from '../componentes/input';
import Txt from '../componentes/text';

export default function login({ navigation }) {

    return (

        <View style={styles.container}>
            <LinearGradient
                colors={['#001E36', '#001E36', '#001E36', '#fff']}
                style={styles.background} />

            <View style={{ marginEnd: 'auto' }}>
                <Txt
                    type='titulo'
                    texto='Olá, Usuário'
                />
            </View>

            <View style={styles.carteira}>
                <Text style={{ marginBottom: 10, }}>
                    Carteira
                </Text>
                <View style={styles.reais} >
                    <Text>Reais</Text>
                    <Text>R$5.000,00</Text>
                </View>
            </View>
            
            <View style={styles.opcoes}>
                <View style={{ flexDirection: 'row', width: '70%' }}>
                    <TouchableOpacity style={styles.despesas}><Text>Despesas</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.renda}><Text>Renda</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <View style={styles.diaMes}>
                    <Text style={{ color: "#fff" }}>01 ago - 01 ago</Text>
                </View>
                <View style={styles.gastos}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.dia}>
                            <Text>Dia</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.semana}>
                            <Text>Semana</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.mes}>
                            <Text>Mês</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.ano}>
                            <Text>Ano</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.periodo}>
                            <Text>Periodo</Text>
                        </TouchableOpacity >
                    </View>
                    <View style={styles.eclipse}>
                        <View style={styles.eclipse2}>
                            <Text>Parece que não há nada ainda </Text>
                        </View>
                    </View>
                </View>
            </View>

            <StatusBar style="auto" />
        </View >
    );
}


