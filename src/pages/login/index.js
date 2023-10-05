import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, CheckBox } from 'react-native';
import { styles } from './styles';
import { stylesGeral } from '../styleGeral.js';
import { useState } from 'react';

export default function login({navigation}) {
  const [isSelected, setSelection] = useState(false);

  function openSignup(){
    navigation.navigate('Signup');
  }
  function openRecover(){
    navigation.navigate('Recover');
  }

  return (

    <View style={stylesGeral.container}>
      <Image
        source={require('./imgs/logo.png')}
        style={styles.imagem}
      />
      <Text style={[stylesGeral.texto, stylesGeral.titulo]}>Entrar</Text>
      <Text style={[stylesGeral.texto, stylesGeral.subtitulo]}>Com o seu e-mail e senha</Text>
      <View>
        <View style={stylesGeral.esquerda}>
          <Text style={[stylesGeral.label,]}>Digite o seu e-mail</Text>
          <TextInput
            style={stylesGeral.inputLogin}
            placeholder='E-mail'
          />
        </View>
        <View style={stylesGeral.esquerda}>
          <Text style={[stylesGeral.label,]}>Digite a sua senha</Text>
          <TextInput
            style={stylesGeral.inputLogin}
            placeholder='Senha'
          />
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
          <Text style={stylesGeral.label}
           onTouchEnd={openRecover}>
            Esqueci minha senha
          </Text>
        </View>
        <View style={stylesGeral.flex}>
          <TouchableOpacity style={stylesGeral.btn} onTouchEnd={openSignup}>
            <Text>
              Cadastrar-se
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesGeral.btn}>
            <Text>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[stylesGeral.flex, styles.alinhar]}>
          <View style={stylesGeral.line}></View>
          <Text style={stylesGeral.label}>Ou acesse com</Text>
          <View style={stylesGeral.line}></View>
        </View>
      </View>
      <View style={stylesGeral.center}>
          <Image
            source={require('./imgs/google.png')}
            style={styles.icon}
          />
          <Image
            source={require('./imgs/facebook.png')}
            style={styles.icon}
          />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


