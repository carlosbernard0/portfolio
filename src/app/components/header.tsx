import { useEffect } from 'react'
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const window = Dimensions.get('window')

export default function Header() {
  const width = window.width

  const sections = [
    'Início',
    'Sobre',
    'Habilidades',
    'Experiência',
    'Projetos',
    'Contato',
  ]

  if (width < 760) {
    console.log(width)
  }

  return (
    <View className="fixed flex-row flex-1 justify-around w-full bg-white">
      <View>
        <Text>Carlos Bernardo</Text>
      </View>
      <View>
        <FlatList
          data={sections}
          horizontal
          contentContainerStyle={{ gap: 12 }}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}
