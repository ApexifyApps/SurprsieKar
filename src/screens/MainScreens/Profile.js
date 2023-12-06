import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../utils/COLORS'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Profile = ({navigation}) => {

    const UID = auth()?.currentUser?.uid

    const [userData, setUserData] = useState()

    useEffect(()=>{
        getUserData()
    },[])

    const getUserData = () => {
        firestore()
        .collection("Users")
        .doc(UID)
        .get()
        .then((doc)=>{
            console.log(doc.data())
            setUserData(doc.data())
        })
    }
    return (
        <View style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flex: 1, paddingBottom: 0, justifyContent: 'space-between' }} >
            <View style={{ height: 60, backgroundColor: COLORS.PRIMARY_COLOR, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, color: COLORS.BLACK, fontWeight: 'bold' }}>Profile</Text>
            </View>


            <View style={{ flex: 0.7, backgroundColor: COLORS.PRIMARY_COLOR, borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>


                <TouchableOpacity style={{ height: 130, width: 130, backgroundColor: COLORS?.LEFT_SECONDARY_COLOR, alignItems: 'center', justifyContent: 'center', borderRadius: 200, alignSelf: 'center', position: 'absolute', zIndex: 1, top: -80 }}>
                    <View style={{ height: 115, width: 115, backgroundColor: COLORS?.PRIMARY_COLOR, borderRadius: 1000, alignItems: 'center', justifyContent: 'center' }}>
                        {
                            userData?.Profile_Image ?

                            <Image source={{uri: userData?.Profile_Image}} style={{height:115, width:115, borderRadius:200}}/>

                            :
                            <Ionicons
                            name="person"
                            size={70}
                            color={COLORS.WHITE}
                        />

                        }
                      
                    </View>
                </TouchableOpacity>

                <Text style={{ color: COLORS.BLACK, alignSelf: 'center', marginTop: 70, fontSize: 24, fontWeight: 'bold' }}>{userData?.first_name}</Text>

                <View style={{ flexDirection: 'row', marginLeft:20, marginTop:20 , alignItems:'center'}}>
                <EvilIcons
                    name={'location'}
                    size={19}
                    color={COLORS.BLACK}
                    />
                    <Text style={{ color: COLORS.BLACK, marginLeft:5, fontSize:20 }}>north nazimabad</Text>
                </View>

                <View style={{ flexDirection: 'row', marginLeft:20,marginTop:10, alignItems:'center' }}>

                         <Feather
                         name={'phone'}
                         size={18}
                         color={COLORS.BLACK}
                         />
                    <Text style={{ color: COLORS.BLACK, marginLeft:10, fontSize:20 }}>{userData?.contact_no}</Text>
                </View>
                

                <TouchableOpacity onPress={()=> auth().signOut()} style={{height:60, width:'90%', backgroundColor:COLORS.LEFT_SECONDARY_COLOR, alignSelf:'center', borderRadius:10, marginTop:20, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:COLORS.WHITE}}>
                    <Text style={{color:COLORS.BLACK, fontWeight:'bold', fontSize:20}}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Profile  