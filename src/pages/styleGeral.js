import { StyleSheet } from 'react-native';

export const stylesGeral = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001E36',
    justifyContent: 'center',
    textAlign: 'left',
    paddingHorizontal: 10,
    paddingVertical: 24, 
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
    marginHorizontal: 'auto',
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
  alinhar: {
    alignItems: 'center',
    marginBottom: 50,
  },
  center: {
    flexDirection: 'row',
    marginHorizontal: 'auto',
  },
  inputLogin: {
    backgroundColor: '#474747',
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});