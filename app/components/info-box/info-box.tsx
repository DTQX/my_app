import React, { FunctionComponent as Component } from "react"
import { View } from "react-native"
import { Text } from "../"
// import { observer } from "mobx-react-lite"
// import { useStores } from "../../models"
import { infoBoxStyles as styles } from "./info-box.styles"
import { useObserver } from "mobx-react-lite"

export interface InfoBoxProps {}

/**
 * This is a React functional component, ready to 
 *
 * Component description here for TypeScript tips.
 */
export const InfoBox: Component<InfoBoxProps> = props => {
  // Note: if you want your componeobservernt to refresh when data is updated in the store,
  // wrap this component in `` like so:
  // `export const InfoBox = observer(function InfoBox { ... })`
  
  // Enable this line to retrieve data from the rootStore (or other store)
  // const rootStore = useStores()
  // or
  // const { otherStore, userStore } = useStores()

  return useObserver(() => (
    <View style={styles.wrapper}>
      <Text>Hi Func</Text>
    </View>
  ))
}
