import CloseableHeader from "@/components/CloseableHeader/CloseableHeader"
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

export default function SavePost(){

    const { id } = useLocalSearchParams();

    return (
        <ScrollView>
            <CloseableHeader onCloseRoute={`/private/post/${id}`} >
                {id ? "Editar Post" :"Criar Post"}
            </CloseableHeader>
            <Text>{id}</Text>
        </ScrollView>
    )
}