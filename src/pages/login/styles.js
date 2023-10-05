import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({  
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: 240,
    height: 180,
    marginHorizontal: 'auto',
  },
  flex: {
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'space-between',

  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  line: {
    width: 120,
    height: 1,
    backgroundColor: '#fff',
  },
  icon: {
    width: 48,
    height: 48,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 5,
    backgroundColor: '#a5a5a5',
  },
  alinhar: {
    alignItems: 'center',
    marginBottom: 50,
  },
  center: {
    flexDirection: 'row',
    marginHorizontal: 'auto',
  },
});