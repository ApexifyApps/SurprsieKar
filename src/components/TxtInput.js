import { View, Text, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../utils/COLORS'

const TxtInput = (props) => {
  return (
    <TextInput
      style={{ height: 50, borderRadius: 100, backgroundColor: COLORS.WHITE, paddingHorizontal: 10, width: '90%', alignItems: 'center', justifyContent: 'center', marginTop: 10, color: COLORS.BLACK }}
      placeholderTextColor={'gray'}
      placeholder={props.txt}
      onChangeText={props.onChangeText}
      value={props.val}
    />
  )
}

export default TxtInput