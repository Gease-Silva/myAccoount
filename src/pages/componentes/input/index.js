import { TextInput, Text, StyleSheet, ActivityIndicator, View } from "react-native";

export default function TxtInput({ keyboardType, text, type }) {

  const tipo = {
    primary: {
      backgroundColor: '#474747',
      width: '100%',
      paddingVertical: 24,
      paddingHorizontal: 10,
      alignItems: 'center',
      gap: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    secondary: {
      display: 'flex',
      width: '100%',
      height: 50,
      paddingVertical: 24,
      paddingHorizontal: 10,
      alignItems: 'center',
      gap: 11,
      flexShrink: 0,
      borderRadius: 5,
      background: '#474747',
    },
  }

  return (
    <TextInput
      style={[type == 'primary' ? tipo.primary : type == 'secondary' ? tipo.secondary : ""]}
      placeholder={text}
      keyboardType={keyboardType}
    />
  );
}