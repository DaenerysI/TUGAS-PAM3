import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import { maskapai,bandara,jadwal } from '../DataBase/data.js';
import searchResultStyle from './searchstyle.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formStyle from '../form/FormStyle.js';
const SearchSection = ({dataMaster}) => {
    const {asal, tujuan, tanggal} = dataMaster;



    const DataNotFound = () => {
        return (
            <View style={searchResultStyle.itemContainer}>
                <Text style={searchResultStyle.textDanger}>
                    Maaf Penerbangan tidak ditemukan, Silahkan Cek Kembali
                </Text>
            </View>
        )
    };

    const DataFound = (searchResult) => {
        
        return (
            <FlatList
                data={searchResult}
                renderItem={({item}) => (

                    <TouchableOpacity 
                        style={searchResultStyle.itemContainer}
                    >
                        <View 
                            style={searchResultStyle.itemContent}
                        >
                            <View 
                                style={searchResultStyle.rowContainer}
                            >
                                <View
                                    style={searchResultStyle.imageContainer} 
                                >   
                                      <Icon 
                                        style={searchResultStyle.inputIcon} 
                                        name="flight" color="#86b257"/>
                                    <Image 
                                        source={maskapai.find(subItem => subItem.maskapai_id === item.maskapai_id)} 
                                        style={searchResultStyle.image}
                                    />
                                </View>
                                <View
                                    style={searchResultStyle.columnContainer}
                                >
                                    <View
                                        style={searchResultStyle.rowContainer}
                                    >
                                        <Text 
                                            style={searchResultStyle.bandara}
                                        >
                                            {bandara.find(subItem => subItem.bandara_id === item.berangkat_id).bandara_nama}
                                        </Text>

                                        <MaterialIcons
                                            name="arrow-right-alt"
                                            color="#000"     
                                            size={20}      
                                        />
                                        <Text 
                                            style={searchResultStyle.bandara}
                                        >
                                            {bandara.find(subItem => subItem.bandara_id === item.datang_id).bandara_nama}
                                        </Text>
                                    </View>

                                    <View
                                        style={searchResultStyle.rowContainer}
                                    >
                                        <Text 
                                            style={searchResultStyle.maskapai}
                                        >
                                            {maskapai.find(subItem => subItem.maskapai_id === item.maskapai_id).maskapai_nama}
                                        </Text>
                                        
                                        <Text 
                                            style={searchResultStyle.tanggal}
                                        >
                                                {item.tanggal}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.jadwal_id}
            />
        );
    };

    function RenderData() {
        if (asal !== '' || tujuan !== '' || tanggal !== '') {
            const departureId = bandara.filter(
                item => item.bandara_nama.toLowerCase().replace(/\s/g, '') 
                === asal.toLowerCase().replace(/\s/g, '')
            );                
            const arrivalId = bandara.filter(
                item => item.bandara_nama.toLowerCase().replace(/\s/g, '') 
                === tujuan.toLowerCase().replace(/\s/g, '')
            );

            if (departureId != "" && arrivalId != "") {
                const depId = departureId[0].bandara_id;
                const arrId = arrivalId[0].bandara_id;
                const searchResult = jadwal.filter(
                    item => item.berangkat_id.toLowerCase().replace(/\s/g, '') 
                    === depId.toLowerCase().replace(/\s/g, '') && item.datang_id.toLowerCase().replace(/\s/g, '') 
                    === arrId.toLowerCase().replace(/\s/g, '') && item.tanggal === tanggal
                );

                if (searchResult.length == "") {
                    return (
                        <View style={searchResultStyle.itemContainer}>
                            <Text style={searchResultStyle.textDanger}>
                                Maaf Penerbangan tidak ditemukan, Silahkan Cek kembali
                            </Text>
                        </View>
                    );
                }
                return DataFound(searchResult);
                
            };
            return DataNotFound();
        };
        return DataNotFound();
    };


    return (
        <View style={searchResultStyle.resultContainer}>
            <RenderData/>
                <Text style={searchResultStyle.copyRight}>
                    Copyright Muhamad Bintang F - 120140040
                </Text>
        </View>
    );
};

export default SearchSection;
