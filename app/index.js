import { StyleSheet, Text, View ,FlatList} from "react-native";
import QustionList from "../src/components/QustionList";
import questions from "../data/questions";
import questionDetailsPage from "./[id]";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={questions.items}
        renderItem={({item}) => <QustionList question={item}/> }
        showsVerticalScrollIndicator={false}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "left",
    // padding: 10,
  },
});
