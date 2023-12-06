import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../utils/COLORS'
import AntDesign from 'react-native-vector-icons/AntDesign'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import FastImage from 'react-native-fast-image'

const Home = ({ navigation }) => {


    const [selectCatagory, setSelectCatagory] = useState("")
    const [allItem, setItem] = useState()

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
        getProduct("Baskets")
    }, [])

    const getProduct = (type) => {
        setSelectCatagory(type)

        firestore()
            .collection(type)
            .onSnapshot((e) => {

                const temp = []
                e?.docs?.forEach((item) => {
                    temp.push(item.data())
                })
                setItem(temp)

            })
    }

    return (
        <View style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flex: 1, padding: 20, paddingBottom: 0 }} >

            <Text style={{ fontSize: 30, alignSelf: 'center', color: COLORS?.BLACK, marginBottom: 10, fontWeight: 'bold' }}>Explore</Text>

            <View style={{ marginBottom: 20 }}>
                <FlatList
                    horizontal
                    data={totalTypes}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => getProduct(item?.name)}>
                                <Text style={{ color: COLORS.BLACK, marginLeft: 20, }}>{item?.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>


            <FlatList
                data={allItem}
                numColumns={2}
                renderItem={({ item }) => {

                    console.log(item)

                    return (
                        <>
                            {
                                selectCatagory === "Teddybears" ?

                                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { ProductImage: item?.ProductImage1, threeImages: [item?.ProductImage2, item?.ProductImage3, item?.ProductImage4], ProductName: item?.ProductName, Price: item.ProductPrice })} style={{ width: '42%', marginLeft: 20, marginBottom: 20, borderRadius: 20, borderWidth: 3, padding: 15, borderColor: '#707070' }}>

                                        <View>
                                            <Image source={{ uri: item.ProductImage1 }} style={{ height: 80, width: 80, borderRadius: 100, alignSelf: 'center', }} />
                                            <View style={{ zIndex: 10, position: 'absolute', bottom: 0, right: 10, backgroundColor: COLORS.WHITE, borderRadius: 200, padding: 5 }}>
                                                <AntDesign
                                                    name={'heart'}
                                                    color={'#006374'}
                                                    size={15}
                                                />
                                            </View>
                                        </View>
                                        <Text style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 20, }} numberOfLines={1}>Teddy</Text>
                                        <Text style={{ color: COLORS.BLACK, fontSize: 10 }}>newly added</Text>



                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, alignItems: 'center' }}>
                                            <Text style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 16 }}>Rs {item.ProductPrice}</Text>
                                        </View>
                                    </TouchableOpacity>

                                    :

                                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { ProductImage: item?.ProductImage1, threeImages: [item?.ProductImage2, item?.ProductImage3, item?.ProductImage4], ProductName: item?.ProductName, Price: item?.ProductPrice, catagories: "Basket" })} style={{ width: '42%', marginLeft: 20, marginBottom: 20, borderRadius: 10 }}>

                                        <View>
                                            <Image source={{ uri: item.ProductImage1 }} style={{ height: 200, width: '100%', borderRadius: 10 }} />
                                            <Text style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 20 }}>{item?.ProductName}</Text>
                                            <Text style={{ color: COLORS.BLACK, fontSize: 10 }}>newly added</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, alignItems: 'center' }}>
                                            <Text style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 19 }}>Rs {item?.ProductPrice}</Text>
                                            <AntDesign
                                                name={'hearto'}
                                                color={COLORS.BLACK}
                                                size={18}
                                            />

                                        </View>
                                    </TouchableOpacity>
                            }



                        </>
                    )
                }}
            />


        </View>
    )
}

export default Home