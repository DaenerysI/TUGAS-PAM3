import { 
    StyleSheet
} from 'react-native';

const allstyle = StyleSheet.create({
	mainContainer: {  
		height: "100%",
		backgroundColor: '#f5f5f5',
		
	},
	background: {
		flex : 1,
		justifyContent: "center",
		backgroundColor: "#86b257",
		height: "70%",
		marginBottom : 300,
		paddingBottom: 30,
		paddingRight: 30,
		paddingLeft: 30,
		paddingTop: 0,
		borderRadius : 5,
	},
	appsContent: {
		flex: 1,
		alignItems: "center",
		flexDirection: "column",
	},
	titleText: {
		fontSize: 40,
		fontWeight: '700',
		color: "white",
		alignSelf: "center",
	},
	highlight: {
		fontWeight: '700',
	},

	copyright : {
		alignSelf: 'center',
		marginBottom: 30,
	},
	
});

export default allstyle;