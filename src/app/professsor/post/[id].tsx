import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function ReadPost() {

    const { id } = useLocalSearchParams();

    return (
        <Text>{id}</Text> 
    );
}