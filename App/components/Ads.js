import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'expo-ads-admob'

class Ads extends React.Component {
  bannerError () {
    console.log('An error')
    return
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <AdMobBanner
          style={styles.bottomBanner}
          bannerSize='fullBanner'
          adUnitID='ca-app-pub-7799243430459851/2265844763'
          testDeviceID='EMULATOR'
        />
      </View>
    )
  }
}


export default Ads