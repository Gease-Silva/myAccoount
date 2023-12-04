
import { Text, View, Image } from 'react-native';
import styles from './styles.js';
import Button from '../../componentes/button/index.js';
import Input from '../../componentes/input/index.js';
import Img from '../../componentes/img/index.js';
import Label from '../../componentes/label/index.js';
import BackButton from '../../componentes/back/index.js';

export default function app({ navigation }) {

    function openSuccess() {
        navigation.navigate('RecoverSuccess');
    }

    return (
        <View style={styles.background}>

            <BackButton navigation={navigation}/>

            <Img
                type='logo' />

            <Label
                type='subTitulo'
                texto='Esqueci minha senha:'
            />


            <Label
                type='corpo'
                texto='Digite o seu nome' />

            <Input
                type="primary"
                placeholder='Nome'
            />

            <Label
                texto='Digite o seu CPF:'
                type='corpo'
            />
            <Input
                type="primary"
                placeholder='CPF'
                keyboardType="numeric"
            />

            <Label
                texto='Digite o seu E-mai'
                type='corpo'
            />
            
            
            <Input
                type='primary'
                placeholder='E-mail'
            />


            <View style={{ alignItems: 'center' }}>

                <Button
                    onPress={openSuccess}
                    text="Enviar"
                    type="primary" />
            </View>

        </View>
    );
}