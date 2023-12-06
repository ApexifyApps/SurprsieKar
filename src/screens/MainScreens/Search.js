import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../utils/COLORS'
import Feather from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore';

const Search = () => {

    const totalTypes = [
        {
            id: 1, name: 'Baskets',
        },
        {
            id: 2, name: 'Bouquets',
        },
        {
            id: 3, name: 'Teddybears',
        },
        {
            id: 4, name: 'combos',
        }
    ]

    useEffect(() => {
        getSearchData()
    }, [])

    const [searchData, setSearchData] = useState([]);

    const getSearchData = () => {
        const temp = [];

        totalTypes.forEach((doc) => {
            firestore()
                .collection(doc?.name)
                .onSnapshot((e) => {
                    e.docs.forEach((item) => {
                        temp.push(item.data());
                    });

                    // Set the state after fetching data for each type
                    setSearchData(temp);
                });
        });
    };

    console.log(searchData)



    return (
        <ScrollView contentContainerStyle={{ backgroundColor: COLORS.BACKGROUND_COLOR, flexGrow: 1, paddingBottom: 0, paddingHorizontal: 20 }} >
            <Text style={{ fontSize: 30, alignSelf: 'center', color: COLORS?.BLACK, marginBottom: 10, fontWeight: 'bold', marginTop: 20 }}>Search</Text>

            <View style={{ height: 50, backgroundColor: '#5DB9E3', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, alignSelf: 'center', borderRadius: 20, marginTop: 10 }}>

                <TextInput
                    placeholder='search'
                    placeholderTextColor={'#FFFFFF'}
                    style={{ width: '100%' }}
                />

                <TouchableOpacity >
                    <Feather
                        name={'search'}
                        color={COLORS.WHITE}
                        size={20}
                    />
                </TouchableOpacity>

            </View>

            <FlatList
                data={searchData}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 100, width: '100%', backgroundColor: COLORS.WHITE, marginTop: 20, borderRadius: 10, padding: 10, flexDirection:'row' }}>
                            <Image source={{uri : item?.ProductImage1}} style={{height: 80, width:80, borderRadius:10}}/>
                            <View style={{marginLeft:10, width:'80', }}>
                            <Text style={{ color: COLORS.BLACK, fontSize:17, fontWeight:'bold' }} numberOfLines={1}>{item?.ProductName}</Text>
                            <Text style={{ color: COLORS.BLACK , fontWeight:'bold'}} numberOfLines={2}>Rs {item?.ProductPrice}</Text>
                            <Text style={{ color: COLORS.BLACK, marginTop:5 }} numberOfLines={2}>{item?.ProductDescription}</Text>
                            </View>
                        </View>
                    )
                }}

            />

        </ScrollView>
    )
}

export default Search