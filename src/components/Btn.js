import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../utils/COLORS'

const Btn = (props) => {
  return (
    <TouchableOpacity onPress={props.nav} style={{height:50, width:'90%', backgroundColor:COLORS.PRIMARY_COLOR, alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:10}}>
        <Text style={{color:COLORS.WHITE , fontSize:20, fontWeight:'bold'}}>{props.txt}</Text>
    </TouchableOpacity>
  )
}

export default Btn