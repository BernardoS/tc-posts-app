import CloseableHeader from "@/components/CloseableHeader/CloseableHeader"
import { useAuth } from "@/contexts/AuthContext"
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
import { FontAwesome5 } from "@expo/vector-icons"
import { Redirect, router } from "expo-router"
import React from "react"

// Vai listar as opções adminstrativas do sistema
export default function ManageUser() {

     const { permission } = useAuth();
    
        if (permission != "professor") {
            return <Redirect href="/private" />
        }

    return (
        <>
           <CloseableHeader onCloseRoute="/private/professor/managesystem">
                Gerenciar usuários
           </CloseableHeader>

            <ManageSystemContainer>
                <ManageSystemContent>
                    <ManageSystemTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                        Gerenciar Usuários 
                    </ManageSystemTitle>
                    <ManageSystemSubTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                        Aqui você pode gerenciar os usuários da plataforma, selecione abaixo qual grupo de usuários deseja gerenciar
                    </ManageSystemSubTitle>
                    <ManageSystemLine/>
                    <ManageSystemOptionsContainer>
                        <ManageSystemOption onPress={() => router.navigate('/private/user/listuser?type=professor')}>
                            <FontAwesome5 size={24} color="#FCC918" name="user-tie"/>
                            <ManageSystemOptionText style={{ fontFamily: 'MavenPro-Bold' }} >Gerenciar professores</ManageSystemOptionText>
                        </ManageSystemOption>
                        <ManageSystemOption onPress={() => router.navigate('/private/user/listuser?type=student')}>
                            <FontAwesome5 size={24} color="#FCC918" name="user-graduate"/>
                            <ManageSystemOptionText style={{ fontFamily: 'MavenPro-Bold' }}>Gerenciar alunos</ManageSystemOptionText>
                        </ManageSystemOption>
                    </ManageSystemOptionsContainer>
                </ManageSystemContent>
            </ManageSystemContainer>
        </>

    )
}