import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Button({ onPress, text, type }) {

    let tipo = '';
    switch(type){
        case 'primary':
            tipo = styles.primary;
            break

        case 'secondary':
            tipo = styles.secondary;
            break

        case 'btnMid':
            tipo = styles.btnMid;
            break

        case 'leftPrimary':
            tipo = styles.btnBorder.leftPrimary;
            break

        case 'rightPrimary':
            tipo = styles.btnBorder.rightPrimary;
            break
    
        case 'leftSecondary':
            tipo = styles.btnBorder.leftSecondary;
            break
        case 'rightSecondary':
            tipo = styles.btnBorder.rightSecondary;
            break
    }

    const estilo = tipo

    return (
        <TouchableOpacity
            onTouchEnd={onPress}

            style={estilo}>

            <Text>
                {text}
            </Text>

        </TouchableOpacity>
    );
}