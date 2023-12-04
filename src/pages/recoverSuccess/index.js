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
                        texto='Foi enviado um e-mail para redefinir a sua senha' />

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