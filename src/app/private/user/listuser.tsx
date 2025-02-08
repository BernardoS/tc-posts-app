import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import UserCard from "@/components/UserCard/UserCard";
import { useAuth } from "@/contexts/AuthContext";
import { getProfessors, getStudents } from "@/services/api.service";
import {
    CreateUserButton,
    ManageSystemContainer,
    ManageSystemContent,
    ManageSystemLine,
    ManageSystemSubTitle,
    ManageSystemTitle
} from "@/styles/manageSystemStyle";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
    FlatList,
    Text
} from "react-native";

interface iUser {
    _id: string;
    name: string;
    permission: string;
    email: string;
}

export default function ListUser() {

    const { type } = useLocalSearchParams();
    const [users, setUsers] = useState<iUser[]>([]);
    const { permission } = useAuth();


    useFocusEffect(
        useCallback(() => {
            inicializaPagina();
        }, [type])
    );

    const inicializaPagina = async () => {
        if (type) {
            switch (type) {
                case "professor":
                    const professors = await getProfessors();
                    setUsers(professors);
                    break;
                case "student":
                    const students = await getStudents();
                    setUsers(students);
                    break;
                default:
                    router.navigate("/private");
                    break;
            }
        } else {
            router.navigate("/private")
        }
    }

    const renderItem = ({ item }: { item: iUser }) => {
        return (
            <UserCard id={item._id} key={item._id} name={item.name} email={item.email} permission={item.permission} />
        );
    };

    if (permission != "professor") {
        return <Redirect href="/private" />
    }

    return (
        <>
            <CloseableHeader onCloseRoute="/private/professor/manageuser">
                {type == "professor" && <>Gerenciar Professores</>}
                {type == "student" && <>Gerenciar Alunos</>}
            </CloseableHeader>
            <ManageSystemContainer>
                <ManageSystemContent>
                    <ManageSystemTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                        {type == "professor" && <>Gerenciar Professores</>}
                        {type == "student" && <>Gerenciar Alunos</>}
                    </ManageSystemTitle>
                    <ManageSystemSubTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                        {type == "professor" && <>Aqui você pode gerenciar os professores da plataforma, abaixo você tem a lista de todos os professores que podem gerenciar a plataforma</>}
                        {type == "student" && <>Aqui você pode gerenciar os alunos da plataforma, abaixo você tem a lista de todos os alunos que podem entrar na plataforma</>}
                    </ManageSystemSubTitle>
                    <CreateUserButton onPress={() => router.navigate(`/private/user/saveuser?type=${type}`)}>
                        <FontAwesome size={18} name="user-plus" />
                        <Text style={{ fontSize: 16, fontFamily: 'MavenPro-Bold', color: '#08244B' }}>
                            Cadastrar {type == "professor" ? <>Professor</> : <>Aluno</>}
                        </Text>
                    </CreateUserButton>
                    <ManageSystemLine />
                </ManageSystemContent>
            </ManageSystemContainer>

            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item: { _id: string }) => item._id}
                style={{ padding: 10 }}
                keyboardShouldPersistTaps="handled"
            />
        </>
    )
}