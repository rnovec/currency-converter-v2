import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'

import colors from '../constants/colors'

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white
  },
  title: {
    color: colors.text,
    paddingLeft: 10,
    fontSize: 16
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
})

export const RowItem = ({ title, onPress, rightIcon }) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Image
        style={{
          width: 25,
          height: 15
        }}
        source={{
          uri: `https://github.com/transferwise/currency-flags/blob/master/src/flags/${title.toLowerCase()}.png?raw=true`
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
    {rightIcon}
  </TouchableOpacity>
)

export const RowSeparator = () => <View style={styles.separator} />
