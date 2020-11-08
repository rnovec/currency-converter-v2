import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob'
import { ADMOB_ID } from '../constants/keys'
console.log(process.env)
export const BannerAd = () => {
  function bannerError () {
    console.log('An error')
    return
  }
  useEffect(() => {
    const deviceID = async () => await setTestDeviceIDAsync('EMULATOR')
    if (process.env.NODE_ENV === 'development') deviceID()
  }, [])

  return (
    <AdMobBanner
      style={styles.bottomBanner}
      bannerSize='fullBanner'
      adUnitID={ADMOB_ID}
      onDidFailToReceiveAdWithError={bannerError}
    />
  )
}

const styles = StyleSheet.create({
  bottomBanner: {
    flex: 1,
    maxHeight: 70,
    justifyContent: 'flex-end'
    // backgroundColor: 'red' // just for debug
  }
})
