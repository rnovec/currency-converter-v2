# React Native Basics: Build a Currency Converter

This is an example React Native project that implements a basics currency converter.

You can learn to build this app in the free course [React Native Basics](https://www.reactnativebasics.com/)!

## Installation

- This project requires Expo. To install Expo follow [these instructions](https://expo.io/learn).
- Clone/download the project
- From the project directory, run `npm install` or `yarn install`

## Running

- iOS: `npm run ios`/`yarn run ios`
- Android: `npm run android`/`yarn run android`

npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
cd android
./gradlew assembleRelease


Before uploading the release build to the Play Store,
make sure you test it thoroughly.

    mkdir -p android/app/src/main/assets
    react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
    react-native run-android --variant=release

cd android && ./gradlew bundleRelease -x bundleReleaseJsAndAssets

- Your AAB will be present in the folder
  <project>/android/app/build/outputs/bundle/release

