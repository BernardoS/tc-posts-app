import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native"


export default function SaveUser(){

    const { id } = useLocalSearchParams();

    return (
        <Text>Save User: {id}</Text>
    )
}