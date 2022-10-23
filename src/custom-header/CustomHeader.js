import React from 'react'
import {
    View,
} from 'react-native';
import customHeaderStyle from './CustomHeaderStyle'
import Icon from 'react-native-vector-icons/Feather';

const CustomHeader = () => {

    return (
        <View
            style={customHeaderStyle.headerContainer}
        >
            <Icon 
                style={customHeaderStyle.menuIcon}
                name="menu" 
                color="#fff"
            />
            <Icon 
                style={customHeaderStyle.userIcon}
                name="user" 
                color="#fff"
            />
        </View>
    );
};

export default CustomHeader;