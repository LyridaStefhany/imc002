import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Resultado = (valores) => {
  return (
    <View>
      <Text>{valores.mensagemResultadoIMC}</Text>
      <Text>{valores.ResultadoIMC}</Text>
    </View>
  )
}

export default Resultado

const styles = StyleSheet.create({})