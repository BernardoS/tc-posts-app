import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native"


export default function SaveUser() {

    const { id, type } = useLocalSearchParams();

    return (
        <View>
            <CloseableHeader onCloseRoute={`/private/user/listuser?type=${type}`}>
                {id ? <>Editar </> : <>Criar </>}
                {type == "professor" ? <>Professor </> : <>Aluno </>}
            </CloseableHeader>
            <Text>Save User: {type}</Text>
        </View>

    )
}