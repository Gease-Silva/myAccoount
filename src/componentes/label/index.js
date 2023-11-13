import { Text } from "react-native";
import styles from "./styles";

export default function Label({ type, texto }) {

    let tipo = '';
    switch (type) {
        case 'titulo':
            tipo = styles.titulo;
            break;

        case 'subTitulo':
            tipo = styles.subTitulo;
            break;

        case 'corpo':
            tipo = styles.corpo;
            break;

        case 'corpoBlack':
        tipo = styles.corpoBlack;
        break;
    };

    const estilo = tipo;

    return (

        <Text style={estilo}>
            {texto}
        </Text>
    )

}