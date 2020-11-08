import React from 'react'
import {
  View,
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { map } from 'lodash'

import colors from '../constants/colors'
import { RowItem, RowSeparator } from '../components/RowItem'
import links from '../constants/links'
import { BannerAd } from '../components/Ads'

const openLink = url =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong.', 'Please try again later.')
  )

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.white} />

      <ScrollView>
        {map(links, (link, index) => (
          <View key={index}>
            <RowItem
              title={link.title}
              onPress={() => openLink(link.url)}
              rightIcon={
                <Entypo
                  name={link.icon || 'export'}
                  size={20}
                  color={colors.blue}
                />
              }
            />
            <RowSeparator />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.text}>Version: v1.0.0</Text>
      <BannerAd />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textLight,
    textAlign: 'center'
  }
})
