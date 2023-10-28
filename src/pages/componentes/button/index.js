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
    secondary: {
      backgroundColor: '#EBE789',
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      borderRadius: 10,
      width: 350,
      height: 40,
      flexShrink: 0,
      dropShadowFilter: {
        shadowColor: '#C7C7C7',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 20,
        filter: [
          {
            dropShadow: {
              dx: 0,
              dy: 0,
              blurRadius: 0,
              color: '#C7C7C7',
              opacity: 0.1,
            },
          },
          {
            dropShadow: {
              dx: 0,
              dy: 1,
              blurRadius: 2,
              color: '#C7C7C7',
              opacity: 0.1,
            },
          },
          {
            dropShadow: {
              dx: 0,
              dy: 4,
              blurRadius: 4,
              color: '#C7C7C7',
              opacity: 0.09,
            },
          },
          {
            dropShadow: {
              dx: 0,
              dy: 10,
              blurRadius: 6,
              color: '#C7C7C7',
              opacity: 0.05,
            },
          },
          {
            dropShadow: {
              dx: 0,
              dy: 17,
              blurRadius: 7,
              color: '#C7C7C7',
              opacity: 0.01,
            },
          },
          {
            dropShadow: {
              dx: 0,
              dy: 27,
              blurRadius: 8,
              color: '#C7C7C7',
              opacity: 0.00,
            },
          },
        ],
      },
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