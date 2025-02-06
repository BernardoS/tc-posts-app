import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import ManagePostCard from "@/components/ManagePostCard/ManagePostCard";
import { useAuth } from "@/contexts/AuthContext";
import { getAllPosts } from "@/services/api.service";
import { ManageSystemContainer, ManageSystemContent, ManageSystemLine, ManageSystemSubTitle, ManageSystemTitle } from "@/styles/manageSystemStyle"
import { Redirect, router } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, View,Text } from "react-native"
import { CreatePostButton } from "@/styles/savePostStyles";
import { FontAwesome } from "@expo/vector-icons";


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

    const { permission } = useAuth();
    const [postList, setPostList] = useState<iPost[]>()

    if (permission != "professor") {
        return <Redirect href="/private" />
    }

    useFocusEffect(()=>{
        getPosts();
    });


    const getPosts = async () => {

        const data = await getAllPosts();

        setPostList(data)
    }


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
                        Gerenciar Posts
                    </ManageSystemTitle>
                    <ManageSystemSubTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                        Aqui você pode gerenciar os posts da plataforma.
                    </ManageSystemSubTitle>
                    <CreatePostButton onPress={()=>router.navigate(`/private/post/savepost`)}>
                        <FontAwesome size={18} name="book"/>
                        <Text style={{ fontSize: 16, fontFamily: 'MavenPro-Bold', color: '#08244B' }}>
                            Cadastrar Post
                        </Text>
                    </CreatePostButton>
                    <ManageSystemLine />
                </ManageSystemContent>
            </ManageSystemContainer>


            <FlatList
                data={postList}
                renderItem={renderItem}
                keyExtractor={(item: { _id: string }) => item._id}
                style={{ padding: 10 }}
                keyboardShouldPersistTaps="handled"
            />

        </View>
    )
}