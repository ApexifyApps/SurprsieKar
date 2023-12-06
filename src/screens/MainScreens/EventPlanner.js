
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../utils/COLORS'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const EventPlanner = ({ navigation }) => {

  const UID = auth()?.currentUser?.uid

  const [Events, setEvent] = useState()


  const dummyData = [
    {
      id: 1, name: 'unicorn birthday theme', image: require('../../assets/babyshower.png',), cat: "teddy"
    },
    {
      id: 2, name: 'baby shower', image: require('../../assets/birthday.png'), cat: "teddy"
    },
    {
      id: 3, name: 'Birthday', image: require('../../assets/birthday.png'), cat: "teddy"
    },
    {
      id: 4, name: 'Birthday', image: require('../../assets/babyshower.png'), cat: "teddy"
    },
    {
      id: 5, name: 'Birthday', image: require('../../assets/birthday.png'), cat: "teddy"
    },
    {
      id: 6, name: 'Birthday', image: require('../../assets/babyshower.png'), cat: "teddy"
    },
    {
      id: 7, name: 'Birthday', image: require('../../assets/babyshower.png'), cat: "teddy"
    },
    {
      id: 8, name: 'baby shower', image: require('../../assets/birthday.png'), cat: "teddy"
    },
  ]

  const decor = [
    {
      id: 1, name: 'unicorn birthday theme', image: require('../../assets/mehendi.png',), cat: "teddy"
    },
    {
      id: 2, name: 'baby shower', image: require('../../assets/mehendi.png'), cat: "teddy"
    },
    {
      id: 3, name: 'Birthday', image: require('../../assets/mehendi.png'), cat: "teddy"
    },
    {
      id: 4, name: 'Birthday', image: require('../../assets/mehendi.png'), cat: "teddy"
    },
    {
      id: 5, name: 'Birthday', image: require('../../assets/mehendi.png'), cat: "teddy"
    },
    {
      id: 6, name: 'Birthday', image: require('../../assets/mehendi.png'), cat: "teddy"
    },
    {
      id: 7, name: 'Birthday', image: require('../../assets/mehendi.png'), cat: "teddy"
    },
    {
      id: 8, name: 'baby shower', image: require('../../assets/mehendi.png'), cat: "teddy"
    },
  ]


  useEffect(() => {
    getEventData()
  }, [])

  const getEventData = () => {
    firestore()
      .collection("Event")
      .onSnapshot((doc) => {
        const temp = []
        doc.forEach((doc) => {
          temp.push(doc.data())
        })
        setEvent(temp)
      })

  }

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: COLORS.BACKGROUND_COLOR, flexGrow: 1, paddingBottom: 0, paddingHorizontal: 20 }} >

      <Text style={{ color: COLORS.BLACK, alignSelf: 'center', marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>EVENT PLANNER</Text>


      <View style={{ height: 50, backgroundColor: '#5DB9E3', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, alignSelf: 'center', borderRadius: 20, marginTop: 20 }}>

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


      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>

        <View style={{ height: 30, width: '30%', backgroundColor: '#006374', borderRadius: 20, alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ color: COLORS.MIDDLE_SECONDARY_COLOR }}>Event Plan</Text>
        </View>

        <Text style={{ color: COLORS.LEFT_SECONDARY_COLOR, marginLeft: 10, fontWeight: 'bold' }}>Wedding functions Packages</Text>
      </View>

      <Text style={{ color: COLORS.BLACK, fontSize: 24, marginTop: 20 }}>Popular</Text>

      <FlatList
        data={Events}
        horizontal
        renderItem={({ item }) => {
          return (
            <View style={{ marginLeft: 10, borderRadius: 10, backgroundColor: COLORS.WHITE, width: 180, height: 300, marginTop: 10, justifyContent: 'space-between' }}>

              <TouchableOpacity onPress={() => navigation.navigate('EventDetail', { ProductImage: item?.ProductImage1, threeImages: [item?.ProductImage2, item?.ProductImage3, item?.ProductImage4], ProductName: item?.ProductName, Price: item?.ProductPrice , Description: item?.ProductDescription})}>
                <Image source={{uri : item?.ProductImage1}} style={{ borderRadius: 10, width: 180, height: 200 }} />
                <View style={{ padding: 10 }}>
                  <Text style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 20 }} numberOfLines={1}>{item?.ProductName}</Text>

                </View>

              </TouchableOpacity>

              <View style={{ alignSelf: 'flex-end', paddingHorizontal: 10, padding: 10 }}>

                <AntDesign
                  name={'hearto'}
                  color={COLORS.BLACK}
                  size={18}
                />

              </View>

            </View>
          )
        }}
      />



      <Text style={{ color: COLORS.BLACK, fontSize: 24, marginTop: 20 }}>Recomended for you</Text>

      <FlatList
        data={Events}
        horizontal
        renderItem={({ item }) => {
          return (
            <View style={{ marginLeft: 10, borderRadius: 10, backgroundColor: COLORS.WHITE, width: 200, height: 300, marginTop: 10, justifyContent: 'space-between', marginBottom: 20 }}>

              <TouchableOpacity onPress={() => navigation.navigate('EventDetail', { ProductImage: item?.ProductImage1, threeImages: [item?.ProductImage2, item?.ProductImage3, item?.ProductImage4], ProductName: item?.ProductName, Price: item?.ProductPrice , Description: item?.ProductDescription})}>
                <Image source={{uri : item?.ProductImage1}} style={{ borderRadius: 10, width: 200, height: 200 }} />
                <View style={{ padding: 10 }}>
                  <Text style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 20 }} numberOfLines={1}>{item?.ProductName}</Text>

                </View>

              </TouchableOpacity>

              <View style={{ alignSelf: 'flex-end', paddingHorizontal: 10, padding: 10 }}>

                <AntDesign
                  name={'hearto'}
                  color={COLORS.BLACK}
                  size={18}
                />

              </View>

            </View>
          )
        }}
      />
    </ScrollView>
  )
}

export default EventPlanner