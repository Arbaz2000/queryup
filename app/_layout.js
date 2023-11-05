import { Stack} from "expo-router";
import { StyleSheet ,View} from "react-native";

const Rootlayout = () =>{
      return(
            // <View style={{backgroundColor:'red'}}>
            <Stack> 
                  <Stack.Screen name="[id]" options={{title:'detailed'}}/>
                  <Stack.Screen name="index" options={{title:'home'}}/>
            </Stack>

            // </View>
      )
}

export default Rootlayout;

