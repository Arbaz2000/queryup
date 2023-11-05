import { View,Text,FlatList} from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import quetions from "../data/questions"
import QuestionHeader from "../src/components/Qustionheader";
import answers from "../data/answers";
import AnswersList from "../src/components/AnswersList";

const questionDetailsPage =()=>{
      const {id}=useSearchParams();

      const question=quetions.items.find((q) => q.question_id == id)

      if(!question){
            return(
                  <Text>question not found</Text>
            )
      }

      return(
            <View style={{backgroundColor:'white',flex:1}}>
             {/*  

            </QuestionHeader> */}
            <FlatList
            data={answers.items}
            renderItem={({item}) => <AnswersList answer={item}/>}
            ListHeaderComponent={<QuestionHeader question={question}/>}
            />
            </View>
      )
}

export default questionDetailsPage;