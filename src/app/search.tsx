import { router, useLocalSearchParams} from "expo-router";
import { useEffect } from "react";
import { Alert, Text, View } from "react-native";

export default function Search(){
    
    const searchParams = useLocalSearchParams();

    useEffect(()=>{
        console.log(searchParams);
    },[searchParams])

    return(
        <View>
           <Text>Pesquisa</Text> 
        </View>
    )
}

