import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from "react-native";

export default function Txt({ type, texto }) {

    const tipo = {
        linha: {
            color: '#FFF',
            fontSize: 12,
            fontWeight: '400',
        },
        titulo: {
            color: '#FFF',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: 'normal',
            marginBottom: 25,
        },
        subtitulo: {
            marginBottom: 25,
            color: '#FFF',
        }
    }

    return (
        <Text style={[type == 'titulo' ? tipo.titulo : type == 'subTitulo' ? tipo.subtitulo : type == 'linha' ? tipo.linha : '']}>
            {texto}
        </Text>
    );
}