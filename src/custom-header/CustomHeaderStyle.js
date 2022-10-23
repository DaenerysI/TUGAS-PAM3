import { StyleSheet } from 'react-native';

const customHeaderStyle = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#86b257',
        height: '20%',
        // elevation: 1,
        marginLeft: -10,
        marginRight: -10,
        zIndex: 1,
    },
    menuIcon: {
        fontSize: 40,
    },
    userIcon: {
        fontSize: 40,
    },
});

export default customHeaderStyle;