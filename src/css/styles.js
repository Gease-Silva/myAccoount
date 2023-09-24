import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001E36',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left'
  },
  inputLogin: {
    backgroundColor: '#474747',
    width: 350,
    paddingVertical: 24,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  texto: {
    color: '#fff',
  },
  label: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '400',
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: 240,
    height: 180,
  },
  esquerda: {
    alignItems: 'left'
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
  },
  flex: {
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'space-between',

  },
  btn: {
    display: 'flex',
    width: 165,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 53,
    border: '1px solid rgba(255, 230, 0, 0.48)',
    backgroundColor: '#FFF',
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
});

