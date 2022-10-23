import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    useColorScheme,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import HeaderDetailPage from '../header-detail/headerdetail';
import hasilPageStyle from '../styles/hasilpagestyle';
import SearchSection from '../search/search';

const HasilPage = ({ route, navigation }) => {
    const { data } = route.params;

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            
            
                <View 
                    style={hasilPageStyle.mainContainer}>
                    <HeaderDetailPage navigation={ navigation } data={ data }/>
                    {/* <View 
                        style={hasilPageStyle.appsContent}
                    >
                    
                    </View> */}
                    <SearchSection dataMaster={data}/>
                </View>
        </SafeAreaView>
        
    );
};

export default HasilPage;