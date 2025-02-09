import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import ManagePostCard from "@/components/ManagePostCard/ManagePostCard";
import { useAuth } from "@/contexts/AuthContext";
import { deletePostById, getAllPosts } from "@/services/api.service";
import { LoadingContainer, ManageSystemContainer, ManageSystemContent, ManageSystemLine, ManageSystemSubTitle, ManageSystemTitle } from "@/styles/manageSystemStyle"
import { Redirect, router } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList, View, Text, Alert, ActivityIndicator } from "react-native"
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
    const [postList, setPostList] = useState<iPost[]>();
    const [loading, setLoading] = useState(false);

    if (permission != "professor") {
        return <Redirect href="/private" />
    }

    useFocusEffect(
        useCallback(() => {
            getPosts();
        }, [])
    );

    const getPosts = async () => {
        await setLoading(true);
        const data = await getAllPosts();

        await setPostList(data);
        await setLoading(false);
    }

    const deletePost = async (id: string) => {
        await deletePostById({ id });
        await getPosts();
    }


    const renderItem = ({ item }: { item: iPost }) => {
        return (
            <ManagePostCard id={item._id} key={item._id} title={item.title} description={item.description} handleDeleteFunction={deletePost} />
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
                    <CreatePostButton onPress={() => router.navigate(`/private/post/savepost`)}>
                        <FontAwesome size={18} name="book" />
                        <Text style={{ fontSize: 16, fontFamily: 'MavenPro-Bold', color: '#08244B' }}>
                            Cadastrar Post
                        </Text>
                    </CreatePostButton>
                    <ManageSystemLine />
                </ManageSystemContent>
            </ManageSystemContainer>

            {loading ? (
                <LoadingContainer>
                    <ActivityIndicator size="large" color="#08244B" />
                </LoadingContainer>
            ) : (
                <FlatList
                    data={postList}
                    renderItem={renderItem}
                    keyExtractor={(item: { _id: string }) => item._id}
                    style={{ padding: 10 }}
                    keyboardShouldPersistTaps="handled"
                />
            )}

        </View>
    )
}