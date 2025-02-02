import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import Header from "@/components/Header/Header"
import ManagePostCard from "@/components/ManagePostCard/ManagePostCard";
import { ManageSystemContainer, ManageSystemContent, ManageSystemLine, ManageSystemSubTitle, ManageSystemTitle } from "@/styles/manageSystemStyle"
import React from "react";
import { FlatList, Text, View } from "react-native"


interface iPost {
    _id: string;
    title?: string;
    description?: string;
    content?: string;
    author?: string;
    modifyDate?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export default function ListPost() {

    const data: iPost[] = [
        { _id: '1', title: 'Geografia - O que é latitude e longitude?', description: 'Descubra como a latitude e a longitude ajudam a localizar qualquer ponto no planeta e sua importância para a navegação e os sistemas de GPS' },
        { _id: '2', title: 'Geografia - O que é latitude e longitude?', description: 'Descubra como a latitude e a longitude ajudam a localizar qualquer ponto no planeta e sua importância para a navegação e os sistemas de GPS' },
    ];

    const renderItem = ({ item }: { item: iPost }) => {
        return (
            <ManagePostCard id={item._id} key={item._id} title={item.title} description={item.description} />
        );
    };

    return (
        <View style={{ flex: 1 }}>
             <CloseableHeader onCloseRoute="/private/professor/managesystem">
                <>Gerenciar Posts</>
            </CloseableHeader>
            <ManageSystemContainer>
            <ManageSystemContent>
                <ManageSystemTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                    Gerenciar Plataforma
                </ManageSystemTitle>
                <ManageSystemSubTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                    Aqui você pode gerenciar os posts da plataforma.
                </ManageSystemSubTitle>
                <ManageSystemLine />
            </ManageSystemContent>
            </ManageSystemContainer>
            

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item: { _id: string }) => item._id}
                style={{ padding: 10 }}
                keyboardShouldPersistTaps="handled"
            />

        </View>
    )
}