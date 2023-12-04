import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Label from "../../componentes/label";
import Img from "../../componentes/img";
import Button from "../../componentes/button";
import Input from "../../componentes/input";

export default function login({ navigation }) {

    function openHome() {
        navigation.navigate('Home');
    }
    function openSignup() {
        navigation.navigate('Signup');
    }
    function openRecover() {
        navigation.navigate('Recover');
    }

    return (
        <View style={styles.background}>
            <Img
                type='logo'
            />

            <View style={{alignItems: 'center'}}>

                <Label
                    texto='Entrar'
                    type='titulo' />

                <View style={{ marginBottom: 20 }}></View>

                <Label
                    texto='Com o seu e-mail e senha'
                    type='subTitulo' />
            </View>

            <View style={{ marginBottom: 20 }}></View>

            <Label
                texto='Digite o seu e-mail'
                type='corpo' />

            <Input
                type='primary'
                placeholder='E-mail'
            />

            <Label
                texto='Digite a sua senha'
                type='corpo' />

            <Input
                type='primary'
                placeholder='Senha'
            />

            <View style={styles.flexRow}>

                <View>

                    {/* Adicionar uma checkbox */}

                    <Label
                        texto='Lembrar minha senha'
                        type='corpo' />

                </View>

                <TouchableOpacity onPress={openRecover}>
                    <Label
                        texto='Esqueci minha senha'
                        type='corpo' />
                </TouchableOpacity>

            </View>

            <View style={styles.flexRow}>

                <Button
                    type='primary'
                    text='Cadastrar-se' 
                    onPress={openSignup}/>

                <Button
                    type='primary'
                    text='Entrar'
                    onPress={openHome}/>

            </View>

            <View style={styles.flexRow}>

                <View style={styles.linha}></View>

                <Label
                    texto='ou acesse com'
                    type='corpo' />

                <View style={styles.linha}></View>

            </View>

            <View style={styles.flexRowEntrar}>

                <Img
                    type='google'
                />

                <Img
                    type='facebook'
                />
            </View>



        </View >
    )
}