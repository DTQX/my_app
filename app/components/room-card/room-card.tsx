import React, { FunctionComponent as Component } from "react"
import { View, ImageBackground } from "react-native"
import { Text } from "../"
// import { observer } from "mobx-react-lite"
// import { useStores } from "../../models"
import { roomCardStyles } from "./room-card.styles"
import { useObserver } from "mobx-react-lite"

export interface RoomCardProps {}

/**
 * This is a React functional component, ready to 
 *
 * Component description here for TypeScript tips.
 */
export const RoomCard: Component<RoomCardProps> = props => {
  // Note: if you want your componeobservernt to refresh when data is updated in the store,
  // wrap this component in `` like so:
  // `export const RoomCard = observer(function RoomCard { ... })`
  
  // Enable this line to retrieve data from the rootStore (or other store)
  // const rootStore = useStores()
  // or
  // const { otherStore, userStore } = useStores()

  return useObserver(() => (
    <View style={roomCardStyles.card}>
        <ImageBackground source={require('../../assets/location.jpg')} style={roomCardStyles.img}>
          <View style={roomCardStyles.tip}>
            <View style={roomCardStyles.type}><Text style={roomCardStyles.tipText}>交友</Text></View>
            <Text style={roomCardStyles.tipText}>NO.82614</Text>
          </View>
          <View style={roomCardStyles.imgBottom}>
            <Text style={roomCardStyles.tipText}>#扩列交友</Text>
            <Text style={roomCardStyles.right}>
              <Text style={roomCardStyles.imgRoomNum}>96</Text>人
            </Text>
          </View>
        </ImageBackground>
        <View style={roomCardStyles.cardInfo}>
          <Text style={roomCardStyles.cardInfoText}>快来了</Text>
        </View>
      </View>
  ))
}

