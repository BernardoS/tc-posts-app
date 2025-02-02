import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native"


export default function SaveUser() {

    const { id } = useLocalSearchParams();

    return (
        <View>
            <CloseableHeader onCloseRoute="/private/user/manageuser">
                {id ? <>Editar usuário</> : <>Criar usuário</>}
            </CloseableHeader>
            <Text>Save User: {id}</Text>
        </View>

    )
}