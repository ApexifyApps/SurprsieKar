import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../utils/COLORS'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Inbox = () => {
    return (
        <View style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flex: 1, paddingBottom: 0, justifyContent:'space-between' }} >
            <View style={{ height: 60, backgroundColor: COLORS.PRIMARY_COLOR, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, color: COLORS.BLACK, fontWeight: 'bold' }}>INBOX</Text>
            </View>
            

            
            <View style={{height:60, backgroundColor:COLORS.WHITE,alignItems:'center', flexDirection:'row', paddingHorizontal:20}}>
                <TextInput
                placeholder='Type....'
                placeholderTextColor={'gray'}
                style={{width:'90%'}}
                />

                <TouchableOpacity style={{height:40, width:40, backgroundColor:COLORS.PRIMARY_COLOR , borderRadius:100, alignItems:'center', justifyContent:'center'}}>
                    <FontAwesome
                    name={'send'}
                    color={COLORS.WHITE}
                    size={15}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Inbox