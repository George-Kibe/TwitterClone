import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

const user = {
    id: 'u1',
    username: 'Vadim Savin',
    name: 'Vadim',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
  }

export default function NewTweet() {
  const [text, setText] = useState("")

  const saveTweet = () => {
    console.warn("Pressed")
  }
  return (
    <View style={styles.container}> 
      <View style={styles.buttonContainer}>
        <Link href="../" style={{fontSize:20}}>Cancel</Link>
        <TouchableOpacity onPress={saveTweet} style={styles.button}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Image source={{uri:user.image}} style={styles.image}/>
        <TextInput
        placeholder="What's on your mind?"
        multiline
        numberOfLines={5}
        textAlignVertical='top'
        style={{flex:1}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: "white",
      flex: 1
    },
    buttonContainer: {
      flexDirection: "row",
      marginVertical: 10,
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#1C9BF0",
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: 50,
    },
    buttonText: {
      color: "white",
      fontWeight: "600",
      fontSize: 16
    },
    inputContainer: {
      flexDirection: "row",
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10
    }
})