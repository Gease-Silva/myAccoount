import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from "react-native";

export default function Button({ onPress,
    text,
    type }) {

    const tipo = {
        primary: {
            display: 'flex',
            width: 165,
            padding: 24,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            borderRadius: 53,
            border: '1px solid rgba(255, 230, 0, 0.48)',
            backgroundColor: '#FFF',
            flexDirection: "row",
        },
    }

    return (
        <TouchableOpacity
            onTouchEnd={onPress}

            style={[type == 'primary' ? tipo.primary : type == 'secondary' ? tipo.secondary : '']}>

            <Text>
                {text}
            </Text>

        </TouchableOpacity>
    );
}