
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../../../utils/COLORS'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FastImage from 'react-native-fast-image'

const ProductDetail = ({ route, navigation }) => {

    const { Price, ProductImage, ProductName, threeImages, catagories } = route.params

    console.log(threeImages)

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: COLORS.BACKGROUND_COLOR, flexGrow: 1, paddingBottom: 0, paddingHorizontal: 20 }} >

            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
                <MaterialIcons
                    name={"arrow-back"}
                    color={COLORS.BLACK}
                    size={28}
                />
            </TouchableOpacity>

            <Text style={{ fontSize: 24, alignSelf: 'center', color: COLORS?.BLACK, marginBottom: 10, marginTop: 10 }}>PRODUCT</Text>


            <FastImage
                style={{ height: 200, width: 200, borderRadius: 200, alignSelf: 'center', marginTop: 10 }}
                source={{
                    uri: ProductImage,
                    headers: { Authorization: 'someAuthToken' },
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />




            <View style={{ flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', marginTop: 20 }}>
                <Text style={{ color: COLORS.BLACK, fontSize: 24, width: '50%', fontWeight: 'bold' }}>{ProductName}</Text>
                <Text style={{ color: COLORS.BLACK, fontSize: 24, fontWeight: 'bold' }}>Rs {Price}</Text>
            </View>

            <View>

                <FlatList
                    horizontal
                    data={threeImages}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ height: 100, width: 100, borderWidth: 1, borderColor: COLORS.BLACK, borderRadius: 10, marginLeft: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>


                                <FastImage
                                    style={{ height: 90, width: 90, borderRadius: 10 }}
                                    source={{
                                        uri: item,
                                        headers: { Authorization: 'someAuthToken' },
                                        priority: FastImage.priority.high,
                                    }}
                                    resizeMode={FastImage.resizeMode.cover}
                                />

                            </TouchableOpacity>
                        )
                    }}
                />
            </View>


            {
                catagories ?

                    <TouchableOpacity style={{ height: 50, width: '100%', borderRadius: 200, backgroundColor: COLORS.LEFT_SECONDARY_COLOR, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: COLORS.WHITE, fontWeight: 'bold', fontSize: 20 }}>Make Custom</Text>
                    </TouchableOpacity>

                    :
                    null
            }

            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 200, backgroundColor: COLORS.LEFT_SECONDARY_COLOR, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>

                    <AntDesign
                        name={'hearto'}
                        color={COLORS.WHITE}
                        size={18}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={{ height: 50, width: '83%', borderRadius: 200, backgroundColor: COLORS.PRIMARY_COLOR, marginTop: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                    <Text style={{ color: COLORS.WHITE, fontWeight: 'bold', fontSize: 20 }}>Buy Now</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default ProductDetail