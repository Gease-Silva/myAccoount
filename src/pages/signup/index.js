import { View, TouchableOpacity } from "react-native-web";
import styles from "./styles";
import Label from "../../componentes/label";
import Input from "../../componentes/input";
import Button from "../../componentes/button";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "../../componentes/back";

export default function signup({ navigation }) {

    function openSuccess() {
        navigation.navigate('SignupSuccess');
    }

    return (

        <View style={styles.background}>

            <BackButton navigation={navigation}/>

            <Label
                texto='Cadastra-se'
                type='titulo' />

            <View style={{ marginBottom: 20 }}></View>

            <Label
                texto='Com seu e-mail e senha'
                type='subTitulo' />

            <View style={{ marginBottom: 30 }}></View>

            <Label
                texto='Como é o seu nome?'
                type='corpo' />

            <Input
                type='primary'
                placeholder='Nome'
            />

            <Label
                texto='Qual o seu CPF?'
                type='corpo' />

            <Input
                type='primary'
                placeholder='CPF'
            />

            <Label
                texto='Digite o seu e-mail'
                type='corpo' />

            <Input
                type='primary'
                placeholder='E-mail' />

            <Label
                texto='Digite sua senha'
                type='corpo' />

            <Input
                type='primary'
                placeholder='Senha' />

            <Label
                texto='Confirme sua senha'
                type='corpo' />

            <Input
                type='primary'
                placeholder='Senha' />

            <View style={{ alignItems: 'center' }}>

                <Button
                    onPress={openSuccess}
                    type='primary'
                    text='Cadastrar' />

            </View>

        </View>

    )

}