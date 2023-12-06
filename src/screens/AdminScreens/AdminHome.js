import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../../utils/COLORS'
import auth from '@react-native-firebase/auth';

const AdminHome = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flexGrow: 1, paddingBottom: 100 }} >

            <Text style={{ color: COLORS.BLACK, alignSelf: 'center', fontSize: 25, fontWeight: 'bold', }}>Add Product</Text>

            <View style={{ padding: 20, justifyContent: 'space-between', flexDirection: 'row' }}>

                <TouchableOpacity onPress={() => navigation.navigate("AddProductDetail", { type: "Teddybears" })} style={{ height: 200, width: 150, backgroundColor: COLORS.PRIMARY_COLOR, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add Teddybears</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("AddProductDetail", { type: "Bouquets" })} style={{ height: 200, width: 150, backgroundColor: COLORS.PRIMARY_COLOR, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add Bouquets</Text>
                </TouchableOpacity>

            </View>

            <View style={{ padding: 20, justifyContent: 'space-between', flexDirection: 'row' }}>

                <TouchableOpacity onPress={() => navigation.navigate("AddProductDetail", { type: "combos" })} style={{ height: 200, width: 150, backgroundColor: COLORS.PRIMARY_COLOR, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add combos</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("AddProductDetail", { type: "Baskets" })} style={{ height: 200, width: 150, backgroundColor: COLORS.PRIMARY_COLOR, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add Baskets</Text>
                </TouchableOpacity>

            </View>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate("AddProductDetail", { type: "Event" })} style={{ height: 200, width: '90%', backgroundColor: COLORS.PRIMARY_COLOR, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add Event</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={() => auth()?.signOut()?.then(()=> console.log("Successfully logged out!"))} style={{ height: 60, width: '90%', backgroundColor: COLORS.BLACK, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 20, alignSelf: 'center', marginBottom: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color:COLORS.WHITE }}>Logout</Text>
            </TouchableOpacity>


        </ScrollView>
    )
}

export default AdminHome