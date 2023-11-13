import { TextInput } from 'react-native'
import styles from "./styles";

export default function Input({ type, placeholder, keyboardType }) {

    let tipo = '';
    switch (type) {

        case 'primary':
            tipo = styles.primary;
            break;

        case 'secondary':
            tipo = styles.secondary;
            break;

    };
    
    const typeSelected = tipo;

    return (
        <TextInput
            style={typeSelected}
            placeholder={placeholder}
            keyboardType={keyboardType}
        />
    )
}