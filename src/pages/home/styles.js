import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 24,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    carteira: {
        marginTop: 10,
        height: 120,
        backgroundColor: '#b5ddda',
        borderRadius: 20,
        paddingTop: 13,
        paddingHorizontal: 10,
    },
    reais: {
        height: 77,
        marginHorizontal: 61,
        backgroundColor: '#EBE789',
        marginBottom: 0,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    despesas: {
        height: 40,
        backgroundColor: '#EBE789',
        width: '50%',
        borderTopStartRadius: 15,
        borderBottomLeftRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
    },
    renda: {
        height: 40,
        backgroundColor: '#48472A',
        width: '50%',
        borderBottomEndRadius: 15,
        borderTopEndRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
    },
    opcoes: {
        marginVertical: 21,  
        flexDirection: "row",
    },
    diaMes: {
        height: 50,
        borderRadius: 37,
        flexDirection: 'row',
        backgroundColor: '#6D7574',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    gastos: {
        height: 390,
        backgroundColor: '#383838',
        borderRadius: 25,
        padding: 20,
    },
    
    eclipse: {
        width: 205,
        height: 205,
        borderRadius: '100%',
        backgroundColor: '#67ADAD',
        margin: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    eclipse2: {
        width: 156,
        height: 156,
        borderRadius: '100%',
        backgroundColor: '#B4E4E4',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
});