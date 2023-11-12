import { View } from 'react-native';
import styles from './styles';
import Button from '../../componentes/button';
import Label from '../../componentes/label';
import Img from '../../componentes/img';

export default function SignupSuccess({ navigation }) {

    function openLogin() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.background}>

            <Img
            type='logo'/>
    
            <View >
                <View style={{ marginBottom: '100%', alignItems: 'center' }}>
                    <Label
                        type='titulo'
                        texto='Sucesso' />

                    <Label
                        type='subTitulo'
                        texto='Sua conta foi cadastrada com sucesso!' />

                    <Label
                        type='subTitulo'
                        texto='Volte a tela inicial para terminar o seu login' />

                </View>
                <View style={{ alignItems: 'center' }}>

                    <Button
                        onPress={openLogin}
                        text='Voltar a tela inicial'
                        type='primary'/>
                </View>
            </View>
        </View>
    );
}