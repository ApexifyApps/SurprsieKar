import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import COLORS from '../../utils/COLORS';
import LinearGradient from 'react-native-linear-gradient';
import TxtInput from '../../components/TxtInput';
import Btn from '../../components/Btn';
import Ionicons from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';

const SignUp = ({ navigation }) => {

    const [signupData, setSignUpData] = useState({
        First_name: "",
        Last_name: "",
        phone: "",
        Email: "",
        password: "",
        confirmPassword: "",
        ImageUrl: ""
    })


    const showToast = (type, message) => {
        Toast.show({
            type: type,
            text1: message
        })
    }

    const SignUpNow = () => {


        console.log(signupData)


        if (signupData.First_name === "" || signupData.Last_name === "" || signupData.phone === "" || signupData.Email === "" || signupData.password === "" || signupData.confirmPassword === "") {
            showToast("error", "All Fields are required")
        } else if (signupData.password !== signupData.confirmPassword) {
            showToast("error", "Your password does not match")

        } else {

            auth()
                .createUserWithEmailAndPassword(signupData.Email, signupData.password)
                .then(async () => {
                    console.log('User signed in anonymously');
                    const UID = auth()?.currentUser?.uid



                    if (signupData.ImageUrl) {

                        await storage().ref(UID).putFile(signupData.ImageUrl)
                            .then(async () => {
                                const downloadUrl = await storage().ref(UID).getDownloadURL();

                                firestore()
                                    .collection("Users")
                                    .doc(UID)
                                    .set({
                                        'first_name': signupData.First_name,
                                        'last_name': signupData.Last_name,
                                        'email': signupData.Email,
                                        'contact_no': signupData.phone,
                                        'type': 'buyer',
                                        'Profile_Image': downloadUrl
                                    }).then(() => {
                                        // setModalVisible(false)
                                        showToast("success", "Successfully signed up")
                                    }).catch((e) => {
                                        showToast("error", e.code)
                                        console.log(e)
                                    })
                            })
                            .catch((error) => {
                                console.error('Error uploading file or getting download URL:', error);
                            });


                    } else {

                        firestore()
                            .collection("Users")
                            .doc(UID)
                            .set({
                                'first_name': signupData.First_name,
                                'last_name': signupData.Last_name,
                                'email': signupData.Email,
                                'contact_no': signupData.phone,
                                'type': 'buyer',
                                'Profile_Image': ""
                            }).then(() => {
                                // setModalVisible(false)
                                showToast("success", "Successfully signed up")

                            }).catch((e) => {
                                showToast("error", e.code)
                                console.log(e)


                            })
                    }


                }

                )
        }



    }


    const openImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setSignUpData({ ...signupData, ImageUrl: image.path })
        });
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND_COLOR, justifyContent: "space-between" }}>
                <View style={{ height: 200, backgroundColor: COLORS.PRIMARY_COLOR, alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>

                    <TouchableOpacity onPress={() => openImage()} style={{ height: 130, width: 130, backgroundColor: COLORS?.LEFT_SECONDARY_COLOR, alignItems: 'center', justifyContent: 'center', borderRadius: 200, alignSelf: 'center' }}>
                        {
                            signupData.ImageUrl ?
                                <Image source={{ uri: signupData?.ImageUrl }} style={{ height: 130, width: 130, borderRadius: 200 }} />
                                :


                                <Ionicons
                                    name="person"
                                    size={70}
                                />
                        }
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', flex: 1 }}>

                    <TxtInput txt={"First name"} onChangeText={(txt) => setSignUpData({ ...signupData, First_name: txt })} val={signupData.First_name} />
                    <TxtInput txt={"Last name"} onChangeText={(txt) => setSignUpData({ ...signupData, Last_name: txt })} val={signupData.Last_name} />
                    <TxtInput txt={"Contact"} onChangeText={(txt) => setSignUpData({ ...signupData, phone: txt })} val={signupData.phone} />
                    <TxtInput txt={"Email"} onChangeText={(txt) => setSignUpData({ ...signupData, Email: txt })} val={signupData.Email} />
                    <TxtInput txt={"Password"} onChangeText={(txt) => setSignUpData({ ...signupData, password: txt })} val={signupData.password} />
                    <TxtInput txt={"Confirm Password"} onChangeText={(txt) => setSignUpData({ ...signupData, confirmPassword: txt })} val={signupData.confirmPassword} />

                    <Text style={{ color: COLORS.BLACK, alignSelf: 'flex-end', marginRight: 30, marginTop: 10 }}>Already have an account? <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }} onPress={() => navigation.goBack()}>Login</Text> </Text>

                </View>

                <View style={{ alignItems: 'center', flex: 1 }}>

                    <Btn txt={"Sign Up"} nav={() => SignUpNow()} />
                    <Btn txt={"Back"} nav={() => navigation.goBack()} />

                </View>
            </View>
        </ScrollView>
    );
}

export default SignUp