import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../utils/COLORS';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const CustomTabBar = ({ state, descriptors, navigation }) => {


    return (
        <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[COLORS.LEFT_SECONDARY_COLOR, COLORS.MIDDLE_SECONDARY_COLOR, COLORS.LEFT_SECONDARY_COLOR]}
            style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, flexDirection: 'row', justifyContent: 'space-around' }}
        >
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}> */}
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const icon = getIcon(route.name, isFocused); // Replace with a function that maps route names to icons


                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={{ height: 60, alignItems: 'center', justifyContent: 'space-around', }}
                    >
                        {icon}
                        {/* <Text style={{ color: isFocused ? 'blue' : 'black' }}>{label}</Text> */}
                    </TouchableOpacity>
                );
            })}
            {/* </View> */}
        </LinearGradient>
    );
};

const getIcon = (routeName, isFocused) => {
    switch (routeName) {
        case 'Home':
            return <Entypo name="home" size={22} color={isFocused ? 'black' : 'gray'} />;
        case 'Event':
            return <Ionicons name="calendar" size={22} color={isFocused ? 'black' : 'gray'} />;
        case 'Search':
            return <Feather name="search" size={22} color={isFocused ? 'black' : 'gray'} />;
        case 'Chat':
            return <Ionicons name="chatbubble-sharp" size={22} color={isFocused ? 'black' : 'gray'} />;
        case 'Profile':
            return <Ionicons name="person" size={22} color={isFocused ? 'black' : 'gray'} />;
        // Add more cases as needed
        default:
            return <Ionicons name="message-circle" size={22} color={isFocused ? 'black' : 'gray'} />;
    }
};

export default CustomTabBar;
