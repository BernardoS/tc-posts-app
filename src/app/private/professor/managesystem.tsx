import Header from "@/components/Header/Header"
import {
    ManageSystemContainer,
    ManageSystemContent,
    ManageSystemLine,
    ManageSystemOption,
    ManageSystemOptionsContainer,
    ManageSystemOptionText,
    ManageSystemSubTitle,
    ManageSystemTitle
} from "@/styles/manageSystemStyle"
import { FontAwesome } from "@expo/vector-icons"
import { router } from "expo-router"
import React from "react"
import { Text } from "react-native"
// Vai listar as opções adminstrativas do sistema
export default function ManageSystem() {
    return (
        <>
            <Header />

            <ManageSystemContainer>
                <ManageSystemContent>
                    <ManageSystemTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                        Gerenciar Plataforma 
                    </ManageSystemTitle>
                    <ManageSystemSubTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                        Aqui você pode gerenciar o acesso a plataforma e os posts disponíveis, escolha abaixo a opção desejada: 
                    </ManageSystemSubTitle>
                    <ManageSystemLine/>
                    <ManageSystemOptionsContainer>
                        <ManageSystemOption onPress={() => router.navigate('/private/professor/manageuser')}>
                            <FontAwesome size={24} color="#FCC918" name="user"/>
                            <ManageSystemOptionText style={{ fontFamily: 'MavenPro-Bold' }} >Gerenciar usuários</ManageSystemOptionText>
                        </ManageSystemOption>
                        <ManageSystemOption onPress={() => router.navigate('/private/post/listpost')}>
                            <FontAwesome size={24} color="#FCC918" name="book"/>
                            <ManageSystemOptionText style={{ fontFamily: 'MavenPro-Bold' }}>Gerenciar posts</ManageSystemOptionText>
                        </ManageSystemOption>
                    </ManageSystemOptionsContainer>
                </ManageSystemContent>
            </ManageSystemContainer>
        </>

    )
}