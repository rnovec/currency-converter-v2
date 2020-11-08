import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob'

export const BannerAd = () => {
  function bannerError () {
    console.log('An error')
    return
  }
  useEffect(() => {
    ;(async () => {
      // Set global test device ID
      await setTestDeviceIDAsync('EMULATOR')
    })()
  }, [])

  return (
    <AdMobBanner
      style={styles.bottomBanner}
      bannerSize='fullBanner'
      adUnitID='ca-app-pub-7799243430459851/2265844763'
      onDidFailToReceiveAdWithError={bannerError}
    />
  )
}

const styles = StyleSheet.create({
  bottomBanner: {
    flex: 1,
    justifyContent: 'flex-end'
    // backgroundColor: 'red' // just for debug
  }
})
