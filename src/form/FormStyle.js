import { StyleSheet } from 'react-native';

const formStyle = StyleSheet.create({
    formCardStyle: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        
        elevation: 10,
        width: '100%',
        position: 'absolute',
        top: '15%',
    },
    inputText: {
        flex: 1,
    },
    formInput: {   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1.2,
        borderColor: '#d3d3d3',
        height: 50,
        borderRadius: 5,
        margin: 10,
    
    },
    inputIcon: {
        fontSize: 25,
        padding: 10,
    },
    inputLabel: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        textAlign: 'left',
        paddingLeft: 10,
    },
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#f07c34',
        borderRadius: 5,
        padding: 10,
        width: '95%',
        marginBottom : 30,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },
});

export default formStyle;
