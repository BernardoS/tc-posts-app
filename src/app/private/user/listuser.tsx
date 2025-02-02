import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import UserCard from "@/components/UserCard/UserCard";
import {
    CreateUserButton,
    ManageSystemContainer,
    ManageSystemContent,
    ManageSystemLine,
    ManageSystemSubTitle,
    ManageSystemTitle
} from "@/styles/manageSystemStyle";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        const data: iUser[] = [
            { _id: '1', name: 'Bernardo Souza Ferreira da Silva', permission: 'professor', email: 'bernardo.sfs27@gmail.com' },
            { _id: '2', name: 'João da Silva', permission: 'professor', email: 'professor@gmail.com' },
        ];
        setUsers(data);
    }, []);

    const renderItem = ({ item }: { item: iUser }) => {
        return (
            <UserCard id={item._id} key={item._id} name={item.name} email={item.email} permission={item.permission} />
        );
    };

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
                    <CreateUserButton onPress={()=>router.navigate(`/private/user/saveuser?type=${type}`)}>
                        <FontAwesome size={18} name="user-plus"/>
                        <Text style={{ fontSize: 16, fontFamily: 'MavenPro-Bold', color: '#08244B' }}>
                            Cadastrar {type == "professor"?<>Professor</> :<>Aluno</>}
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