import { Text,View,StyleSheet ,Pressable} from "react-native";
import { Link } from "expo-router";
import { decode } from "html-entities";

const QustionList = ({ question }) =>{
      return(
            <Link href={`/${question.question_id}`} asChild>
                  <Pressable style={styles.container}>
                        <Text style={styles.stats}>
                        vote {question.score} • ans {question.answer_count} • view {question.view_count}                  </Text>
                        <Text style={styles.title}>{decode(question.title)}</Text>
                        <Text numberOfLines={2} style={styles.body}>{decode(question.body_markdown)}</Text>
                        <View style={styles.tags}>
                              {question.tags.map((tag)=>(
                                    <Text key={tag} style={styles.tag}>{tag}</Text>
                                    ))}
                              <Text style={styles.date}>{new Date(question.creation_date *1000).toDateString()}</Text>
                        </View>
                  </Pressable>
            </Link>
      );
}
const styles=StyleSheet.create({
      container:{
            padding: 10,
            borderBottomWidth: 0.5,
            borderColor: 'lightgray',
      },
      title:{
            color:'#0063bf',
            marginVertical:10
      },
      stats:{
            fontSize:12,
            fontWeight:'bold'
      },
      body:{
            fontSize:14,
            color:'dimgray'
      },
      tags:{
            flexDirection:'row',
            flexWrap:'wrap',
            gap:7,
            alignItems:'center',
            marginTop:10,
      },
      tag:{
            backgroundColor:'#e1ecf4',
            color:'#39739d',
            padding:5,
            borderRadius:5,
            overflow:'hidden',
            fontSize:12,
      },
      date:{
            marginLeft:'auto',
            // marginBottom:'auto',
            fontSize:12,
            color:'dimgray'
      },
      // link:{
      //       flex:1,
      //       padding:5,
      //       alignContent:'center'
      // }
})
export default QustionList;