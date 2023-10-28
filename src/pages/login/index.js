import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, CheckBox, Touchable } from 'react-native';
import { styles } from './styles';
import { stylesGeral } from '../styleGeral.js';
import { useState } from 'react';
import Button from '../componentes/button';
import TxtInput from '../componentes/input';
import Txt from '../componentes/text';

export default function login({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  function openSignup() {
    navigation.navigate('Signup');
  }
  function openRecover() {
    navigation.navigate('Recover');
  }

  return (

    <View style={stylesGeral.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.imagem}
      />
      <Txt 
      type='titulo'
      texto='Entrar'/>
      <Txt 
      type='subTitulo'
      texto='Com o seu e-mail e senha'/>
      <View>
        <View style={stylesGeral.esquerda}>
          <Txt 
          type='linha'
          texto='Digite o seu e-mail'/>
          <TxtInput
            text="E-mail"
            type="primary" />
        </View>
        <View style={stylesGeral.esquerda}>
          <Text style={[stylesGeral.label,]}>Digite a sua senha</Text>
          <TxtInput
            text="Senha"
            type="primary" />
        </View>
        <View style={styles.flex}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={{ marginEnd: 10, }}
              value={isSelected}
              onValueChange={setSelection}
            />
            <Text style={stylesGeral.label}>
              Lembrar minha senha
            </Text>
          </View>
          <TouchableOpacity style={stylesGeral.label}
            onTouchEnd={openRecover}>
            <Text style={stylesGeral.label}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesGeral.flex}>
          <Button
            onPress={openSignup}
            text="Cadastrar-se"
            type="primary" />
          <Button
            text="Entrar"
            type="primary" />
        </View>
        <View style={[stylesGeral.flex, styles.alinhar]}>
          <View style={stylesGeral.line}></View>
          <Text style={stylesGeral.label}>Ou acesse com</Text>
          <View style={stylesGeral.line}></View>
        </View>
      </View>
      <View style={stylesGeral.center}>
        <Image
          source={require('../../../assets/google.png')}
          style={styles.icon}
        />
        <Image
          source={require('../../../assets/facebook.png')}
          style={styles.icon}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


