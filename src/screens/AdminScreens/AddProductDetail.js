import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../utils/COLORS'
import Ionicons from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import Toast from 'react-native-toast-message';


const AddProductDetail = ({ route, navigation }) => {
    const { type } = route.params

    const [ProductName, setProductname] = useState("")
    const [ProductPrice, setProductPrice] = useState("")
    const [ProductDescription, setProductDescription] = useState("")

    const [ProductImage1, setProductImage1] = useState("")
    const [ProductImage2, setProductImage2] = useState("")
    const [ProductImage3, setProductImage3] = useState("")
    const [ProductImage4, setProductImage4] = useState("")


    const [Loader, setLoader] = useState(false)


    const showToast = (type, message) => {
        Toast.show({
            type: type,
            text1: message
        })
    }

    const addProduct = async () => {

        if (ProductName == "" && ProductPrice == "" && ProductDescription == "" && ProductImage1 == "" && ProductImage2 == "" && ProductImage3 == "" && ProductImage4 == "") {
            showToast('error', "All Fileds are required");

        } else {


            try {

                setLoader(true)

                const downloadUrls = await Promise.all([
                    uploadAndReturnDownloadUrl(ProductImage1),
                    uploadAndReturnDownloadUrl(ProductImage2),
                    uploadAndReturnDownloadUrl(ProductImage3),
                    uploadAndReturnDownloadUrl(ProductImage4),
                ]);




                firestore()
                    .collection(type)
                    .add({
                        ProductName: ProductName,
                        ProductPrice: ProductPrice,
                        ProductDescription: ProductDescription,
                        ProductImage1: downloadUrls[0],
                        ProductImage2: downloadUrls[1],
                        ProductImage3: downloadUrls[2],
                        ProductImage4: downloadUrls[3],
                        type: type
                    }).then(() => {
                        showToast('success', "successfully added");
                        setLoader(false)
                    }).catch((e)=>{
                        console.log(e)
                        setLoader(false)

                    })
            }
            catch (error) {

                setLoader(false)

                console.log(error)
            }
        }

    }

    const uploadAndReturnDownloadUrl = async (image) => {

        const randomNumber = Math.floor(Math.random() * 100000000); // Adjust the range as needed
        console.log(image)

        try {
            await storage().ref(`${randomNumber}`).putFile(image);

            // Get the download URL
            const downloadUrl = await storage().ref(`${randomNumber}`).getDownloadURL();
            return downloadUrl;

        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };


    const openImage1 = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {

            setProductImage1(image.path)
        });
    }

    const openImage2 = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {

            setProductImage2(image.path)
        });
    }

    const openImage3 = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {

            setProductImage3(image.path)
        });
    }

    const openImage4 = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {

            setProductImage4(image.path)
        });
    }


    return (
        <ScrollView style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flexGrow: 1, paddingBottom: 100, padding: 20 }} >

                <TouchableOpacity onPress={()=> navigation.goBack()} style={{padding:10 ,borderRadius:5 , backgroundColor:COLORS.BLACK, alignSelf:'flex-start'}}>
                    <Text style={{color:COLORS.WHITE}}>Back</Text>
                </TouchableOpacity>

            <Text style={{ color: COLORS.BLACK, alignSelf: 'center', padding: 20, fontSize: 30, fontWeight: 'bold', }}>{type}</Text>




            <TouchableOpacity onPress={() => openImage1()} style={{ height: 150, width: 150, backgroundColor: 'gray', borderRadius: 200, alignItems: 'center', justifyContent: 'center' }}>
                {
                    ProductImage1 ?

                        <Image source={{ uri: ProductImage1 }} style={{ height: 150, width: 150, borderRadius: 200 }} />

                        :

                        <Ionicons
                            name={"person"}
                            size={100}
                            color={'black'}
                        />
                }

            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>

                <TouchableOpacity onPress={() => openImage2()} style={{ height: 100, width: 100, backgroundColor: 'gray', borderRadius: 200, alignItems: 'center', justifyContent: 'center' }}>
                    {

                        ProductImage2 ?
                            <Image source={{ uri: ProductImage2 }} style={{ height: 100, width: 100, borderRadius: 200 }} />
                            :

                            <Ionicons
                                name={"person"}
                                size={50}
                                color={'black'}
                            />
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openImage3()} style={{ height: 100, width: 100, backgroundColor: 'gray', borderRadius: 200, alignItems: 'center', justifyContent: 'center' }}>

                    {

                        ProductImage3 ?
                            <Image source={{ uri: ProductImage3 }} style={{ height: 100, width: 100, borderRadius: 200 }} />
                            :

                            <Ionicons
                                name={"person"}
                                size={50}
                                color={'black'}
                            />
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openImage4()} style={{ height: 100, width: 100, backgroundColor: 'gray', borderRadius: 200, alignItems: 'center', justifyContent: 'center' }}>
                    {

                        ProductImage4 ?
                            <Image source={{ uri: ProductImage4 }} style={{ height: 100, width: 100, borderRadius: 200 }} />
                            :
                            <Ionicons
                                name={"person"}
                                size={50}
                                color={'black'}
                            />
                    }
                </TouchableOpacity>
            </View>


            <TextInput
                placeholder='product name'
                placeholderTextColor={'black'}
                style={{ borderWidth: 1, marginTop: 20, borderRadius: 10, paddingHorizontal: 20, color: COLORS.BLACK }}
                onChangeText={(txt) => setProductname(txt)}
                value={ProductName}
            />

            <TextInput
                placeholder='Price Rs'
                placeholderTextColor={'black'}
                style={{ borderWidth: 1, marginTop: 20, borderRadius: 10, paddingHorizontal: 20, color: COLORS.BLACK }}
                onChangeText={(txt) => setProductPrice(txt)}
                value={ProductPrice}
            />
            <TextInput
                placeholder='Description'
                placeholderTextColor={'black'}
                style={{ borderWidth: 1, marginTop: 20, borderRadius: 10, paddingHorizontal: 20, color: COLORS.BLACK }}
                onChangeText={(txt) => setProductDescription(txt)}
                value={ProductDescription}
            />

            {

                Loader === true ?

                    <View style={{ height: 60, backgroundColor: 'red', marginTop: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size={'small'} color={'white'} />
                    </View>
                    :

                    <TouchableOpacity onPress={() => addProduct()} style={{ height: 60, backgroundColor: 'red', marginTop: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: COLORS.WHITE }}>Add product</Text>
                    </TouchableOpacity>
            }


        </ScrollView>
    )
}

export default AddProductDetail