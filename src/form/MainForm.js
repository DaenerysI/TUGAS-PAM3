
import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import formStyle from './FormStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';


const MainForm = ({navigation}) => {
    const [text, onChangeText] = useState({
        asal: '',
        tujuan: '',
        tanggal: '',
    });

    const handleTextChanges = (mytextname) => {
        return (val) => {
            onChangeText({ ...text, [mytextname]: val });
            console.log(text);
        }
    }

    return (
        
        <View 
            style={formStyle.formCardStyle}
        >
            <Text style={formStyle.inputLabel}>
                Lokasi Keberangkatan   
            </Text>
            <View style={formStyle.formInput}>
                <Icon 
                    style={formStyle.inputIcon} 
                    name="flight-takeoff" color="#86b257"/>
                <TextInput
                    style={formStyle.inputText}
                    onChangeText={handleTextChanges('asal')}
                    value={text.asal}
                    placeholder="Masukkan Lokasi Keberangkatan"
                />
            </View>

            <Text style={formStyle.inputLabel}>
                Lokasi Tujuan   
            </Text>
            <View style={formStyle.formInput}>
                <Icon 
                    style={formStyle.inputIcon} 
                    name="flight-land" color="#86b257"/>
                <TextInput
                    style={formStyle.inputText}
                    onChangeText={handleTextChanges('tujuan')}
                    value={text.tujuan}
                    placeholder="Masukkan Lokasi Tujuan"
                />
            </View>

            <Text style={formStyle.inputLabel}>
                Tanggal Keberangkatan   
            </Text>
            <View style={formStyle.formInput}>
                <Icon 
                    style={formStyle.inputIcon} 
                    name="date-range" 
                    color="#86b257"/>
                <TextInput
                    style={formStyle.inputText}
                    onChangeText={handleTextChanges('tanggal')}
                    value={text.tanggal}
                    placeholder="Masukkan Tanggal Keberangakatan"
                />
            </View>

            <View style={formStyle.container}>
                <TouchableOpacity
                    style={formStyle.button}
                    onPress={() => navigation.navigate('HasilPage', {data: text})}
                >
                    <Text
                        style={formStyle.buttonText}
                    >
                        Cari
                    </Text>
                </TouchableOpacity>

                
            </View>
        </View>
    );
};

export default MainForm;
