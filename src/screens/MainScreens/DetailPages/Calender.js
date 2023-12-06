
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../../utils/COLORS';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import EvilIcons from 'react-native-vector-icons/EvilIcons'
const Calender = ({ navigation }) => {
    const [selectedDate, setSelectedDates] = useState()

    const renderDay = (date) => {
        let dayStyle = { alignItems: 'center', borderRadius: 100, justifyContent: 'center', height: 20, width: 20, backgroundColor: selectedDate === date.dateString ? COLORS.LEFT_SECONDARY_COLOR : COLORS.PRIMARY_COLOR, borderRadius: 200 };


        return (
            <TouchableOpacity onPress={() => setSelectedDates(date.dateString)} style={dayStyle}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{date.day}</Text>
            </TouchableOpacity>
        );
    };

    console.log("selectedDate", selectedDate)


    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.PRIMARY_COLOR }}>
            <LinearGradient

                colors={[COLORS.LEFT_SECONDARY_COLOR, COLORS.MIDDLE_SECONDARY_COLOR, COLORS.LEFT_SECONDARY_COLOR]}
                style={{

                    width: '100%',
                    alignSelf: 'center',
                    // borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 50,




                }}
            >

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ borderRadius: 100, padding: 10, }}>
                    <MaterialIcons
                        name={"arrow-back"}
                        color={COLORS.BLACK}
                        size={28}
                    />
                </TouchableOpacity>


                <View style={{ paddingBottom: 20, width: '90%', alignSelf: 'center' }}>


                    <Calendar
                        current={moment().format('YYYY-MM-DD')}

                        markedDates={{
                            [selectedDate]: {
                                selected: true,
                                selectedColor: 'blue',
                            },
                        }}
                        style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
                        hideExtraDays={true}
                        enableSwipeMonths={true}
                        theme={{
                            calendarBackground: '#FFDFDF',
                            textSectionTitleColor: '#000000',
                            textSectionTitleDisabledColor: '#000000',
                            selectedDayBackgroundColor: '#000000',
                            selectedDayTextColor: '#000000',
                            todayTextColor: '#000000',
                            dayTextColor: '#000000',
                            textDisabledColor: '#000000',
                            dotColor: '#000000',
                            selectedDotColor: '#000000',
                            arrowColor: '#000000',
                            disabledArrowColor: '#000000',
                            monthTextColor: "#000000",
                        }}

                        dayComponent={({ date }) => renderDay(date)}
                        markingType={'period'}
                        onDayLongPress={(day) => {

                            console.log("Datsssss", day);


                        }}

                    />

                </View>


            </LinearGradient>



            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[COLORS.LEFT_SECONDARY_COLOR, COLORS.MIDDLE_SECONDARY_COLOR, COLORS.LEFT_SECONDARY_COLOR]}
                style={{

                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 20,

                    padding: 10,
                    marginTop: 20
                }}
            >
                <Text style={{ color: COLORS.BLACK, fontSize: 20 }}>Please enter the time</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                        <View>
                            <Text style={{ color: COLORS?.BLACK, marginBottom: 5 }}>Start time:</Text>
                            <TextInput
                                style={{ height: 50, maxWidth: 100, backgroundColor: COLORS.WHITE, borderRadius: 10, paddingHorizontal: 10, color: COLORS.BLACK }}
                                placeholder={"8:00 AM/PM"}
                                placeholderTextColor={COLORS.BLACK}
                            />
                        </View>

                        <Text style={{ color: COLORS.BLACK, fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginRight: 10, marginTop:20 }}>to</Text>

                        <View>
                            <Text style={{ color: COLORS?.BLACK, marginBottom: 5 }}>End time:</Text>
                            <TextInput
                                style={{ height: 50, maxWidth: 100, backgroundColor: COLORS.WHITE, borderRadius: 10, paddingHorizontal: 10, color: COLORS.BLACK }}
                                placeholder={"8:00 AM/PM"}
                                placeholderTextColor={COLORS.BLACK}
                            />
                        </View>
                    </View>

                </View>

                <Text style={{ color: COLORS.BLACK, fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>In these placeholders, you will add the start time and end time of your event</Text>


            </LinearGradient>


            <View>

                <View style={{ height: 200, backgroundColor: '#5DB9E3', opacity: 0.2, width: '90%', alignSelf: 'center', marginTop: 10, borderRadius: 10 }}
                />
                {
                    //text data
                }

                <View style={{ position: 'absolute', top: 35, width: '80%', alignSelf: 'center' }}>
                    <Text style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 20 }}>Venue</Text>
                </View>
                <View style={{ position: 'absolute', top: 70, width: '80%', alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <EvilIcons
                            name={'location'}
                            size={20}
                            color={COLORS.BLACK}
                        />
                        <Text style={{ color: COLORS.BLACK, }}>
                            Karachi
                        </Text>



                        <AntDesign
                            name={'calendar'}
                            size={20}
                            color={COLORS.BLACK}
                            style={{ marginLeft: 20 }}
                        />
                        <Text style={{ color: COLORS.BLACK, marginLeft: 2 }}>

                            OCTOBER 16, 2023
                        </Text>
                    </View>
                </View>
                <View style={{ height: 50, width: 50, backgroundColor: COLORS.PRIMARY_COLOR, position: 'absolute', bottom: 40, borderRadius: 2000 }} />

                <View style={{ position: 'absolute', borderRadius: 200, alignSelf: 'center', bottom: 65, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />
                    <View style={{ height: 1, width: 10, backgroundColor: COLORS.BLACK }} />

                </View>


                {
                    //text data
                }
                <View style={{ position: 'absolute', bottom: 10, width: '80%', alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>


                        <Text style={{ color: COLORS.BLACK, fontSize: 20 }}>
                            Company name
                        </Text>




                        <Text style={{ color: COLORS.BLACK, marginLeft: 2, fontWeight: 'bold' }}>

                            Pkr. 100000
                        </Text>
                    </View>
                </View>





                <View style={{ height: 50, width: 50, backgroundColor: COLORS.PRIMARY_COLOR, borderRadius: 2000, position: 'absolute', bottom: 40, right: 0 }} />

            </View>


            <TouchableOpacity style={{ backgroundColor: "#006374", height: 60, width: '90%', alignSelf: 'center', marginTop: 10, borderRadius: 20, elevation: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: COLORS.WHITE, fontWeight: 'bold', fontSize: 20 }}>CONFIRM</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Calender