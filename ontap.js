import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ontap = () => {
  return (
    <View style={styles.container}>
    <View style={styles.square}>
      <Text style={styles.text}>Hello, world</Text>
    </View>
  </View>
  )
}

export default ontap

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})