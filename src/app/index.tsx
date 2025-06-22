import React from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/header'

const dimensions = Dimensions.get('window')

function Home() {
  const width = dimensions.width
  const height = dimensions.height

  return (
    <SafeAreaView
      style={{
        width,
        height,
        flex: 1,
      }}
    >
      <View className="flex-[.1]">
        <Header />
      </View>
      <ScrollView className="flex-[.9]">
        <View>
          <Text>Teste </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
