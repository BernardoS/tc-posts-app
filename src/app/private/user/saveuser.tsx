import { Text } from "react-native"

interface SaveUserProps{
    userPermission:string;
}

export default function SaveProfessor({userPermission}:SaveUserProps){
    return (
        <Text>Save User: {userPermission}</Text>
    )
}