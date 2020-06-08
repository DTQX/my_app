import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { Screen, Text, Wallpaper, InfoBox, RoomCard } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { homeScreenStyles } from "./home-screen.style";
import { View, StyleSheet, ImageBackground } from "react-native";
import { color } from "../../theme";


export const HomeScreen: Component = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()
  
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ homeScreenStyles.wrapper } preset="scroll" statusBar="dark-content" backgroundColor={color.screenBackground}>
      <InfoBox></InfoBox>
      <RoomCard></RoomCard>
    </Screen>
  )
})

