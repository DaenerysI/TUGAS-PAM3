import React from "react";
import { SafeAreaView, ScrollView,StatusBar,Text,useColorScheme,View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import allstyle from "../styles/all";
import MainForm from "../form/MainForm";
import CustomHeader from "../custom-header/CustomHeader";

const Home = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        flex : 1,
    backgroundColor : isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={allstyle.mainContainer}>   
            
                <View style={allstyle.background}>
                    <CustomHeader/>
                    
                    <View style={allstyle.appsContent}>
                        <Text style={allstyle.titleText}>
                            Hiling.id
                        </Text>
                        <MainForm navigation={navigation}/>
                        
                    </View>
                        
                </View>    
            </ScrollView>
            <View style= {allstyle.copyright}>
                <Text>Copyright Muhamad Bintang F - 120140040</Text>
            </View>
        </SafeAreaView>
        
    );
};
export default Home;