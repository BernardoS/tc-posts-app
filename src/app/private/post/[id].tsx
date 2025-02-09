import { AuthorLabel, DeleteButton, EditButton, LoadingContainer, PostActionContainer, PostDate, PostHeader, PostSectionContainer, PostSectionTitle, PostTitle } from "@/styles/postStyles";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import GenericPostCover from "../../../assets/images/generic-post-cover.png";
import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import { FontAwesome } from "@expo/vector-icons";
import { getPostById } from "@/services/api.service";
import { useFocusEffect } from "@react-navigation/native";

interface iPost {
    title: string;
    description: string;
    content: string;
    author: string;
    createdAt: string;
}

export default function Post() {

    const { id } = useLocalSearchParams();
    const [postData, setPostData] = useState<iPost>();
    const [loading, setLoading] = useState(false);

    useFocusEffect(
        useCallback(() => {
            inicializaPagina();
        }, [id])
    );

    const inicializaPagina = () => {
        if (id) {
            getPostData(id.toString());
        } else {
            router.navigate("/private")
        }
    }

    const getPostData = async (id: string) => {
        await setLoading(true);
        
        const postData = await getPostById({ id });

        await setPostData({
            title: postData.title,
            author: postData.author,
            content: postData.content,
            createdAt: postData.createdAt,
            description: postData.description
        });

        await setLoading(false);

    }

    const formatarData = (dataString: string | undefined): string => {
        if (!dataString)
            return ""

        const data = new Date(dataString);
        const dia = data.getDay().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear().toString();
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <ScrollView>
            <CloseableHeader>
                Post
            </CloseableHeader>
            {loading ? (
                <LoadingContainer>
                    <ActivityIndicator size="large" color="#08244B" />
                </LoadingContainer>
            ) : (
                <>
                    <PostHeader source={GenericPostCover} reziseMode="cover" >
                        <PostTitle style={{ fontFamily: 'MavenPro-Bold' }}>{postData?.title} </PostTitle>
                        <PostDate style={{ fontFamily: 'MavenPro-Bold' }}>Criado em: {formatarData(postData?.createdAt)}</PostDate>
                    </PostHeader>
                    <PostSectionContainer>
                        <PostSectionTitle style={{ fontFamily: 'MavenPro-Bold' }} >Descrição</PostSectionTitle>
                        <Text style={{ fontFamily: 'MavenPro-Bold' }} >
                            {postData?.description}
                        </Text>
                    </PostSectionContainer>
                    <PostSectionContainer>
                        <PostSectionTitle style={{ fontFamily: 'MavenPro-Bold' }} >Conteúdo</PostSectionTitle>
                        <Text style={{ fontFamily: 'MavenPro-Bold' }} >
                            {postData?.content}
                        </Text>
                        <AuthorLabel style={{ fontFamily: 'MavenPro-Bold' }}>
                            Escrito por: {postData?.author}
                        </AuthorLabel>
                    </PostSectionContainer>
                </>
            )}


        </ScrollView>
    );
}