import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native"

export default function ListUser(){

    const { type } = useLocalSearchParams();

    return (
        <Text>User:{type}</Text>
    )
}