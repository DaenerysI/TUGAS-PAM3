import { StyleSheet } from 'react-native';

const searchResultStyle = StyleSheet.create({
    resultContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
    },
    itemContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 2,
    },
    itemContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
    },
    maskapai: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        maxWidth: '60%',
    },
    bandara: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        maxWidth: '45%',
        marginBottom: 10,
    },
    tanggal: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
    },
    textDanger: {
        fontSize: 15,
        fontWeight: '700',
        color: 'red',
        textAlign: 'center',
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    imageContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginRight: 20,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    }, 
    copyRight: {
		zIndex: 1,
		textAlign: 'center',
		color: '#000',
		margin: 20,
	},
    inputIcon: {
        fontSize: 40,
        padding: 2,
    },    
    });

export default searchResultStyle;
