import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, CheckBox } from 'react-native';
import { styles } from './src/css/styles';
import { useState } from 'react';

export default function App() {
  const [isSelected, setSelection] = useState(false);

  return (

    <View style={styles.container}>
      <Image
        source={require('./src/imgs/logo.png')}
        style={styles.imagem}
      />
      <Text style={[styles.texto, styles.titulo]}>Entrar</Text>
      <Text style={[styles.texto, styles.subtitulo]}>Com o seu e-mail e senha</Text>
      <View>
        <View style={styles.esquerda}>
          <Text style={[styles.label,]}>Digite o seu e-mail</Text>
          <TextInput
            style={styles.inputLogin}
            placeholder='E-mail'
          />
        </View>
        <View style={styles.esquerda}>
          <Text style={[styles.label,]}>Digite a sua senha</Text>
          <TextInput
            style={styles.inputLogin}
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
            <Text style={styles.label}>
              Lembrar minha senha
            </Text>
          </View>
          <Text style={styles.label}>
            Esquice minha senha
          </Text>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.btn}>
            <Text>
              Cadastrar-se
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.flex, styles.alinhar]}>
          <View style={styles.line}></View>
          <Text style={styles.label}>Ou acesse com</Text>
          <View style={styles.line}></View>
        </View>
      </View>
      <View style={styles.flex}>
          <Image
            source={require('./src/imgs/google.png')}
            style={styles.icon}
          />
          <Image
            source={require('./src/imgs/facebook.png')}
            style={styles.icon}
          />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


