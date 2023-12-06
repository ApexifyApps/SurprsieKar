import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../../../utils/COLORS'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const EventDetail = ({ route, navigation }) => {
    const { Price, ProductImage, ProductName, threeImages, catagories , Description} = route.params

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: COLORS.BACKGROUND_COLOR, flexGrow: 1, }} >


            <Image source={{uri: ProductImage }} style={{ height: 400, width: '100%', borderBottomRightRadius: 40, borderBottomLeftRadius: 40, alignSelf: 'center', }} />
           
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, zIndex:9, position:'absolute', backgroundColor:COLORS.LEFT_SECONDARY_COLOR , borderRadius:100, marginLeft:10, padding:10}}>
                <MaterialIcons
                    name={"arrow-back"}
                    color={COLORS.WHITE}
                    size={28}
                />
            </TouchableOpacity>

            <View style={{ padding: 20 }}>

                <Text style={{ color: COLORS.BLACK, fontSize: 26, fontWeight: 'bold' }}>{ProductName}</Text>

                <TouchableOpacity onPress={()=> navigation.navigate("Calender")} style={{ backgroundColor: '#006374', padding: 10, alignSelf: 'flex-end', borderRadius: 299, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <Text style={{ color: COLORS.WHITE, fontSize: 20 }}>Book now</Text>
                </TouchableOpacity>

                <Text style={{ color: COLORS.BLACK, fontSize: 18, marginTop: 20 }}>{Description}
                </Text>


                <Text style={{ color: COLORS.BLACK, fontSize: 18, marginTop: 10, textDecorationLine: 'underline' }}>Non equipment requiered</Text>
                <Text style={{ color: COLORS.BLACK, fontSize: 18, textDecorationLine: 'underline', marginTop: 5 }}>Lunch is not included</Text>

            </View>




        </ScrollView>
    )
}

export default EventDetail