import { Image } from 'react-native'
import styles from "./styles";

export default function Img({type}) {

    let diretorio = '';
    let tipo = '';
    switch (type){
        case 'logo':
           tipo = styles.logo
           diretorio = 'logo'
        break;
            
        case 'facebook':
            tipo = styles.entrar
            diretorio = 'facebook'
        break;
        
        case 'google':
            tipo = styles.entrar
            diretorio = 'google'
        break;
    };

    const imgStyle = tipo;

    const imgUrl = diretorio;

    return (
            <Image  style={imgStyle}
                source={require('../../../assets/' + imgUrl + '.png' )}
            /> 
    )
}